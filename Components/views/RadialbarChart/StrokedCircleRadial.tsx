import React from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

// Import Images
import comingSoon from "@assets/images/comingsoon.png";
import Img4 from "@assets/images/small/img-4.jpg";

import getChartColorsArray from "../../../Components/Common/ChartsDynamicColor";

const StrokedCircleRadial = ({ dataColors }:any) => {
    var chartStorkeRadialbarColors = getChartColorsArray(dataColors);
    const series = [67]
    var options:any = {

        chart: {
            height: 326,
            type: 'radialBar',
            offsetY: -10
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                    name: {
                        fontSize: '16px',
                        color: undefined,
                        offsetY: 120
                    },
                    value: {
                        offsetY: 76,
                        fontSize: '22px',
                        color: undefined,
                        formatter: function (val:any) {
                            return val + "%";
                        }
                    }
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91]
            },
        },
        stroke: {
            dashArray: 4
        },
        labels: ['Median Ratio'],
        colors: chartStorkeRadialbarColors
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
export default StrokedCircleRadial;
