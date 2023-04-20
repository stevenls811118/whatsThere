import Link from "next/link";

export default function PageFooter() {
  
  return (
    <footer>
      <div>
        <Link href={"/"} className="underline">WhatsThere? &copy; 2023</Link>
      </div>
    </footer>
    )
};