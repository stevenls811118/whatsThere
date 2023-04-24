import React from "react";

export default function Header() {
  return (
    <div className="h-[15vh] bg-primary text-white text-center font-mono">
      <div className="p-6 font-bold text-5xl">
        <h1>WhatsThere?</h1>
      </div>
      <div className="bg-primary text-white italic pb-4">
        <p>The Perfect Travel Companion!</p>
      </div>
    </div>
  );
}
