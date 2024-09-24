"use client";

import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/button";
import React from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";

const page = () => {
  const methods = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const { control, handleSubmit } = methods;
  const {} = useFieldArray({
    control,
    name: "questions",
  });
  return (
    <div>
      <h2>This is create post for user</h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FXInput name="title" label="Title"></FXInput>
          <Button type="submit">Post</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default page;
