import React, { useState } from "react";
import { ScrollShadow, Button } from "@heroui/react";
import { Repo } from "@/types";
import CustomTimeline from "./CustomTimeline";
import CustomTimelineItem from "./CustomTimelineItem";
import { getIconForEvent, getTypeForEvent } from "@/utils/eventUtils";

interface ActivityFeedProps {
  repo: Repo;
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({ repo }) => {
  const [visibleActivities, setVisibleActivities] = useState(3);

  const loadMoreActivities = () => {
    setVisibleActivities((prev) => Math.min(prev + 3, repo.activities.length));
  };

  return (
    <div className="flex-1">
      <p className="text-xl font-semibold mb-3 dark:text-foreground text-background/80">
        Recent Activities
      </p>
      <ScrollShadow className="h-[400px]" hideScrollBar>
        <CustomTimeline>
          {repo.activities.slice(0, visibleActivities).map((item, index) => (
            <CustomTimelineItem
              key={index}
              title={item.event}
              description={item.time}
              icon={getIconForEvent(item.event)}
              type={getTypeForEvent(item.event)}
            />
          ))}
        </CustomTimeline>
        {visibleActivities < repo.activities.length && (
          <Button
            variant="light"
            color="primary"
            onClick={loadMoreActivities}
            className="mt-3 w-full"
          >
            Show More
          </Button>
        )}
      </ScrollShadow>
    </div>
  );
};

export default ActivityFeed;
