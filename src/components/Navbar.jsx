import React from "react";
import { ActiveLink } from "raviger";
import toast from "react-hot-toast";
const Navbar = () => {
  return (
    <div className="bg-primary-100 flex justify-between text-3xl py-3 px-5 items-center">
      <p className="text-bold font-semibold">LoveDSA</p>
      <ActiveLink
        href="/"
        className="bg bg-primary-300 text-white px-6 py-2 text-xl rounded-xl"
        exactActiveClass="invisible"
        onClick={() => {
          localStorage.removeItem("username");
          toast.success("Logged out!");
        }}
      >
        Logout
      </ActiveLink>
    </div>
  );
};

export default Navbar;
