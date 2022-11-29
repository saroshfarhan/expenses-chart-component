import React from "react";
import logo from "../assets/images/logo.svg";

function MyBalance() {
  return (
    <div className="flex w-[21.25rem] justify-between rounded-xl bg-softRed md:w-[31.25rem] lg:w-[31.25rem]">
      <div className="py-6 px-6">
        <p className="text-sm font-normal text-white">My Balance</p>
        <h1 className="text-2xl font-semibold text-white">$921.48</h1>
      </div>
      <img src={logo} alt="logo" className="py-6 px-6" />
    </div>
  );
}

export default MyBalance;
