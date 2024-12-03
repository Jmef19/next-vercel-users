"use client";
import Link from "next/link";

function NavBar() {
  return (
    <div className="bg-blue-500 w-full h-full flex flex-row justify-between items-center px-12 py-4 sticky top-0 left-0 z-50 shadow-md">
      <Link href="/">
        <h1 className="text-white text-xl font-bold cursor-pointer hover:underline">
          Home
        </h1>
      </Link>
      <Link href="/about">
        <h1 className="text-white text-xl font-bold cursor-pointer hover:underline">
          About
        </h1>
      </Link>
    </div>
  );
}

export default NavBar;
