import React from 'react';
import { useState, useEffect } from 'react';
import { IBuilding } from 'api/charts/types';
import { Grid, Box, Typography, Button, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

/* eslint-disable react-hooks/rules-of-hooks */
export function Overview({ buildingData }: { buildingData: any }) {
    const [itemIndex, setItemIndex] = useState(0);
    const [currentItem, setCurrentItem] = useState<any>({});
    const [cursor, setCursor] = useState(0);
    const [page, setPage] = useState(1);

    const handleBack = () => {
        if (page > 1) {
            setCursor(cursor - 5);
            setPage(page - 1);
        }
    };
    const handleForward = () => {
        setCursor(cursor + 5);
        setPage(page + 1);
    };

    useEffect(() => {
        if (buildingData) setCurrentItem(buildingData[0]);
    }, [buildingData]);

    return (
        <Grid container sx={{ display: "flex" }} flexDirection={{ xs: "column", md: "row" }}>
            <Grid item xs={4}>
                <Box
                    sx={{ backgroundColor: "#fff" }}
                    borderRadius={1}
                    width={{ xs: "70vw", md: "240px" }}
                    height="320px"
                    p={2}
                    display="flex"
                    flexDirection={"column"}
                    alignItems="flex-start"
                >
                    <Typography sx={{ color: "#000", textAlign: "left" }} pb={1}>
                        {currentItem?.PropertyName}
                    </Typography>
                    <Typography sx={{ color: "#000" }} pb={1}>
                        {currentItem?.PrimaryPropertyType}
                    </Typography>{" "}
                    <Typography sx={{ color: "#000" }} pb={1}>
                        {currentItem?.Address}
                    </Typography>{" "}
                    <Typography sx={{ color: "#000" }} pb={1}>
                        # of floors: {currentItem?.NumberOfFloors}
                    </Typography>{" "}
                    <Typography sx={{ color: "#000" }} pb={1}>
                        District:{currentItem?.CouncilDistrictCode}
                    </Typography>{" "}
                    <Typography sx={{ color: "#000" }} pb={1}>
                        Built in{currentItem?.YearBuilt}
                    </Typography>{" "}
                    <img src="./images/placeholder.jpg" height="110px" width="240px" />
                </Box>
            </Grid>
            <Grid item xs={8}>
                <Box display="flex" flexDirection={"column"} alignItems="flex-end">
                    {buildingData.map((e, i) => {
                        if (i >= cursor && i < cursor + 5) {
                            var maxLength = 40;
                            return (
                                <Button key={i}
                                    sx={{
                                        height: "48px",
                                        width: "240px",
                                        margin: "0px 0px 12px 12px",
                                    }}
                                    variant={itemIndex === i ? "contained" : "outlined"}
                                    onClick={() => {
                                        setItemIndex(i);
                                        setCurrentItem(buildingData[i]);
                                    }}
                                >
                                    {buildingData[i].PropertyName.substring(0, maxLength)}
                                </Button>
                            );
                        }
                    })}

                    <Box
                        display="flex"
                        alignItems={"center"}
                        width="120px"
                        justifyContent={"space-between"}
                    >
                        <IconButton onClick={handleBack}>
                            <ArrowBackIosIcon />
                        </IconButton>
                        <Typography sx={{ color: "#fff" }}>{page}</Typography>{" "}
                        <IconButton onClick={handleForward}>
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Grid>
        </Grid >
    );
};
