"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavbarDropdown = () => {
  const router = useRouter();
  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Avatar className="cursor-pointer" name="jon" />
          {/* <Button variant="bordered">Open Menu</Button> */}
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem
            onClick={() => handleNavigation("/profile")}
            key="profile"
          >
            Profile
          </DropdownItem>
          <DropdownItem
            onClick={() => handleNavigation("/profile/create-post")}
            key="create-post"
          >
            Create Post
          </DropdownItem>
          <DropdownItem
            onClick={() => handleNavigation("/profile/settings")}
            key="settings"
          >
            Settings
          </DropdownItem>
          <DropdownItem key="delete" className="text-danger" color="danger">
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default NavbarDropdown;
