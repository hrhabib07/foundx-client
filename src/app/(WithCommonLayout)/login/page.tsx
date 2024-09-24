"use client";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/button";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import loginValidationSchema from "@/src/schemas/login.schema";
import { useUserLogin } from "@/src/hooks/auth.hook";
import LoadingSpinner from "@/src/components/ui/LoadingSpinner";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/src/context/UserProvider";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const { setIsLoading: userLoading } = useUser();
  const router = useRouter();
  const redirect = searchParams.get("redirect");
  // console.log(redirect);
  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();
  if (!isPending && isSuccess) {
    if (redirect) {
      router.push(redirect);
    } else {
      router.push("/");
    }
  }
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleUserLogin(data);
    userLoading(true);
  };
  return (
    <>
      {isPending && <LoadingSpinner />}
      <div className="min-h-[calc(100vh-120px)] flex items-center justify-center">
        <div>
          <h3 className="my-2 text-xl font-bold">Login to FoundX</h3>
          <p className="mb-4">Help Lost Items Find Their Way Home</p>
          <div className="w-80 flex flex-col gap-4">
            <FXForm
              onSubmit={onSubmit}
              resolver={zodResolver(loginValidationSchema)}
            >
              <div className="py-3">
                <FXInput name="email" label="Email" type="email" />
              </div>
              <div className="py-3">
                <FXInput name="password" label="Password" type="password" />
              </div>

              <Button
                className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
                size="lg"
                type="submit"
              >
                Login
              </Button>
            </FXForm>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
