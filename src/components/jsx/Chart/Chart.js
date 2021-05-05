import React from "react";

import CharBar from "./ChartBar";
import "../../styles/Chart.css";

const Chart = (props) => {
    const valueDataPoints = props.dataPoints.map(dataPoint => dataPoint.value);

    //using spread op to return a comma separated values instead of array
    const totalMax = Math.max(...valueDataPoints);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <CharBar
                    value={dataPoint.value}
                    maxValue={totalMax}
                    label={dataPoint.label}
                    key={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;
