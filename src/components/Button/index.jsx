import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[18px]" };
const variants = {
  gradient: { red_900_red_A700_00: "bg-gradient  text-white-A700" },
  outline: {
    white_A700: "border border-solid border-white-A700 text-white-A700",
  },
};
const sizes = { xs: "p-1.5", sm: "p-[17px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "outline",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["gradient", "outline"]),
  color: PropTypes.oneOf(["red_900_red_A700_00", "white_A700"]),
};

export { Button };
