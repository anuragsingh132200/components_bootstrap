import React from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

// Import Images
import comingSoon from "@assets/images/comingsoon.png";
import Img4 from "@assets/images/small/img-4.jpg";

import getChartColorsArray from "../../../Components/Common/ChartsDynamicColor";
const ImageRadialbar = ({ dataColors }:any) => {
    const series = [67];
    var options:any = {
        chart: {
            height: 315,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 15,
                    size: '65%',
                    image: comingSoon.src,
                    imageWidth: 56,
                    imageHeight: 56,
                    imageClipped: false
                },
                dataLabels: {
                    name: {
                        show: false,
                        color: '#fff'
                    },
                    value: {
                        show: true,
                        color: '#333',
                        offsetY: 65,
                        fontSize: '22px'
                    }
                }
            }
        },
        fill: {
            type: 'image',
            image: {
                src: [Img4.src],
            }
        },
        stroke: {
            lineCap: 'round'
        },
        labels: ['Volatility'],
    };
    return (
        <>
        {typeof window !== 'undefined' && (
        <ReactApexChart
            dir="ltr"
            className="apex-charts"
            series={series}
            options={options}
            type="radialBar"
            height={328.7}
        />
        )}
        </>
    );
};
export default ImageRadialbar;