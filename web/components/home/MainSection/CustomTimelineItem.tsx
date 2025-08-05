import React from "react";
import { Chip } from "@heroui/react";

interface CustomTimelineItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  type: string;
}

const CustomTimelineItem: React.FC<CustomTimelineItemProps> = ({
  title,
  description,
  icon,
  type,
}) => {
  return (
    <div className="relative pl-16 before:content-[''] before:absolute before:left-[1.25rem] before:top-[2.5rem] before:bottom-0 before:w-[0.125rem] before:bg-primary last:before:h-0">
      <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 ring-2 ring-primary">
        {icon}
      </div>
      <div className="flex justify-between items-start p-1">
        <div>
          <p className="font-medium dark:text-foreground text-background/80">
            {title}
          </p>
          <p className="text-small text-default-500">{description}</p>
        </div>
        <Chip color="secondary" variant="flat" size="sm">
          {type}
        </Chip>
      </div>
    </div>
  );
};

export default CustomTimelineItem;
