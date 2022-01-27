import React from "react";
import { ActiveLink } from "raviger";
import toast from "react-hot-toast";
const Navbar = () => {
  return (
    <div className="bg-primary-100 flex justify-between text-3xl py-3 px-5 items-center">
      <p className="text-bold font-semibold">LoveDSA</p>
      <ActiveLink
        href="/"
        className="bg bg-primary-300 text-white px-5 py-2 text-xl rounded-xl flex items-center justify-center gap-2 pr-4"
        exactActiveClass="invisible"
        onClick={() => {
          localStorage.removeItem("username");
          toast.success("Logged out!");
        }}
      >
        Logout
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
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      </ActiveLink>
    </div>
  );
};

export default Navbar;
