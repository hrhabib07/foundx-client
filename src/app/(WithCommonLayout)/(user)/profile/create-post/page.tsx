"use client";

import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/react";
import React from "react";
import {
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

const page = () => {
  const methods = useForm();
  const onSubmit: SubmitHandler<any> = (data) => {
    const postData = {
      ...data,
      questions: data.questions.map((que: { value: string }) => que.value),
    };
    console.log(postData);
  };
  const { control, handleSubmit } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });
  const handleFieldAppend = () => {
    append({ name: "questions" });
  };
  return (
    <div>
      <h2>This is create post for user</h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FXInput name="title" label="Title"></FXInput>

          <Divider className="my-5" />
          <div className="flex justify-between items-center">
            <h1>Owner verification question</h1>
            <Button onClick={() => handleFieldAppend()}>Append</Button>
          </div>
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center my-2">
              <FXInput
                name={`questions.${index}.value`}
                label="question"
                size="sm"
              ></FXInput>
              <Button onClick={() => remove(index)} className="ml-4">
                Remove
              </Button>
            </div>
          ))}
          <Divider className="my-5" />

          <Button type="submit">Post</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default page;
