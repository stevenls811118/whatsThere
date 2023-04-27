import React from "react";

import logo from "../../images/logo2.png";

export default function Header() {
  return (
    <div>
      <img src={logo} alt="logo" className="h-40 bg-tertiary/5 rounded-full" />
    </div>
  );
}
