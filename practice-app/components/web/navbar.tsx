"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="cursor-pointer text-2xl font-bold">MyApp</h1>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 font-medium md:flex">
          <li>
            <Link href="/" className="transition hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="transition hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/about/profile" className="transition hover:text-gray-200">
              Profile
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="transition hover:text-gray-200">
              Blog
            </Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button className="rounded-lg bg-white px-4 py-2 font-semibold text-blue-600 transition hover:bg-gray-100">
            Login
          </button>
          <button className="rounded-lg bg-white px-4 py-2 font-semibold text-blue-600 transition hover:bg-gray-100">
            Sign-Up
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-blue-500 bg-blue-700 md:hidden">
          <ul className="flex flex-col p-4">
            <li>
              <Link
                href="#"
                className="block rounded px-3 py-2 hover:bg-blue-800"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block rounded px-3 py-2 hover:bg-blue-800"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block rounded px-3 py-2 hover:bg-blue-800"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block rounded px-3 py-2 hover:bg-blue-800"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}