"use client";
import { Button } from "./ui/button";
import React, { useState } from "react";

function Navbar() {
  const [state, setState] = useState(false);
  const navigation = [
    { title: "About Me", path: "#about" },
    { title: "My Journey", path: "#journey" },
    { title: "My Projects", path: "#project" },
  ];
  return (
    <header className="fixed top-0 z-50 text-foreground w-screen">
      <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
        <div className="flex justify-between">
          <a href="#" className="text-2xl font-bold">
            Ikhsan
          </a>
          <button
            className="text-gray-500 outline-none md:hidden"
            onClick={() => setState(!state)}
          >
            {state ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`flex-1 justify-between mt-12 md:flex md:mt-0 ${
            state ? "" : "hidden"
          }`}
        >
          <li className="order-2 pb-5 md:pb-0">
            <a
              href="https://www.linkedin.com/in/muhammad-ikhsan-kurniawan-0b763028a/"
              className="font-semibold text-base"
            >
              <Button
                variant="outline"
                className="font-semibold text-base transition ease-in-out duration-700 hover:bg-transparent hover:ring-4 ring-muted"
              >
                Get In Touch
              </Button>
            </a>
          </li>
          <div className="order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => (
              <li
                className="hover:scale-110 hover:text-neutral-200 transition-transform duration-300"
                key={idx}
              >
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
