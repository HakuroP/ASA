import React from "react";

const sizeClasses = {
  txtJostRomanRegular23: "font-jost font-normal",
  txtJostRomanRegular24: "font-jost font-normal",
  txtJostRomanMedium5824: "font-jost font-medium",
  txtJostRomanMedium16: "font-jost font-medium",
  txtJostRomanBold96: "font-bold font-jost",
  txtJostRomanMedium20: "font-jost font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
