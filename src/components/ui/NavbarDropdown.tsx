"use client";
import React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/src/services/authService";
import { useUser } from "@/src/context/UserProvider";

const NavbarDropdown = async () => {
  const router = useRouter();
  const { setIsLoading: userLoading } = useUser();
  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  const handleLogout = () => {
    logoutUser();
    userLoading(true);
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
          <DropdownItem
            onClick={handleLogout}
            key="delete"
            className="text-danger"
            color="danger"
          >
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default NavbarDropdown;
