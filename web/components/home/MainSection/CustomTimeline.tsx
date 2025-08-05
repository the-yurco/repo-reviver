import React from "react";

const CustomTimeline: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="flex flex-col gap-6 relative p-1">{children}</div>;
};

export default CustomTimeline;
