import React from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

import getChartColorsArray from "@common/ChartsDynamicColor";

const AreaNullValueChart = ({dataColors}:any) => {
    var BasicAreaChartsColors = getChartColorsArray(dataColors);
    const series = [{
        name: 'Network',
        data: [{
            x: 'Dec 23 2017',
            y: null
        },
        {
            x: 'Dec 24 2017',
            y: 44
        },
        {
            x: 'Dec 25 2017',
            y: 31
        },
        {
            x: 'Dec 26 2017',
            y: 38
        },
        {
            x: 'Dec 27 2017',
            y: null
        },
        {
            x: 'Dec 28 2017',
            y: 32
        },
        {
            x: 'Dec 29 2017',
            y: 55
        },
        {
            x: 'Dec 30 2017',
            y: 51
        },
        {
            x: 'Dec 31 2017',
            y: 67
        },
        {
            x: 'Jan 01 2018',
            y: 22
        },
        {
            x: 'Jan 02 2018',
            y: 34
        },
        {
            x: 'Jan 03 2018',
            y: null
        },
        {
            x: 'Jan 04 2018',
            y: null
        },
        {
            x: 'Jan 05 2018',
            y: 11
        },
        {
            x: 'Jan 06 2018',
            y: 4
        },
        {
            x: 'Jan 07 2018',
            y: 15,
        },
        {
            x: 'Jan 08 2018',
            y: null
        },
        {
            x: 'Jan 09 2018',
            y: 9
        },
        {
            x: 'Jan 10 2018',
            y: 34
        },
        {
            x: 'Jan 11 2018',
            y: null
        },
        {
            x: 'Jan 12 2018',
            y: null
        },
        {
            x: 'Jan 13 2018',
            y: 13
        },
        {
            x: 'Jan 14 2018',
            y: null
        }
        ],
    }];
    var options:any = {
        chart: {
            type: 'area',
            height: 350,
            animations: {
                enabled: false
            },
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        fill: {
            opacity: 0.8,
            type: 'pattern',
            pattern: {
                style: ['verticalLines', 'horizontalLines'],
                width: 5,
                height: 6
            },
        },
        markers: {
            size: 5,
            hover: {
                size: 9
            }
        },
        title: {
            text: 'Network Monitoring',
            style: {
                fontWeight: 500,
            },
        },
        tooltip: {
            intersect: true,
            shared: false
        },
        theme: {
            palette: 'palette1'
        },
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            title: {
                text: 'Bytes Received'
            }
        },
        colors: BasicAreaChartsColors,
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

export default AreaNullValueChart;