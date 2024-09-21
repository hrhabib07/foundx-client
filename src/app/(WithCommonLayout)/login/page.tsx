import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/button";
import React from "react";

const LoginPage = () => {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center">
      <div>
        <h2 className="my-4 text-xl font-bold">This is login page</h2>
        <div className="w-80 flex flex-col gap-4">
          <FXForm onSubmit={onSubmit}>
            <FXInput type="email" label="Email" name="email"></FXInput>
            <FXInput type="password" label="Password" name="password"></FXInput>
            <Button type="submit"> Login</Button>
          </FXForm>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
