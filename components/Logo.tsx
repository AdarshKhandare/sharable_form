import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="font-bold text-3xl bg-gradient-to-r from-orange-700 to-yellow-500 text-transparent bg-clip-text hover:cursor-pointer">
      SharableForm
    </Link>
  );
};

export default Logo;
