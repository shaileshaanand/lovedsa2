import React from "react";

const Footer = () => {
  return (
    <div className="flex p-2 items-center justify-center text-lg">
      Made with{""}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mx-1 text-red-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>{" "}
      by
      <a
        href="https://github.com/shaileshaanand"
        target="_blank"
        className="ml-1 underline font-semibold"
      >
        Shailesh
      </a>
    </div>
  );
};

export default Footer;
