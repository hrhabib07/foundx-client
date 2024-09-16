import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import React from "react";
import Container from "@/src/components/ui/Container";
import PostCardSkeleton from "@/src/components/ui/PostCardSkeleton";

const loading = async () => {
  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recently Found Items</h2>
        <p className="text-center">
          A list of items that have been recently found and reported.
        </p>
      </div>
      <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-4">
        {[...Array(9)].map(() => (
          <PostCardSkeleton></PostCardSkeleton>
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default" size="md">
          <Link href="/found-items">See All</Link>
        </Button>
      </div>
    </Container>
  );
};

export default loading;
