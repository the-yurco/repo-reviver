import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Listbox,
  ListboxItem,
  Tabs,
  Tab,
} from "@heroui/react";
import { title } from "@/utils/primitives";
import RepoOverviewCard from "./RepoOverviewCard";
import ActivityFeed from "./ActivityFeed";
import { Repo } from "@/types";
import {
  BugIcon,
  CommitIcon,
  FolderPathIcon,
  NoteIcon,
} from "@/components/Icons";

interface ReviveRepoCardProps {
  repo: Repo;
  handleWatch: () => void;
  handleReviveOption: (key: string) => void;
}

const statusColors = {
  Active: "success",
  Nearing: "warning",
  Dormant: "danger",
} as const;

const ReviveRepoCard: React.FC<ReviveRepoCardProps> = ({
  repo,
  handleWatch,
  handleReviveOption,
}) => {
  const dynamicIndicatorClass =
    repo.healthScore > 70
      ? "bg-gradient-to-r from-green-500 to-lime-500"
      : repo.healthScore > 40
      ? "bg-gradient-to-r from-yellow-500 to-orange-500"
      : "bg-gradient-to-r from-red-500 to-pink-500";

  return (
    <Card className="w-full mb-4 h-full dark:bg-default/20">
      <CardHeader className="inline-block w-max text-center justify-center">
        <span className={title({ color: "yellow" })}>Revive Repository</span>{" "}
        <span className={`${title()} text-background/80 dark:text-foreground`}>
          {" "}
          of the Day
        </span>
      </CardHeader>
      <CardBody>
        <Tabs
          aria-label="Repo Views"
          className="mb-4"
          color="primary"
          variant="bordered"
          radius="full"
          size="sm"
        >
          <Tab
            key="overview"
            title={
              <div className="flex items-center space-x-2">
                <NoteIcon />
                <span>Overview</span>
              </div>
            }
          >
            <div className="flex flex-col md:flex-row gap-6 min-h-[400px]">
              <RepoOverviewCard
                repo={repo}
                statusColors={statusColors}
                dynamicIndicatorClass={dynamicIndicatorClass}
                handleWatch={handleWatch}
                handleReviveOption={handleReviveOption}
              />
              <ActivityFeed repo={repo} />
            </div>
          </Tab>
          <Tab
            key="pull_requests"
            title={
              <div className="flex items-center space-x-2">
                <FolderPathIcon />
                <span>Pull Requests</span>
              </div>
            }
          >
            <div className="min-h-[400px]">
              <Listbox aria-label="Pull requests" variant="flat">
                {repo.pull_requests.map((pr, index) => (
                  <ListboxItem key={index}>{pr}</ListboxItem>
                ))}
              </Listbox>
            </div>
          </Tab>
          <Tab
            key="commits"
            title={
              <div className="flex items-center space-x-2">
                <CommitIcon />
                <span>Commits</span>
              </div>
            }
          >
            <div className="min-h-[400px]">
              <Listbox aria-label="Commits" variant="flat">
                {repo.commits.map((commit, index) => (
                  <ListboxItem key={index}>{commit}</ListboxItem>
                ))}
              </Listbox>
            </div>
          </Tab>
          <Tab
            key="issues"
            title={
              <div className="flex items-center space-x-2">
                <BugIcon />
                <span>Issues</span>
              </div>
            }
          >
            <div className="min-h-[400px]">
              <Listbox aria-label="Issues" variant="flat">
                {repo.issues.map((issue, index) => (
                  <ListboxItem key={index}>{issue}</ListboxItem>
                ))}
              </Listbox>
            </div>
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
};

export default ReviveRepoCard;
