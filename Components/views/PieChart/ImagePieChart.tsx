import React from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import getChartColorsArray from "../../../Components/Common/ChartsDynamicColor";

//Import images
import smallImage1 from '@assets/images/small/img-1.jpg';
import smallImage2 from '@assets/images/small/img-2.jpg';
import smallImage3 from '@assets/images/small/img-3.jpg';
import smallImage4 from '@assets/images/small/img-4.jpg';

const ImagePieChart = ({ dataColors }:any) => {
    var chartPieImageColors = getChartColorsArray(dataColors);
    const series = [44, 33, 54, 45]
    const options:any = {
        chart: {
            width: 380,
            type: 'pie',
        },
        colors: chartPieImageColors,
        fill: {
            type: 'image',
            opacity: 0.85,

            image: {
                src: [smallImage1.src, smallImage2.src, smallImage3.src, smallImage4.src],
                width: 25,
                imagedHeight: 25
            },

        },
        stroke: {
            width: 4
        },
        dataLabels: {
            enabled: true,
            style: {
                colors: ['#111']
            },
            background: {
                enabled: true,
                foreColor: '#fff',
                borderWidth: 0
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }

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

export default ImagePieChart;