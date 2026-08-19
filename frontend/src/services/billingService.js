import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const getBills = async () => {
    const response = await axios.get(`${API_URL}/billing`);
    return response.data;
};

export const getBillById = async (billId) => {
    const response = await axios.get(`${API_URL}/billing/${billId}`);
    return response.data;
};

export const createBill = async (billData) => {
    const response = await axios.post(`${API_URL}/billing`, billData);
    return response.data;
};

export const updateBill = async (billId, billData) => {
    const response = await axios.put(
        `${API_URL}/billing/${billId}`,
        billData
    );
    return response.data;
};

export const deleteBill = async (billId) => {
    const response = await axios.delete(
        `${API_URL}/billing/${billId}`
    );
    return response.data;
};