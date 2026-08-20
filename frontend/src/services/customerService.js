import API from "./api";

export const getProfile = async () => {
  return API.get("/customers/profile");
};

export const updateProfile = async (data) => {
  return API.put("/customers/profile", data);
};

export const getServiceHistory = async () => {
  return API.get("/customers/history");
};