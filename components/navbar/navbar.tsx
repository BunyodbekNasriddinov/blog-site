import React from "react";
import { Button } from "@/components/ui/button";
import { items } from "./items";
import Link from "next/link";
import { SearchIcon } from "lucide-react";
import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-background p-6 border-b xl:px-32">
      <Link href={"/"}>
        <Icons.logo />
      </Link>
      <div className="flex items-center gap-2">
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
      <div className="flex items-center gap-4">
        <ModeToggle />
        <div>
          <Button variant={"ghost"}>
            <SearchIcon />
          </Button>
        </div>
        <Button>Login</Button>
      </div>
    </nav>
  );
}

export default Navbar;
