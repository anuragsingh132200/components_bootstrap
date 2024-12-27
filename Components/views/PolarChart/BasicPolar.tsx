import React from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

import getChartColorsArray from "../../../Components/Common/ChartsDynamicColor";

const BasicPolar = ({ dataColors }:any) => {
    var chartPolarareaBasicColors = getChartColorsArray(dataColors);
    const series = [14, 23, 21, 17, 15, 10, 12, 17, 21]
    var options:any = {

        chart: {
            type: 'polarArea',
            width: 400,
        },
        labels: ['Series A', 'Series B', 'Series C', 'Series D', 'Series E', 'Series F', 'Series G', 'Series H', 'Series I'],
        stroke: {
            colors: ['#fff']
        },
        fill: {
            opacity: 0.8
        },

        legend: {
            position: 'bottom'
        },
        colors: chartPolarareaBasicColors
    };
    return (
        <>
        
        <ReactApexChart
            dir="ltr"
            className="apex-charts"
            series={series}
            options={options}
            type="polarArea"
            height={310}
        />
        
        </>
    )
}
export default BasicPolar;
