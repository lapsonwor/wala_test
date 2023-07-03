import React from 'react';
import { IAverageEuiTypes, IBuilding, useAverageEuis, useBuildings } from '@/api/charts'
import { useState, useEffect } from 'react';
import { PageComponent, GetServerSidePropsContext } from 'next';
import { Box, Button, Typography, CircularProgress } from "@mui/material";

import { Overview } from "@/components/Overview";
import { BarChart } from "@/components/BarChart";
import { SignOut } from '@/components/SignOut';
import { Head } from "@/components/Head";
import { useTabContext } from 'contexts/useTabContext';
import { isAuthenticated } from '@/lib/isAuthenticated';
import { useRouter } from 'next/router'

/* eslint-disable react-hooks/rules-of-hooks */
export default function Home(ctx: GetServerSidePropsContext) {
  const router = useRouter();
  const { tabIndex, setTabIndex } = useTabContext();
  let { data, isLoading } = tabIndex === 0 ? useBuildings() : useAverageEuis();

  const chart = tabIndex && data ? <BarChart chartData={data} /> : <div />
  const overview = tabIndex === 0 && data ? <Overview buildingData={data} /> : <div />

  useEffect(() => {

  }, []);
  if (!isAuthenticated(ctx)) {
    router.push('/login');
  } else {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", margin: "0 15vw" }}>
        <Head />
        {isLoading ? (
          <CircularProgress />
        ) : (<div />)}
        {tabIndex === 0 && <div>{overview}</div>}
        {tabIndex === 1 && <div>{chart}</div>}
        <SignOut />
      </Box >
    )
  }
};
