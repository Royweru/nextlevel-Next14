"use client";

import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const navigation = [
    {
      id: 1,
      label: "Elevate",
      href: "#elevate",
      class: "text-4xl italic",
    },
    {
      id: 2,
      label: "Blog",
      href: "/blog",
      class: "text-2xl italic",
    },
    {
      id: 3,
      label: "Contact",
      href: "#contact",
      class: "text-xl italic",
    },
  ];
  return (
    <div
      className={cn(
        " w-full p-2  bg-neutral-300 flex items-center justify-end",
        pathName === "/blog" && "hidden"
      )}
    >
      <ul className=" flex flex-col gap-y-1">
        {navigation.map((nav) => (
          <Link key={nav.id} href={nav.href}>
            <li
              className={cn(" text-zinc-700 font-bold font-sans ", nav.class)}
            >
              {nav.label}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
