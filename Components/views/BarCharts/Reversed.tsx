import React from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

import getChartColorsArray from "../../../Components/Common/ChartsDynamicColor";

const Reversed = ({ dataColors }:any) => {
    var chartBarReversedColors = getChartColorsArray(dataColors);
    const series = [
        {
            data: [400, 430, 448, 470, 540, 580, 690],
        },
    ];

    var options:any = {
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false,
            }
        },
        annotations: {
            xaxis: [{
                x: 500,
                borderColor: '#038edc',
                label: {
                    borderColor: '#038edc',
                    style: {
                        color: '#fff',
                        background: '#038edc',
                    },
                    text: 'X annotation',
                }
            }],
            yaxis: [{
                y: 'July',
                y2: 'September',
                label: {
                    text: 'Y annotation'
                }
            }]
        },
        colors: chartBarReversedColors,
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: true
        },
        xaxis: {
            categories: ['June', 'July', 'August', 'September', 'October', 'November', 'December'],
        },
        grid: {
            xaxis: {
                lines: {
                    show: true
                }
            }
        },
        yaxis: {
            reversed: true,
            axisTicks: {
                show: true
            }
        }
    };

    return (
        <React.Fragment>
            
            <ReactApexChart
                dir="ltr"
                className="apex-charts"
                options={options}
                series={series}
                type="bar"
                height={350}
            />
            
        </React.Fragment>
    );
};

export default Reversed;