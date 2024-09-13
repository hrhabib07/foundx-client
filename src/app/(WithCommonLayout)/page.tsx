import Landing from "@/src/components/modules/home/Landing";
import RecentPosts from "@/src/components/modules/home/RecentPosts";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Landing />
      {/* Sup{" "} */}
      <Suspense
        fallback={
          <h2 className="animate-pulse text-2xl text-center font-bold my-5">
            Loading ...
          </h2>
        }
      >
        {/* <PostFeed /> */}
        <RecentPosts />
      </Suspense>
    </>
  );
}
