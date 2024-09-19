import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center">
      <div>
        <h2 className="my-4 text-xl font-bold">This is login page</h2>
        <div className="w-80 flex flex-col gap-4">
          <Input type="email" label="Email"></Input>
          <Input type="password" label="Password"></Input>
          <Button> Login</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
