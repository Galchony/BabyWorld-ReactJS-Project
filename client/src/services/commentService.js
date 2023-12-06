const baseUrl = "http://localhost:3030/data/comments";

export const getAll = async (postId) => {
  const query = new URLSearchParams({
    where: `postId="${postId}"`,
    load: `owner=_ownerId:users`,
});

  const response = await fetch(`${baseUrl}?${query}`);
  const comments = response.json();

  return comments;
};

export const create = async (postId,
    text,
    token) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify({postId,text}),
  });
  const result = await response.json();

  return result;
};
