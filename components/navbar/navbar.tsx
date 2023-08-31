import React from "react";
import { Button } from "@/components/ui/button";
import { items } from "./items";
import Link from "next/link";
import { SearchIcon } from "lucide-react";
import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";
import MobileNav from "./mobile-nav";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-background p-6 border-b xl:px-32">
      <Link href={"/"}>
        <Icons.logo className="cursor-pointer w-36 md:w-56" />
      </Link>
      <div className="hidden md:flex items-center gap-2">
        {items.map((item) => (
          <Button
            key={item.name}
            variant={"ghost"}
            asChild
          >
            <Link href={"#" + item.path}>{item.name}</Link>
          </Button>
        ))}
      </div>
      <div className="hidden lg:flex items-center gap-4">
        <ModeToggle />
        <div>
          <Button variant={"ghost"}>
            <SearchIcon />
          </Button>
        </div>
        <Button>Login</Button>
      </div>
      <MobileNav />
    </nav>
  );
}

export default Navbar;
