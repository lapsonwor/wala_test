import React, { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import { useForm, Controller } from "react-hook-form";
import { useMutation } from 'react-query';
import { loginRequest } from "@/api/auth";
import { parseJson } from '@/lib/utils';
import { STORAGE_KEY } from "@/lib/constants";
// import { getCookies, removeCookies, setCookies } from '@/lib/cookies';
import { useRouter } from 'next/router'
import { useLogin } from "hooks/useLogin";
import { ILoginParams } from "@/api/auth";


export default function Login() {
    const router = useRouter()
    const [errorMsg, setErrorMsg] = useState('');
    const { setCredential, setToken } = useLogin();

    const { mutate, isLoading } = useMutation(loginRequest, {
        onSuccess: async (data, params) => {
            if (data?.token) {
                setCredential({
                    username: params.username,
                    password: params.password
                });
                setToken(data.token);
                router.push('/');
            }
        },
        onError: (err: any) => setErrorMsg(err?.message),
    });
    const defaultValues = {
        username: "",
        password: "",
    };
    const { control, watch } = useForm({
        reValidateMode: "onChange",
        defaultValues,
    });

    const userLogin = () => {
        let credential = {
            username: watch("username"),
            password: watch("password")
        };
        mutate(credential);
    };


    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh"
            }}
        >
            <form>
                <Box
                    sx={{
                        backgroundColor: "#fff",
                        border: "2px solid black",
                    }}
                    borderRadius={1}
                    height="280px"
                    width="400px"
                    p={2}
                >
                    <Typography sx={{ color: "#000", fontWeight: "600" }} py={3}>
                        Seattle Building Data Visualization
                    </Typography>

                    <Box
                        display="flex"
                        mb={2}
                        pr={4}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Typography sx={{ color: "#000" }}>Username</Typography>
                        <Controller
                            control={control}
                            name="username"
                            render={({
                                field: { onChange, value },

                            }) => (
                                <TextField
                                    onChange={onChange}
                                    variant="outlined"
                                    value={value}
                                    sx={{ width: "240px" }}
                                />
                            )}
                        />
                    </Box>

                    <Box
                        display="flex"
                        mb={2}
                        pr={4}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Typography sx={{ color: "#000" }}>Password</Typography>
                        <Controller
                            control={control}
                            name="password"
                            render={({
                                field: { onChange, value },

                            }) => (
                                <TextField
                                    type="password"
                                    name="password"
                                    onChange={onChange}
                                    variant="outlined"
                                    value={value}
                                    sx={{ width: "240px" }}
                                />
                            )}
                        />
                    </Box>

                    <LoadingButton
                        type="submit"
                        color="error"
                        variant="contained"
                        loading={isLoading}
                        onClick={() => { userLogin() }}
                    >
                        Login
                    </LoadingButton>
                </Box>
                <Box>
                    {errorMsg?.length > 0 && (
                        <Typography sx={{ color: "red" }}>{errorMsg}</Typography>
                    )}
                </Box>
            </form>
        </Box >
    );
};