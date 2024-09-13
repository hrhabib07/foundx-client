const getRecentPosts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/items?sortBy=-createdAt&limit=9`
  );
  const data = await res.json();
  return data;
};
