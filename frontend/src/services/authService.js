import API from "./api";

export const loginUser = async (data) => {
  const response = await API.post("/auth/login", data);
  return response.data;
};

export const registerUser = async (data) => {
  const response = await API.post("/auth/register", data);
  return response.data;
};

export const forgetPassword = async (email) => {
  const response = await API.post("/auth/forget-password", { email });
  return response.data;
};