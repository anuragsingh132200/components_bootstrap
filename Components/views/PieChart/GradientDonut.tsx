import React from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import getChartColorsArray from "../../../Components/Common/ChartsDynamicColor";

//Import images
import smallImage1 from '@assets/images/small/img-1.jpg';
import smallImage2 from '@assets/images/small/img-2.jpg';
import smallImage3 from '@assets/images/small/img-3.jpg';
import smallImage4 from '@assets/images/small/img-4.jpg';

const GradientDonut = ({ dataColors }:any) => {
    var chartPieGradientColors = getChartColorsArray(dataColors);
    const series = [44, 55, 41, 17, 15]
    var options:any = {

        chart: {
            height: 300,
            type: 'donut',
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient',
        },
        legend: {
            position: 'bottom',
            formatter: function (val:any, opts:any) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex]
            }
        },
        title: {
            text: 'Gradient Donut with custom Start-angle',
            style: {
                fontWeight: 500,
            },
        },
        colors: chartPieGradientColors
    };
    return (
        <>
        
        <ReactApexChart
            dir="ltr"
            className="apex-charts"
            series={series}
            options={options}
            type="donut"
            height="300px"
        />
        
        </>

    )
}

export default GradientDonut;