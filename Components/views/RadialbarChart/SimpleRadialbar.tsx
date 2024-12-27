import React from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

// Import Images
import comingSoon from "@assets/images/comingsoon.png";
import Img4 from "@assets/images/small/img-4.jpg";

import getChartColorsArray from "../../../Components/Common/ChartsDynamicColor";

const SimpleRadialbar = ({ dataColors }:any) => {
    var chartRadialbarBasicColors = getChartColorsArray(dataColors);
    const series = [70]
    var options:any = {

        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%',
                }
            },
        },
        labels: ['Cricket'],
        colors: chartRadialbarBasicColors
    };
    return (
        <>
        
        <ReactApexChart
            dir="ltr"
            className="apex-charts"
            series={series}
            options={options}
            type="radialBar"
            height={328.7}
        />
        
        </>
    )
}
export default SimpleRadialbar;