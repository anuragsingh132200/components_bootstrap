import React from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import getChartColorsArray from "../../../Components/Common/ChartsDynamicColor";

const SimpleRadar = ({ dataColors }:any) => {
    var chartRadarBasicColors = getChartColorsArray(dataColors);
    const series = [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
    }]
    var options:any = {

        chart: {
            height: 350,
            type: 'radar',
            toolbar: {
                show: false
            }
        },
        colors: chartRadarBasicColors,
        xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June']
        }
    };
    return (
        <>
    
        <ReactApexChart
            dir="ltr"
            className="apex-charts"
            series={series}
            options={options}
            type="radar"
            height='350'
        />
        
        </>
    )
}
export default SimpleRadar;