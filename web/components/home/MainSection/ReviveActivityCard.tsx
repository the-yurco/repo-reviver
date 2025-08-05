"use client";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Progress,
  ScrollShadow,
  Button,
  CardHeader,
  Divider,
  Chip,
} from "@heroui/react";
import { title } from "@/utils/primitives";
import {
  ArchiveIcon,
  ArrowDownIcon,
  EyeIcon,
  HearthIcon,
} from "@/components/Icons";
import { seededRandom } from "@/utils/randomUtils";
const colorLevels = [
  "bg-default-200",
  "bg-success-100",
  "bg-success-300",
  "bg-success-500",
  "bg-success-700",
];
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const yearsOptions = [2020, 2021, 2022, 2023, 2024, 2025];
const ReviveActivityCard: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState(2025);
  const isLeap =
    selectedYear % 4 === 0 &&
    (selectedYear % 100 !== 0 || selectedYear % 400 === 0);
  const totalDays = isLeap ? 366 : 365;
  const daysInMonth = [
    31,
    isLeap ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  const startDay = new Date(selectedYear, 0, 1).getDay(); // 0 = Sun
  const random = seededRandom(selectedYear);
  const calendarLevels = Array.from({ length: totalDays }, () =>
    Math.floor(random() * 5)
  );
  // For current year, set future days to 0
  if (selectedYear === 2025) {
    const currentDayOfYear = 217; // August 5, 2025
    for (let i = currentDayOfYear; i < totalDays; i++) {
      calendarLevels[i] = 0;
    }
  }
  // Calculate streaks and total
  let totalContribs = calendarLevels.reduce((a, b) => a + b, 0);
  let currentStreak = 0;
  const effectiveDays = selectedYear === 2025 ? 217 : totalDays;
  for (let i = effectiveDays - 1; i >= 0; i--) {
    if (calendarLevels[i] > 0) currentStreak++;
    else break;
  }
  let maxStreak = 0;
  let currStreak = 0;
  for (let i = 0; i < effectiveDays; i++) {
    const lev = calendarLevels[i];
    if (lev > 0) {
      currStreak++;
    } else {
      maxStreak = Math.max(maxStreak, currStreak);
      currStreak = 0;
    }
  }
  maxStreak = Math.max(maxStreak, currStreak);
  const activeDays = calendarLevels
    .slice(0, effectiveDays)
    .filter((l) => l > 0).length;
  const activePercentage = (activeDays / effectiveDays) * 100;
  // Build padded levels
  let paddedLevels = [...Array(startDay).fill(null), ...calendarLevels];
  const paddingNeeded = (7 - (paddedLevels.length % 7)) % 7;
  paddedLevels = [...paddedLevels, ...Array(paddingNeeded).fill(null)];
  const numberOfWeeks = paddedLevels.length / 7;
  // Month start columns
  let cumDays = 0;
  const monthStartCols: number[] = [];
  for (let m = 0; m < 12; m++) {
    const col = Math.floor((startDay + cumDays) / 7);
    monthStartCols.push(col);
    cumDays += daysInMonth[m];
  }
  // Month spans
  const monthSpansArr: number[] = [];
  for (let m = 0; m < 11; m++) {
    monthSpansArr.push(monthStartCols[m + 1] - monthStartCols[m]);
  }
  monthSpansArr.push(numberOfWeeks - monthStartCols[11]);
  return (
    <Card className="w-full mb-4 h-full dark:bg-default/20">
      <CardHeader className="flex justify-between items-center">
        <span className={title({ color: "green" })}>Revive Activity</span>
        <Dropdown>
          <DropdownTrigger>
            <Button variant="light" endContent={<ArrowDownIcon />}>
              {selectedYear}
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Select Year">
            {yearsOptions.map((year) => (
              <DropdownItem
                key={year}
                onClick={() => setSelectedYear(year)}
                className="text-background dark:text-foreground"
              >
                {year}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </CardHeader>
      <CardBody className="py-4 ">
        <div className="flex flex-row">
          <div className="flex flex-col gap-1 mr-4">
            <div className="h-3" /> {/* Sun */}
            <p className="text-xs text-default-500 h-3 flex items-center">
              Mon
            </p>
            <div className="h-3" /> {/* Tue */}
            <p className="text-xs text-default-500 h-3 flex items-center">
              Wed
            </p>
            <div className="h-3" /> {/* Thu */}
            <p className="text-xs text-default-500 h-3 flex items-center">
              Fri
            </p>
            <div className="h-3" /> {/* Sat */}
          </div>
          {/* Calendar */}
          <ScrollShadow
            orientation="horizontal"
            className="w-full max-w-full overflow-x-auto pb-4"
          >
            <div className="flex flex-col">
              {/* Months */}
              <div className="flex flex-row mb-2">
                {monthNames.map((name, i) => (
                  <p
                    key={i}
                    className="text-xs text-default-500 flex-shrink-0 text-center"
                    style={{ width: `calc(${monthSpansArr[i]} * 16px - 4px)` }}
                  >
                    {name}
                  </p>
                ))}
              </div>
              {/* Squares */}
              <div className="flex flex-row gap-1">
                {Array.from({ length: numberOfWeeks }).map((_, weekIdx) => (
                  <React.Fragment key={weekIdx}>
                    <div className="flex flex-col gap-1">
                      {Array.from({ length: 7 }).map((_, dayIdx) => {
                        const idx = weekIdx * 7 + dayIdx;
                        const level = paddedLevels[idx];
                        return (
                          <div
                            key={dayIdx}
                            className={`w-3 h-3 rounded-sm ${
                              level !== null && level > 0
                                ? colorLevels[level]
                                : level === 0
                                ? colorLevels[0]
                                : "bg-transparent"
                            }`}
                            title={
                              level !== null ? `Contributions: ${level}` : ""
                            }
                          />
                        );
                      })}
                    </div>
                    {monthStartCols.slice(1).includes(weekIdx + 1) && (
                      <div className="w-0.5 h-[108px] bg-default-200" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </ScrollShadow>
        </div>
        {/* Legend */}
        <div className="flex items-center justify-center gap-2 mt-4 text-small text-default-500">
          <p>Less</p>
          {colorLevels.map((c, idx) => (
            <div key={idx} className={`w-3 h-3 rounded-sm ${c}`} />
          ))}
          <p>More</p>
        </div>
        {/* Stats */}
        <div className="mt-4 grid grid-cols-3 gap-4 text-small">
          <Card className="p-2 text-center text-background dark:text-foreground">
            <p className="font-semibold ">Total Contributions</p>
            <p>{totalContribs}</p>
          </Card>
          <Card className="p-2 text-center text-background dark:text-foreground">
            <p className="font-semibold ">Current Streak</p>
            <p>{currentStreak} days</p>
          </Card>
          <Card className="p-2 text-center text-background dark:text-foreground">
            <p className="font-semibold ">Longest Streak</p>
            <p>{maxStreak} days</p>
          </Card>
        </div>
        <div className="mt-4">
          <Progress
            label="Activity Completion"
            value={activePercentage}
            color="success"
            showValueLabel={true}
            className="text-background dark:text-foreground"
          />
        </div>
      </CardBody>
      <Divider className="my-2" />
      <CardBody className="py-4">
        <p className="text-xl font-semibold mb-4 text-background dark:text-foreground">
          Stats Overview
        </p>
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-3 flex justify-between items-center shadow-small gap-2">
            <p className="flex items-center gap-2 text-background dark:text-foreground">
              Revived Repos
            </p>
            <Chip
              color="success"
              variant="flat"
              startContent={<HearthIcon className="text-success" />}
            >
              20
            </Chip>
          </Card>
          <Card className="p-3 flex justify-between items-center shadow-small gap-2">
            <p className="flex items-center gap-2 text-background dark:text-foreground">
              Watching Repos
            </p>
            <Chip
              color="warning"
              variant="flat"
              startContent={<EyeIcon className="text-warning" />}
            >
              700
            </Chip>
          </Card>
          <Card className="p-3 flex justify-between items-center shadow-small gap-2">
            <p className="flex items-center gap-2 text-background dark:text-foreground">
              Archived Repos
            </p>
            <Chip
              color="secondary"
              variant="flat"
              startContent={<ArchiveIcon className="text-secondary" />}
            >
              20
            </Chip>
          </Card>
        </div>
      </CardBody>
    </Card>
  );
};
export default ReviveActivityCard;
