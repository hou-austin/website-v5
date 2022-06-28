import React from "react";
import Link from "next/link";

const NavigationBar: React.FC = () => {
  return (
    <div className="width-full sticky backdrop-blur dark:bg-black/95">
      <nav className="flex items-center justify-between max-w-7xl mx-auto dark:text-white">
        <ul>
          <li>
            <Link href="/">
              <a className="text-xs font-bold">Austin Hou</a>
            </Link>
          </li>
        </ul>
        <ul></ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
