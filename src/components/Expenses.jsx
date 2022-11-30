import React from "react";
import MyBalance from "../baseComponents/MyBalance";
import Chart from "../baseComponents/Chart";

function Expenses() {
  return (
    <div>
      <MyBalance />
      <div className="mt-6 w-[21.25rem] rounded-xl bg-white md:w-[31.25rem] lg:w-[31.25rem] ">
        <h1 className="px-6 py-6 text-3xl font-bold text-darkBrown">
          Spending - Last 7 days
        </h1>
        <div id="chart-card" className=" px-6">
          <Chart />
          <br />
          <hr />
        </div>

        <div className="flex items-end justify-between px-6 py-6">
          <div className="text-left">
            <p className="text-sm font-medium text-medBrown">
              Total this month
            </p>
            <h1 className="text-[2.5rem] font-bold text-darkBrown">$478.33</h1>
          </div>
          <div className="text-right">
            <h3 className="text-lg font-bold text-darkBrown">+2.4%</h3>
            <p className="text-sm font-medium text-medBrown">from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expenses;
