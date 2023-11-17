const baseUrl = "http://localhost:3030/users";

export const login = async (userData) => {
  const response = await fetch(`${baseUrl}/login`, {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  sessionStorage.setItem("token", data.accessToken);
};

export const register = async (userData) => {
  const response = await fetch(`${baseUrl}/register`, {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(userData),
  });
  const token = await response.json();

  sessionStorage.setItem("token", token);
  return token;
};

export const logout = async () => {
  await fetch(`${baseUrl}/logout`);
  sessionStorage.removeItem("token");
};
