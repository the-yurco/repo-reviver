"use client";

import React from "react";
import { Link } from "@heroui/react";
import { title } from "@/utils/primitives";

type Props = {};

const Page = (props: Props) => {
  return (
    <section className="w-full grid place-items-center -mt-36">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-center gap-4">
          <h1 className={title({ color: "yellow", size: "lg" })}>404</h1>
          <p>yep! nothing's here...</p>
        </div>
        <Link href="/">go home</Link>
      </div>
    </section>
  );
};

export default Page;
