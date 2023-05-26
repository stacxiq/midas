import React from "react";

const variantClasses = {
  h1: "font-normal text-[8px]",
  h2: "font-bold sm:text-[40px] md:text-[46px] text-[50px]",
  h3: "font-bold text-5xl sm:text-[38px] md:text-[44px]",
  h4: "font-bold sm:text-[35.45px] md:text-[41.45px] text-[45.45px]",
  h5: "font-bold sm:text-4xl md:text-[38px] text-[40px]",
  h6: "font-normal text-4xl sm:text-[32px] md:text-[34px]",
  body1:
    "sm:text-[28.299999999999997px] md:text-[30.299999999999997px] text-[32.3px]",
  body2: "font-bold sm:text-[22.67px] md:text-[24.67px] text-[26.67px]",
  body3: "font-bold md:text-2xl sm:text-[22px] text-[26px]",
  body4: "text-2xl md:text-[22px] sm:text-xl",
  body5: "text-xl",
  body6: "font-normal text-base",
  body7: "font-normal text-[15.67px]",
  body8: "font-normal text-sm",
  body9: "font-normal text-[12.6px]",
  body10: "font-normal text-xs",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
