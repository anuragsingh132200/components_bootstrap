import React from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

import getChartColorsArray from "../../../Components/Common/ChartsDynamicColor";

const StackedAreaChart = ({dataColors}:any) => {
    var BasicAreaChartsColors = getChartColorsArray(dataColors);
    var generateDayWiseTimeSeries = function (baseval:any, count:any, yrange:any) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = baseval;
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            series.push([x, y]);
            baseval += 86400000;
            i++;
        }
        return series;
    };

    const series = [{
        name: 'South',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'North',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 20
        })
    },
    {
        name: 'Central',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 15
        })
    }
    ];
    var options:any = {
        chart: {
            type: 'area',
            height: 350,
            stacked: true,
            toolbar: {
                show: false
            },
            events: {
                selection: function (chart:any, e:any) {
                }
            },
        },
        colors: BasicAreaChartsColors,
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.6,
                opacityTo: 0.8,
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left'
        },
        xaxis: {
            type: 'datetime'
        },
    };

    return (
        <React.Fragment>
            
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                type="area"
                height="350"
                className="apex-charts"
            />
            
        </React.Fragment>
    );
};

export default StackedAreaChart;