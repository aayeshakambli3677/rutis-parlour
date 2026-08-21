import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

const staffService = {
  getAll: async () => {
    const response = await axios.get(`${API_URL}/staff/`);
    return response.data;
  },

  getById: async (id) => {
    const response = await axios.get(`${API_URL}/staff/${id}`);
    return response.data;
  },

  create: async (data) => {
    const response = await axios.post(`${API_URL}/staff/`, data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await axios.put(`${API_URL}/staff/${id}`, data);
    return response.data;
  },

  delete: async (id) => {
    const response = await axios.delete(`${API_URL}/staff/${id}`);
    return response.data;
  },
};

export default staffService;