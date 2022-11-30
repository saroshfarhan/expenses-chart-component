import React, { useEffect } from "react";
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
  const [dataG, setDataG] = useState(JSON.parse(JSON.stringify(data)));

  const date = new Date();
  let day = date.getDay();
  if (day === 0) {
    day = 7;
  }

  useEffect(() => {
    const newData = dataG.map((data, index) => {
      if (index === day) {
        return { ...data, color: "hsl(186, 34%, 60%)" };
      } else {
        return { ...data, color: "hsl(10, 79%, 65%)" };
      }
    });
    setDataG(newData);
  }, []);

  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <BarChart
        data={dataG}
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
        <Bar dataKey="amount" fill={dataG.color} radius={[5, 5, 5, 5]}>
          {dataG.map((entry, index) => (
            <Cell
              key={index}
              fill={
                focusBar === index || mouseLeave ? entry.color : entry.color
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
