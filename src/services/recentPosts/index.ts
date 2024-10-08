import envConfig from "@/src/config/envConfig";

export const getRecentPosts = async () => {
  try {
    const fetchOptions = {
      next: {
        tags: ["posts"],
      },
    };
    const res = await fetch(
      `${envConfig.baseApi}/items?sortBy=-createdAt&limit=9`,
      fetchOptions
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    throw error;
  }
};
