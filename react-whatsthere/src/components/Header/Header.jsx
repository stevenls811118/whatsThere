import React from "react";

import logo from '../../images/logo2.png';
import header from '../../images/header.jpg';

export default function Header() {
  return (
    <div className=" h-[20vh]" >
      <div className="h-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${header})` }}>
        <img src={logo} alt="logo" className="h-full" />
      </div>
    </div>
  );
}
