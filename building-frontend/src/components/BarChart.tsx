import React from 'react';
import type { PageComponent } from 'next';
import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import { IAverageEuiTypes } from 'api/charts/types';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
} from "chart.js";

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale
)

/* eslint-disable react-hooks/rules-of-hooks */
export function BarChart({ chartData }: { chartData: any }) {
    const [chartCfg, setChartCfg] = useState({
        labels: chartData.map((data) => data.type),
        datasets: [{
            label: "Average EUI By Property Type",
            data: chartData.map((data) => data.average_eui),
            backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
                "#FFEB3B",
                "#209651",
                "#BC6AD9",
                "#72D098",
                "#2F82EE",
                "#2F9FDB",
                "#58CFF4",
                "#9C50E2 ",
                "#BC6AD9",
                "#CEAED9 ",
                "#333333 ",
                "#808080",
            ],
            borderColor: "black",
            borderWidth: 2,
        }],
    });
    return (
        <Bar data={chartCfg} />
    )
}