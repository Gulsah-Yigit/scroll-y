import React, { forwardRef } from "react";

const WebPage = ({ title, className }, ref) => {
  return (
    <div className={className} ref={ref}>
      <h3>{title}</h3>
    </div>
  );
};

export default forwardRef(WebPage);
