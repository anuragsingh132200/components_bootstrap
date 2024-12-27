import React from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import getChartColorsArray from "../../../Components/Common/ChartsDynamicColor";

//Import images
import smallImage1 from '@assets/images/small/img-1.jpg';
import smallImage2 from '@assets/images/small/img-2.jpg';
import smallImage3 from '@assets/images/small/img-3.jpg';
import smallImage4 from '@assets/images/small/img-4.jpg';

const SimplePie = ({ dataColors }:any) => {
    var chartPieBasicColors = getChartColorsArray(dataColors);
    const series = [44, 55, 13, 43, 22]
    var options:any = {
        chart: {
            height: 300,
            type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        legend: {
            position: 'bottom'
        },
        dataLabels: {
            dropShadow: {
                enabled: false,
            }
        },
        colors: chartPieBasicColors
    };
    return (
        <>
        
        <ReactApexChart
            dir="ltr"
            className="apex-charts"
            series={series}
            options={options}
            type="pie"
            height="300px"
        />
        
        </>
    )
}
export default SimplePie;