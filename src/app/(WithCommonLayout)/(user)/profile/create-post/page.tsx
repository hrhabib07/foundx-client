"use client";

import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { ChangeEvent, useState } from "react";

import FXInput from "@/src/components/form/FXInput";
import { useRouter } from "next/navigation";
import { useUser } from "@/src/context/UserProvider";
import FXDatePicker from "@/src/components/form/FXDatePicker";
import dateToISO from "@/src/utils/dateToISO";
import allDistrict from "@bangladeshi/bangladesh-address";
import FXSelect from "@/src/components/form/FXSelect";
import { useGetCategories } from "@/src/hooks/categories.hook";
import FXTextarea from "@/src/components/form/FXTextArea";
import { AddIcon, TrashIcon } from "@/src/assets/icons";
import { useCreatePost } from "@/src/hooks/post.hook";

const cityOptions = allDistrict
  .allDistict()
  .sort()
  .map((city: string) => {
    return {
      key: city,
      label: city,
    };
  });
// console.log(cityOptions);

export default function CreatePost() {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);
  console.log(imagePreviews);

  const router = useRouter();

  const {
    mutate: handleCreatePost,
    isPending: createPostPending,
    isSuccess,
  } = useCreatePost();

  const { user } = useUser();

  const {
    data: categoriesData,
    isLoading: categoryLoading,
    isSuccess: categorySuccess,
  } = useGetCategories();

  let categoryOption: { key: string; label: string }[] = [];

  if (categoriesData?.data && !categoryLoading) {
    categoryOption = categoriesData.data
      .sort()
      .map((category: { _id: string; name: string }) => ({
        key: category._id,
        label: category.name,
      }));
  }

  const methods = useForm();

  const { control, handleSubmit } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();
    const postData = {
      ...data,
      questions: data.questions.map((que: { value: string }) => que.value),
      dateFound: dateToISO(data.dateFound),
      user: user?._id,
    };
    formData.append("data", JSON.stringify(postData));
    // console.log(postData);
    for (let image of imageFiles) {
      formData.append("itemImages", image);
    }
    handleCreatePost(formData);
  };

  const handleFieldAppend = () => {
    append({ name: "questions" });
  };

  const handleImageChange = (e: any) => {
    const file = e?.target?.files[0];
    setImageFiles((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {/* {createPostPending && <Loading />} */}
      <div className="h-full rounded-xl bg-gradient-to-b from-default-100 px-[73px] py-12">
        <h1 className="text-2xl font-semibold">Post a found item</h1>
        <Divider className="mb-5 mt-3" />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXInput label="Title" name="title" />
              </div>
              <div className="min-w-fit flex-1">
                <FXDatePicker label="Found date" name="dateFound" />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXInput label="Location" name="location" />
              </div>
              <div className="min-w-fit flex-1">
                <FXSelect label="City" name="city" options={cityOptions} />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXSelect
                  disabled={!categorySuccess}
                  label="Category"
                  name="category"
                  options={categoryOption}
                />
              </div>
              <div className="min-w-fit flex-1">
                <label
                  className="block h-full rounded-lg w-full p-4 bg-gray-600"
                  htmlFor="image"
                >
                  Upload
                </label>
                <input
                  className="hidden"
                  id="image"
                  multiple
                  type="file"
                  onChange={(e) => handleImageChange(e)}
                />
              </div>
            </div>
            <div className="flex gap-4 flex-wrap">
              {imagePreviews.length > 0 &&
                imagePreviews.map((imageDataUrl) => (
                  <div className="relative size-48 rounded-xl border-2 border-dashed border-default-300 p-2">
                    <img
                      className="h-full w-full object-cover object-contain"
                      src={imageDataUrl}
                      alt="selected-image"
                    />
                  </div>
                ))}
            </div>
            <div className="flex flex-wrap-reverse gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXTextarea label="Description" name="description" />
              </div>
            </div>

            <Divider className="my-5" />

            <div className="flex justify-between items-center mb-5">
              <h1 className="text-xl">Owner verification questions</h1>
              <Button isIconOnly onClick={() => handleFieldAppend()}>
                <AddIcon />
              </Button>
            </div>

            <div className="space-y-5">
              {fields.map((field, index) => (
                <div key={field.id} className="flex gap-2 items-center">
                  <FXInput label="Question" name={`questions.${index}.value`} />
                  <Button
                    isIconOnly
                    className="h-14 w-16"
                    onClick={() => remove(index)}
                  >
                    <TrashIcon />
                  </Button>
                </div>
              ))}
            </div>

            <Divider className="my-5" />
            <div className="flex justify-end">
              <Button size="lg" type="submit">
                Post
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
