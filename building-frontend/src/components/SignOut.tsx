import React from 'react';
import { Box, Button } from "@mui/material";
import { useLogin } from 'hooks/useLogin';
import { useRouter } from 'next/router'
import { resetCredential } from '@/store/ducks/auth/slice';

export function SignOut() {
    const { resetCredential } = useLogin();
    const router = useRouter();
    const logout = () => {
        resetCredential();
        router.push('/login');
    }
    return (
        <Box>
            <Button
                sx={{ width: "120px", marginTop: "12px" }}
                color="error"
                variant="contained"
                onClick={() => {
                    logout()
                }}
            >
                Sign Out
            </Button>
        </Box>
    )
}