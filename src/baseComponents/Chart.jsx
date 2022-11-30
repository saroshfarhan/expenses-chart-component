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

  function setHoverColor(focus, index) {
    const date = new Date();
    let day = date.getDay();
    if (day === 0) {
      day = 7;
    }
    const currentDayColor = "hsl(186, 34%, 60%)";
    const currentDayHover = "hsl(186, 34%, 72%)";
    const baseColor = "hsl(10, 79%, 65%)";
    const baseHover = "hsl(10, 79%, 80%)";
    if (focus === index) {
      if (day === index + 1) {
        return currentDayHover;
      } else {
        return baseHover;
      }
    } else {
      if (day === index + 1) {
        return currentDayColor;
      } else {
        return baseColor;
      }
    }
  }

  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <BarChart
        data={data}
        width={462}
        height={218}
        onMouseMove={(state) => {
          if (state.isTooltipActive) {
            setFocusBar(state.activeTooltipIndex);
          } else {
            setFocusBar(null);
          }
        }}
      >
        <Bar dataKey="amount" fill="hsl(10, 79%, 65%)" radius={[5, 5, 5, 5]}>
          {data.map((entry, index) => (
            <Cell key={index} fill={setHoverColor(focusBar, index)} />
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

export default Chart;
