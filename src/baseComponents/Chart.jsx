import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
import data from "../data.json";
import CustomToolTip from "./CustomToolTip";
import { useState } from "react";

function Chart() {
  const [focusBar, setFocusBar] = useState(null);
  const [mouseLeave, setMouseLeave] = useState(true);
  const date = new Date();
  let day = date.getDay();
  console.log(day);

  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <BarChart
        data={data}
        width={462}
        height={218}
        onMouseMove={(state) => {
          if (state.isTooltipActive) {
            setFocusBar(state.activeTooltipIndex);
            setMouseLeave(false);
          } else {
            setFocusBar(null);
            setMouseLeave(true);
          }
        }}
      >
        <Bar dataKey="amount" fill="hsl(10, 79%, 65%)" radius={[5, 5, 5, 5]}>
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={
                focusBar === index || mouseLeave
                  ? "hsl(10, 79%, 75%)"
                  : "hsl(10, 79%, 65%)"
              }
            />
          ))}
        </Bar>
        <XAxis
          dataKey="day"
          axisLine={false}
          stroke="hsl(28, 10%, 53%)"
          fontWeight="bold"
        />
        <Tooltip
          content={<CustomToolTip />}
          wrapperStyle={{ outline: "none" }}
          cursor={false}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

// /width={462} height={218}
//<div className="w-[21.25rem] md:w-[31.25rem] lg:w-[31.25rem]">
//</div>

export default Chart;
