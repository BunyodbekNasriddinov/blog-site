import { Button } from "@/components/ui/button";
import { MenuIcon, SearchIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { items } from "./items";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";

function MobileNav() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="flex lg:hidden"
          size={"icon"}
          value={"ghost"}
        >
          <MenuIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">usufdev.com</DialogTitle>
          <div className="flex items-center justify-between gap-4 p-3">
            <div>
              <Button variant={"ghost"}>
                <SearchIcon />
              </Button>
            </div>
            <ModeToggle />
          </div>
        </DialogHeader>
        <div className="flex flex-col items-center gap-2">
          {items.map((item) => (
            <Button
              className="w-100"
              key={item.name}
              variant={"ghost"}
              asChild
            >
              <Link href={"#" + item.path}>{item.name}</Link>
            </Button>
          ))}
        </div>
        <DialogFooter>
          <Button className="w-full">Login</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default MobileNav;
