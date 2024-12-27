import React from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

import getChartColorsArray from "../../../Components/Common/ChartsDynamicColor";

const SteplineChart = ({ dataColors } :any ) => {
    var SteplineChartColors = getChartColorsArray(dataColors);
    const series = [
        {
            data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
        },
    ];
    const options:any = {
        stroke: {
            curve: "stepline",
        },
        dataLabels: {
            enabled: !1,
        },
        title: {
            text: "Stepline Chart",
            align: "left",
            style: {
                fontWeight: 500,
            },
        },
        markers: {
            hover: {
                sizeOffset: 4,
            },
        },
        colors: SteplineChartColors,
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                type="line"
                height={350}
                className="apex-charts"
            />
        </React.Fragment>
    );
};

export default SteplineChart;