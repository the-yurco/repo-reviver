import React, { useState } from "react";
import {
  NavbarContent,
  Input,
  Button,
  Badge,
  useDisclosure,
  RadioGroup,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Chip,
  Divider,
  Listbox,
  ListboxItem,
  Avatar,
  Tab,
  Tabs,
} from "@heroui/react";
import { UserButton } from "@clerk/nextjs";
import {
  ArchiveIcon,
  FileIcon,
  MarkAsReadIcon,
  NotificationIcon,
  SearchIcon,
  SettingsIcon,
  SnoozeIcon,
} from "../Icons";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";

interface Notification {
  id: string;
  type: "request" | "file" | "like" | "follow" | "mention";
  title: string;
  description: string;
  time: string;
  avatar: string;
  isUnread: boolean;
  archived: boolean;
  file?: { name: string; size: string };
}

export const NavbarEnd = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "request",
      title: "Tony Reichert requested to join your Acme organization.",
      description: "",
      time: "2 hours ago",
      avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
      isUnread: true,
      archived: false,
    },
    {
      id: "2",
      type: "file",
      title: "Ben Berman modified the Brand Logo file.",
      description: "",
      time: "7 hours ago",
      avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
      isUnread: true,
      archived: false,
      file: { name: "BrandLogo.v1.2.jpg", size: "3.4 MB" },
    },
    {
      id: "3",
      type: "like",
      title: "Jane Doe liked your post.",
      description: "",
      time: "Yesterday",
      avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
      isUnread: true,
      archived: false,
    },
    {
      id: "4",
      type: "follow",
      title: "John Smith started following you.",
      description: "",
      time: "Yesterday",
      avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
      isUnread: false,
      archived: false,
    },
    {
      id: "5",
      type: "mention",
      title: "Jacob Jones mentioned you in a post.",
      description: "",
      time: "2 days ago",
      avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
      isUnread: false,
      archived: false,
    },
    {
      id: "6",
      type: "mention",
      title: "Archived mention.",
      description: "",
      time: "3 days ago",
      avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
      isUnread: false,
      archived: true,
    },
    {
      id: "7",
      type: "like",
      title: "Archived like.",
      description: "",
      time: "4 days ago",
      avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
      isUnread: false,
      archived: true,
    },
    // etc., to make totals match: All 9 (5 non-archived + 4 archived?), but adjust data as needed
  ]);

  const allCount =
    notifications.filter((n) => !n.archived).length +
    notifications.filter((n) => n.archived).length; // 9
  const unreadCount = notifications.filter(
    (n) => n.isUnread && !n.archived
  ).length; // 3
  const archiveCount = notifications.filter((n) => n.archived).length;

  const [selectedTab, setSelectedTab] = useState("all");

  const filteredNotifications = notifications.filter((notif) => {
    if (selectedTab === "all") return !notif.archived;
    if (selectedTab === "unread") return notif.isUnread && !notif.archived;
    if (selectedTab === "archive") return notif.archived;
    return false;
  });

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isUnread: false } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((n) => (n.archived ? n : { ...n, isUnread: false }))
    );
  };

  const archiveAll = () => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.archived ? n : { ...n, archived: true, isUnread: false }
      )
    );
  };

  const handleNotificationClick = (notif: Notification) => {
    if (notif.isUnread) {
      markAsRead(notif.id);
    }
    // Navigation or action
  };

  return (
    <NavbarContent justify="end" className="flex items-center gap-2">
      <div className="hidden sm:flex">
        <Input
          isClearable
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-black/60 dark:placeholder:text-white/40",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "bg-transparent",
              "dark:bg-transparent",
              "backdrop-blur-lg",
              "hover:bg-transparent",
              "hover:border-default/50",
              "dark:hover:bg-default/30",
              "dark:hover:border-default/50",
              "group-data-[focus=true]:bg-default-200/50",
              "dark:group-data-[focus=true]:bg-default/60",
              "cursor-text",
              "border border-default/70",
              "!hover:bg-transparent",
            ],
          }}
          className="w-[15rem]"
          placeholder="Type to search..."
          radius="full"
          startContent={
            <SearchIcon
              className="text-black/40 mb-0.5 dark:text-white/40 pointer-events-none shrink-0"
              width={undefined}
              height={undefined}
              size={24}
            />
          }
        />
      </div>
      <div className="sm:hidden">
        <Button
          isIconOnly
          aria-label="Search"
          color="default"
          variant="ghost"
          radius="full"
          className="border border-default/70 hover:bg-transparent dark:hover:bg-transparent"
          onPress={() => setShowSearch(!showSearch)}
        >
          <SearchIcon
            className="text-black/40 dark:text-white/90 pointer-events-none shrink-0"
            width={undefined}
            height={undefined}
          />
        </Button>
        {showSearch && (
          <div className="absolute top-full left-0 w-full p-2 bg-background z-50">
            <Input
              isClearable
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-black/60 dark:placeholder:text-black/70",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "bg-transparent",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "hover:bg-transparent",
                  "hover:border-default/50",
                  "dark:hover:bg-default/70",
                  "dark:hover:border-default/50",
                  "group-data-[focus=true]:bg-default-200/50",
                  "dark:group-data-[focus=true]:bg-default/60",
                  "cursor-text",
                  "border border-default/70",
                  "!hover:bg-transparent",
                ],
              }}
              placeholder="Type to search..."
              radius="full"
              startContent={
                <SearchIcon
                  className="text-black/40 mb-0.5 dark:text-white/90 pointer-events-none shrink-0"
                  width={undefined}
                  height={undefined}
                  size={15}
                />
              }
            />
          </div>
        )}
      </div>
      <Badge content="5" color="danger" size="md" className="mr-1 border-none">
        <Button
          isIconOnly
          aria-label="Notifications"
          color="default"
          variant="ghost"
          radius="full"
          className="flex justify-center items-center border border-default/70 hover:bg-transparent dark:hover:bg-transparent"
          onPress={onOpen}
        >
          <NotificationIcon
            className="text-black/40 mb-0.5 dark:text-white/90 pointer-events-none shrink-0"
            width={undefined}
            height={undefined}
            size={24}
          />
        </Button>
        <Modal
          isOpen={isOpen}
          scrollBehavior="inside"
          onOpenChange={onOpenChange}
          className="text-background dark:text-foreground"
          size="4xl"
          backdrop="blur"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex justify-between items-center">
                  <p>Notifications</p>
                </ModalHeader>
                <Divider />
                <div className="flex justify-between items-center py-2 mb-6">
                  <Tabs
                    aria-label="Notification tabs"
                    selectedKey={selectedTab}
                    onSelectionChange={(key) => setSelectedTab(key as string)}
                    className="px-4 text-lg"
                    variant="underlined"
                  >
                    <Tab
                      key="all"
                      title={`All ${allCount - archiveCount}`}
                      className="text-background"
                    ></Tab>
                    <Tab key="unread" title={`Unread ${unreadCount}`}></Tab>
                    <Tab key="archive" title="Archive"></Tab>
                  </Tabs>
                  <div className="px-4 flex gap-2">
                    <Button
                      variant="faded"
                      color="primary"
                      size="md"
                      radius="full"
                      onPress={markAllAsRead}
                    >
                      <MarkAsReadIcon />
                      Mark all as read
                    </Button>
                    <Button
                      variant="faded"
                      color="warning"
                      size="md"
                      radius="full"
                      onPress={archiveAll}
                    >
                      <ArchiveIcon />
                      Archive All
                    </Button>
                  </div>
                </div>
                <ModalBody className="p-0">
                  <Listbox
                    aria-label="Notifications"
                    variant="flat"
                    className="divide-y divide-divider"
                  >
                    {filteredNotifications.map((notif) => (
                      <ListboxItem
                        key={notif.id}
                        onPress={() => handleNotificationClick(notif)}
                        className="px-4 py-3"
                        startContent={
                          <Badge
                            content=""
                            color="primary"
                            size="sm"
                            placement="bottom-right"
                            isDot
                            isInvisible={!notif.isUnread}
                          >
                            <Avatar src={notif.avatar} size="md" />
                          </Badge>
                        }
                        endContent={
                          notif.type === "request" ? (
                            <div className="flex gap-2">
                              <Button size="md" color="primary">
                                Accept
                              </Button>
                              <Button size="md" color="default" variant="light">
                                Decline
                              </Button>
                            </div>
                          ) : notif.type === "file" ? (
                            <Chip
                              variant="flat"
                              color="secondary"
                              startContent={<FileIcon />}
                              className="text-purple-400"
                            >
                              {notif.file?.name} {notif.file?.size}
                            </Chip>
                          ) : null
                        }
                      >
                        <div className="flex flex-col">
                          <p className="text-sm">{notif.title}</p>
                          <small className="text-default-500 text-xs">
                            {notif.time}
                          </small>
                        </div>
                      </ListboxItem>
                    ))}
                  </Listbox>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </Badge>
      <Button
        isIconOnly
        aria-label="Settings"
        color="default"
        variant="ghost"
        radius="full"
        className="flex justify-center items-center border border-default/70 hover:bg-transparent dark:hover:bg-transparent"
      >
        <Link
          href={"/settings"}
          className="w-full h-full flex justify-center items-center"
        >
          <SettingsIcon
            className="text-black/40 mb-0.5 dark:text-white/90 pointer-events-none shrink-0 mt-0.5"
            size={24}
            height={undefined}
            width={undefined}
          />
        </Link>
      </Button>
      <ThemeSwitcher />
      <UserButton />
    </NavbarContent>
  );
};
