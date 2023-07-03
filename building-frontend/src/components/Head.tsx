import React, { FC, useState } from 'react';
import { Box, Button, Typography } from "@mui/material";
import { useTabContext } from 'contexts/useTabContext';

export function Head() {
    const { tabIndex, setTabIndex } = useTabContext();
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "3vw", fontWeight: "600" }} py={3}>
                Seattle Building Data Visualization
            </Typography>
            <Box display="flex">
                <Button
                    sx={{ height: "40px", marginLeft: "12px" }}
                    variant={tabIndex === 0 ? "contained" : "outlined"}
                    onClick={() => {
                        setTabIndex(0);
                    }}
                >
                    Overview
                </Button>

                <Button
                    sx={{ height: "40px", marginLeft: "12px" }}
                    variant={tabIndex === 1 ? "contained" : "outlined"}
                    onClick={() => {
                        setTabIndex(1);
                    }}
                >
                    Charts
                </Button>
            </Box>
        </Box>
    )
};