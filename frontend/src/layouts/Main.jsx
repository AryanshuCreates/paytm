import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex flex-col">
      <Outlet />
    </div>
  );
};

export default Main;
