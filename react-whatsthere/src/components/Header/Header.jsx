import React from "react";

import logo from '../../images/logo2.png';

export default function Header() {
  return (
    <div className=" bg-primary h-[20vh]" >
      <div className="h-full flex items-center justify-center">
        <img src={logo} alt="logo" className="h-full" />
      </div>
    </div>
  );
}
