import React from "react";

import logo from "../../images/logo2.png";

export default function Header() {
  return (
    <div className="absolute top-0 left-0 z-20">
      <img src={logo} alt="logo" className="h-40 m-3" />
    </div>
  );
}
