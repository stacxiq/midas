import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder10: "rounded-[10px]" };
const variants = {
  FillAmber700: "bg-amber_700 text-gray_50",
  OutlineBlack9003f: "bg-amber_700 shadow-bs text-gray_50",
  OutlineAmber700:
    "bg-white_A700 border border-amber_700 border-solid text-gray_900",
  OutlineAmber700_1: "border border-amber_700 border-solid text-amber_700",
  OutlineGray7003f: "bg-amber_700 shadow-bs1 text-white_A700",
};
const sizes = { sm: "p-1.5", md: "p-[9px]", lg: "p-[13px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
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
  shape: PropTypes.oneOf(["RoundedBorder10"]),
  variant: PropTypes.oneOf([
    "FillAmber700",
    "OutlineBlack9003f",
    "OutlineAmber700",
    "OutlineAmber700_1",
    "OutlineGray7003f",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
