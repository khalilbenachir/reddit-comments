"use client";

import Image from "next/image";
import React, { useMemo } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const getLinks = (pathname: string) => [
  {
    href: "/",
    label: "Home",
    active: pathname === "/",
  },
  {
    href: "/",
    label: "Posts",
    active: pathname === "/posts",
  },
];

const Navbar = () => {
  const pathName = usePathname();
  const links = useMemo(() => getLinks(pathName), [pathName]);

  return (
    <section className="fixed top-0 left-0 h-[80px] w-full z-30 flex p-4 border-b bg-muted/40 shadow-sm">
      <Link href="/">
        <Image alt="logo" src={logo} width="80" height="80" />
      </Link>
    </section>
  );
};

export default Navbar;
