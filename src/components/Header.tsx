import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-[#071B3D] text-white shadow-md">
      <div className="flex items-center">
        <a className="flex items-center space-x-2" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-6 w-6"
          >
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            <rect width="20" height="14" x="2" y="6" rx="2"></rect>
          </svg>
          <span className="text-xl font-bold">Harano Koki Blog</span>
        </a>
      </div>
      <nav className="hidden md:flex space-x-4">
        <a className="hover:underline" href="#">
          About
        </a>
        <a className="hover:underline" href="#">
          Skills
        </a>
        <a className="hover:underline" href="#">
          Work
        </a>
        <a className="hover:underline" href="#">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
