import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar bg-black text-white">
        {/* Left: Hamburger Menu */}
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Center: Logo and Navigation Links */}
        <div className="flex-1 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="btn btn-ghost text-xl">
        <Image src="/Logo_2.webp" alt="logo" height={300} width={300} />
          </Link>

          {/* Navigation Links */}
          <ul className="flex space-x-4 text-gray-300">
            <li className="hover:text-white cursor-pointer">
              <Link href="/">HOME</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link href="/blog">BLOG</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link href="/destination">DESTINATION</Link>
            </li>

            {/* Dropdowns */}
            <li className="relative cursor-pointer hover:text-white">
              
              <select className="ml-2 bg-black text-gray-300 rounded-md focus:outline-none">
                <option value="">CATEGORIES</option>
                <option value="">Category 2</option>
                <option value="">Category 3</option>
                <option value="">Category 4</option>
              </select>
            </li>

            <li className="relative cursor-pointer hover:text-white">
              
              <select className="ml-2 bg-black text-gray-300  rounded-md focus:outline-none">
                <option value="">GALLERY</option>
                <option value="">Gallery 2</option>
                <option value="">Gallery 3</option>
                <option value="">Gallery 4</option>
              </select>
            </li>

            <li className="hover:text-white cursor-pointer">
              <Link href="/about">ABOUT</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>

        {/* Right: Extra Options */}
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}
