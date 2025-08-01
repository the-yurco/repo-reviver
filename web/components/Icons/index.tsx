import React from "react";
import { IconProps } from "./types";

export const SunIcon: React.FC<IconProps> = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height || size}
    width={width || size}
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0"></path>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    ></path>
    <path
      fill="currentColor"
      d="M3.67 3.716a.75.75 0 0 1 1.059-.048L6.95 5.7a.75.75 0 0 1-1.012 1.107L3.717 4.775a.75.75 0 0 1-.048-1.06m16.663.001a.75.75 0 0 1-.047 1.06l-2.223 2.03A.75.75 0 1 1 17.05 5.7l2.222-2.032a.75.75 0 0 1 1.06.048m-3.306 13.309a.75.75 0 0 1 1.06 0l2.223 2.222a.75.75 0 0 1-1.061 1.06l-2.222-2.222a.75.75 0 0 1 0-1.06m-10.051 0a.75.75 0 0 1 0 1.06l-2.222 2.223a.75.75 0 0 1-1.06-1.06l2.222-2.223a.75.75 0 0 1 1.06 0"
      opacity={0.5}
    ></path>
  </svg>
);

export const MoonIcon: React.FC<IconProps> = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height || size}
    width={width || size}
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10a10 10 0 0 1-3.321-.564A9 9 0 0 1 8 18a8.97 8.97 0 0 1 2.138-5.824A6.5 6.5 0 0 0 15.5 15a6.5 6.5 0 0 0 5.567-3.143c.24-.396.933-.32.933.143"
      clipRule="evenodd"
      opacity={0.5}
    ></path>
    <path
      fill="currentColor"
      d="M2 12c0 4.359 2.789 8.066 6.679 9.435A9 9 0 0 1 8 18c0-2.221.805-4.254 2.138-5.824A6.47 6.47 0 0 1 9 8.5a6.5 6.5 0 0 1 3.143-5.567C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12"
    ></path>
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height || size}
    width={width || size}
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M20.313 11.157a9.157 9.157 0 1 1-18.313 0a9.157 9.157 0 0 1 18.313 0"
      opacity={0.5}
    ></path>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18.839 18.839a.723.723 0 0 1 1.022 0l1.928 1.927a.723.723 0 0 1-1.023 1.023L18.84 19.86a.723.723 0 0 1 0-1.022"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const SettingsIcon: React.FC<IconProps> = ({
  size = 24,
  strokeWidth = 2,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height || size}
    width={width || size}
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.408 0-1.779.152a2 2 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.62 1.62 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.03 2.03 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361s-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a2 2 0 0 0-.399 1.479c.053.394.287.798.757 1.605s.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2 2 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a2 2 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361s.306-1.064.782-1.36c.324-.203.533-.364.682-.556a2 2 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605s-.704-1.21-1.022-1.453a2.03 2.03 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.62 1.62 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2 2 0 0 0-1.09-1.083"
      clipRule="evenodd"
      opacity={0.5}
    ></path>
    <path
      fill="currentColor"
      d="M15.523 12c0 1.657-1.354 3-3.023 3s-3.023-1.343-3.023-3S10.83 9 12.5 9s3.023 1.343 3.023 3"
    ></path>
  </svg>
);

export const EyeIcon: React.FC<IconProps> = ({
  size = 24,
  strokeWidth = 2,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height || size}
    width={width || size}
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20s7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4S4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12"
      opacity={0.5}
    ></path>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m1.5 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const ArchiveIcon: React.FC<IconProps> = ({
  size = 24,
  strokeWidth = 2,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={height || size}
    viewBox="0 0 24 24"
    width={width || size}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="currentColor"
      d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535"
      opacity={0.5}
    ></path>
    <path
      fill="currentColor"
      d="M5 8.5v-1A1.5 1.5 0 0 1 6.5 6h11A1.5 1.5 0 0 1 19 7.5v1a2.5 2.5 0 0 0-1.5-.5h-11c-.563 0-1.082.186-1.5.5m0 3v-1A1.5 1.5 0 0 1 6.5 9h11a1.5 1.5 0 0 1 1.5 1.5v1a2.5 2.5 0 0 0-1.5-.5h-11a2.5 2.5 0 0 0-1.5.5M20.75 15a.75.75 0 0 0-.75-.75h-1.02v-1A1.5 1.5 0 0 0 17.5 12h-11a1.5 1.5 0 0 0-1.48 1.25v1H4a.75.75 0 0 0 0 1.5h2.301c.87 0 1.098.013 1.293.092l.061.027c.19.09.355.25.943.889l.036.038l.075.083c.438.476.783.852 1.236 1.08q.126.063.258.113c.474.18.985.179 1.631.178h.218c.611 0 1.094.001 1.547-.161q.126-.045.248-.103c.434-.205.775-.547 1.207-.98l.075-.074l.23-.23c.621-.621.793-.775.991-.857s.428-.095 1.307-.095H20a.75.75 0 0 0 .75-.75"
    ></path>
  </svg>
);

export const NotificationIcon: React.FC<IconProps> = ({
  size = 24,
  height,
  width,
  ...props
}) => (
  <svg
    fill="none"
    height={height || size}
    viewBox="0 0 24 24"
    width={width || size}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="currentColor"
      d="M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7"
      opacity={0.5}
    ></path>
    <path
      fill="currentColor"
      d="M7.243 18.545a5.002 5.002 0 0 0 9.513 0c-3.145.59-6.367.59-9.513 0"
    ></path>
  </svg>
);
