import React from "react";

import CharBar from "./ChartBar";
import "../../styles/Chart.css";

const Chart = (props) => {
    const valueDataPoints = props.dataPoints.map(dataPoint => dataPoint.value);

    //get the total amount expended in the current year    
    const totalMax = valueDataPoints.reduce((a,b) => a + b,0);

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
