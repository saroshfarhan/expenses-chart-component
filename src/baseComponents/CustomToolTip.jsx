import React from "react";

function CustomToolTip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="w-[80px] rounded-md border-none bg-darkBrown outline-none">
        <p className="px-2 py-2 text-center font-bold text-white">
          ${payload[0].value}
        </p>
      </div>
    );
  }
}

export default CustomToolTip;
