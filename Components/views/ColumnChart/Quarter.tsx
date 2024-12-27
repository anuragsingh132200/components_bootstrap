import React from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

import getChartColorsArray from "../../../Components/Common/ChartsDynamicColor";

const Quarter = ({ dataColors }:any) => {
    var ChartQuater = getChartColorsArray(dataColors);
    const series = [
        {
            data: [],
        },
    ];

    var optionsQuarter:any = {
        chart: {
            id: 'barQuarter',
            height: 330,
            width: '100%',
            type: 'bar',
            stacked: true
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
                horizontal: false
            }
        },
        legend: {
            show: false
        },
        grid: {
            yaxis: {
                lines: {
                    show: false,
                }
            },
            xaxis: {
                lines: {
                    show: true,
                }
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        },
        title: {
            text: 'Quarterly Results',
            offsetX: 10,
            style: {
                fontWeight: 500,
            },
        },
        tooltip: {
            x: {
                formatter: function (val:any, opts:any) {
                    return opts.w.globals.seriesNames[opts.seriesIndex];
                }
            },
            y: {
                title: {
                    formatter: function (val:any, opts:any) {
                        return opts.w.globals.labels[opts.dataPointIndex];
                    }
                }
            }
        }
    };

    return (
        <>
        
        <ReactApexChart dir="ltr" className="apex-charts"
            series={series}
            options={optionsQuarter}
            type="bar"
            height={330}
        />
        
        </>
    );
};

export default Quarter