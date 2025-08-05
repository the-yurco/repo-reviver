import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Chip,
  User,
  Progress,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Divider,
} from "@heroui/react";
import { Repo } from "@/types";
import {
  AddNoteIcon,
  ArrowDownIcon,
  CopyDocumentIcon,
  EditDocumentIcon,
  EyeIcon,
  ForkIcon,
  HearthIcon,
  StarIcon,
} from "@/components/Icons";

interface RepoOverviewCardProps {
  repo: Repo;
  statusColors: Record<string, "success" | "warning" | "danger" | "default">;
  dynamicIndicatorClass: string;
  handleWatch: () => void;
  handleReviveOption: (key: string) => void;
}

const RepoOverviewCard: React.FC<RepoOverviewCardProps> = ({
  repo,
  statusColors,
  dynamicIndicatorClass,
  handleWatch,
  handleReviveOption,
}) => {
  const iconClasses = "text-xl text-default-500 pointer-events-none shrink-0";

  return (
    <Card className="flex-1 w-full mb-4 h-full dark:bg-default/20">
      <CardHeader className="flex gap-4 justify-between items-center pb-2">
        <User
          name={repo.owner.name}
          description="Repo Owner"
          avatarProps={{
            src: repo.owner.avatar,
            size: "md",
            color: "default",
          }}
        />
        <Chip
          color={statusColors[repo.status] || "default"}
          variant="flat"
          size="sm"
        >
          {repo.status}
        </Chip>
      </CardHeader>
      <Divider className="my-1" />
      <CardBody className="flex flex-col gap-3 py-4">
        <p className="text-lg font-semibold text-background/80 dark:text-foreground">
          {repo.name}
        </p>
        <p className="text-sm text-default-600 line-clamp-3">
          Innovative project management tool designed for modern teams. Features
          include real-time collaboration, task tracking, and AI-powered
          insights.
        </p>
        <div className="flex flex-wrap gap-2">
          <Chip color="default" variant="flat" size="sm">
            Nextjs
          </Chip>
          <Chip color="default" variant="flat" size="sm">
            react
          </Chip>
          <Chip color="default" variant="flat" size="sm">
            tailwindcss
          </Chip>
          <Chip color="default" variant="flat" size="sm">
            heroui
          </Chip>
        </div>
      </CardBody>
      <Divider className="my-1" />
      <CardBody className="flex flex-row gap-4 py-3">
        <Chip
          color="warning"
          startContent={<StarIcon size={18} />}
          variant="flat"
          className="px-3 flex justify-center items-center"
        >
          <p className="ml-1">{repo.stars}</p>
        </Chip>
        <Chip
          color="secondary"
          startContent={<ForkIcon size={18} />}
          variant="flat"
          className="px-3 flex justify-center items-center"
        >
          <p className="ml-1">{repo.forks}</p>
        </Chip>
      </CardBody>
      <Divider className="my-1" />
      <CardBody className="py-3">
        <Progress
          classNames={{
            base: "max-w-md",
            track: "drop-shadow-md border border-default-200",
            indicator: dynamicIndicatorClass,
            label: "tracking-wider font-medium text-default-600",
            value: "text-foreground/60",
          }}
          label="Health Score"
          radius="sm"
          showValueLabel={true}
          size="md"
          value={repo.healthScore}
          color="primary"
        />
      </CardBody>
      <CardFooter className="justify-center">
        <div className="flex gap-3 dark:bg-background/40 bg-foreground p-2 rounded-full">
          <Button
            color="default"
            radius="full"
            variant="faded"
            onClick={handleWatch}
            startContent={<EyeIcon />}
          >
            Watch
          </Button>
          <Dropdown>
            <DropdownTrigger>
              <Button
                color="warning"
                variant="flat"
                radius="full"
                startContent={<HearthIcon />}
                endContent={<ArrowDownIcon />}
              >
                Revive
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Revive Options" variant="faded">
              <DropdownItem
                key="ai"
                description="Use AI to analyze and suggest revival strategies"
                startContent={<EditDocumentIcon className={iconClasses} />}
                onClick={() => handleReviveOption("ai")}
                className="text-background dark:text-foreground"
              >
                AI Revive
              </DropdownItem>
              <DropdownItem
                key="kits"
                description="Apply pre-built kits for quick repo enhancements"
                startContent={<CopyDocumentIcon className={iconClasses} />}
                onClick={() => handleReviveOption("kits")}
                className="text-background dark:text-foreground"
              >
                Revive Kits
              </DropdownItem>
              <DropdownItem
                key="auto"
                description="Automatically revive with minimal intervention"
                startContent={<AddNoteIcon className={iconClasses} />}
                onClick={() => handleReviveOption("auto")}
                className="text-background dark:text-foreground"
              >
                Auto Revive
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RepoOverviewCard;
