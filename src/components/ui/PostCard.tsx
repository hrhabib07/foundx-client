import React from "react";
import Image from "next/image";
import { Card, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { format } from "date-fns";

import { IPost } from "@/src/types";

const PostCard = ({ post }: { post: IPost }) => {
  const { title, images, category, location, dateFound } = post;

  return (
    <Card
      isFooterBlurred
      className="w-full max-w-sm shadow-lg overflow-hidden"
      radius="lg"
    >
      {/* Image Section */}
      <div className="relative w-full h-64">
        <Image
          alt={title}
          className="rounded-t-lg"
          layout="fill"
          objectFit="cover"
          src={images[0]}
        />
        {/* Title on Top Left */}
        <div className="absolute top-2 left-2 bg-black bg-opacity-40 text-white px-2 py-1 rounded">
          {title}
        </div>
        {/* Category on Top Right */}
        <div className="absolute top-1 right-1 bg-black bg-opacity-90 text-white px-1 py-1 rounded-lg text-sm">
          {category?.name}
        </div>
      </div>

      {/* Footer Section */}
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 flex  items-center">
        {/* Location and Date */}
        <div className="">
          <p className="text-sm text-default-900">{location}</p>
          <p className="text-sm text-default-900">
            {format(new Date(dateFound), "dd MMMM, yy")}
          </p>
        </div>
        {/* See Details Button */}
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          See Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
