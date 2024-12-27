import React from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

import getChartColorsArray from "../../../Components/Common/ChartsDynamicColor";

const RangeColumn = ({ dataColors }:any) => {
    var chartRangeColors = getChartColorsArray(dataColors);
    const series = [
        {
            data: [
                {
                    x: "Team A",
                    y: [1, 5],
                },
                {
                    x: "Team B",
                    y: [4, 6],
                },
                {
                    x: "Team C",
                    y: [5, 8],
                },
                {
                    x: "Team D",
                    y: [3, 11],
                },
            ],
        },
        {
            data: [
                {
                    x: "Team A",
                    y: [2, 6],
                },
                {
                    x: "Team B",
                    y: [1, 3],
                },
                {
                    x: "Team C",
                    y: [7, 8],
                },
                {
                    x: "Team D",
                    y: [5, 9],
                },
            ],
        },
    ];
    var options:any = {
        chart: {
            type: "rangeBar",
            height: 335,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: !1,
            },
        },
        dataLabels: {
            enabled: !0,
        },
        legend: {
            show: !1,
        },
        colors: chartRangeColors,
    };

    return (
        <>
        
            <ReactApexChart dir="ltr" className="apex-charts"
            options={options}
            series={series}
            type="rangeBar"
            height={335}
            />
    
        </>
        );
};

export default RangeColumn;