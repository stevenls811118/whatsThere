import Link from "next/link";
import React from "react";

import Login from "../Welcome/login";

export default function Nav() {
  return (
    <div>
      <nav className="flex flex-row justify-around bg-tertiary text-white p-2 items-center">
          <Link href={"/"} className="underline">Home</Link>
          <Link href={"/dashboard"} className="underline">User Dashboard</Link>
          <Login />
      </nav>
    </div>
  );
};