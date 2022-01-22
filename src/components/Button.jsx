import React from "react";

const Button = (props) => {
  const onClick = props.onClick;
  const { children, className, ...restProps } = props;
  return (
    <button
      className={`bg bg-primary-300 text-white px-6 py-2 text-xl rounded-xl h-11 flex items-center justify-center ${className}`}
      {...restProps}
    >
      {props.children}
    </button>
  );
};

export default Button;
