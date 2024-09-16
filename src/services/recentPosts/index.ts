import envConfig from "@/src/config/envConfig";
import { delay } from "@/src/utils/delay";

export const getRecentPosts = async () => {
  try {
    const res = await fetch(
      `${envConfig.baseApi}/items?sortBy=-createdAt&limit=9`
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    await delay(3000);
    return res.json();
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    throw error;
  }
};
