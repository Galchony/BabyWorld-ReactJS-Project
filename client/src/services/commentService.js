const baseUrl = "http://localhost:3030/jsonstore/comments";

export const getAll = async (postId) => {
  const query = encodeURIComponent(`postId="${postId}"`);

  const response = await fetch(`${baseUrl}?where=${query}`);
  const result = response.json();
  const comments = Object.values(result);

  return comments;
};

export const create = async (data, token) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();

  return result;
};
