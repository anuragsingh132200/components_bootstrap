import React from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import getChartColorsArray from "../../../Components/Common/ChartsDynamicColor";

//Import images
import smallImage1 from '@assets/images/small/img-1.jpg';
import smallImage2 from '@assets/images/small/img-2.jpg';
import smallImage3 from '@assets/images/small/img-3.jpg';
import smallImage4 from '@assets/images/small/img-4.jpg';

const PatternedDonut = ({ dataColors }:any) => {
    var chartPiePatternColors = getChartColorsArray(dataColors);
    const series = [44, 55, 41, 17, 15]
    var options:any = {
        chart: {
            height: 300,
            type: 'donut',
            dropShadow: {
                enabled: true,
                color: '#111',
                top: -1,
                left: 3,
                blur: 3,
                opacity: 0.2
            }
        },
        stroke: {
            width: 0,
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        total: {
                            showAlways: true,
                            show: true
                        }
                    }
                }
            }
        },
        labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
        dataLabels: {
            dropShadow: {
                blur: 3,
                opacity: 0.8
            }
        },
        fill: {
            type: 'pattern',
            opacity: 1,
            pattern: {
                enabled: true,
                style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
            },
        },
        states: {
            hover: {
                filter: 'none'
            }
        },
        theme: {
            palette: 'palette2'
        },
        title: {
            text: "Favourite Movie Type",
            style: {
                fontWeight: 500,
            },
        },
        legend: {
            position: 'bottom'
        },
        colors: chartPiePatternColors
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


export default PatternedDonut;