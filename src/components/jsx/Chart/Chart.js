import React from "react";

import CharBar from "./ChartBar";
import "../../styles/Chart.css";

const Chart = (props) => {
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <CharBar
                    value={dataPoint.value}
                    maxValue={null}
                    label={dataPoint.label}
                    key={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;
