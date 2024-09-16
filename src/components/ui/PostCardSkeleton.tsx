import React from "react";
import { Card, CardFooter } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";

const PostCardSkeleton = () => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="w-full max-w-sm shadow-lg overflow-hidden"
    >
      {/* Image Section (Skeleton) */}
      <div className="relative w-full h-64 bg-gray-300">
        <Skeleton className="absolute inset-0 rounded-t-lg" />
      </div>

      {/* Footer Section (Skeleton) */}
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 flex  items-center">
        {/* Location and Date (Skeleton) */}
        <div className="flex flex-col gap-2">
          <Skeleton className="w-24 h-4 bg-gray-400" />
          <Skeleton className="w-20 h-4 bg-gray-400" />
        </div>
        {/* See Details Button (Skeleton) */}
        <Skeleton className="w-24 h-10 bg-gray-500 rounded-md" />
      </CardFooter>
    </Card>
  );
};

export default PostCardSkeleton;
