import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const getInventory = async () => {
    const response = await axios.get(`${API_URL}/inventory`);
    return response.data;
};

export const getInventoryItemById = async (itemId) => {
    const response = await axios.get(
        `${API_URL}/inventory/${itemId}`
    );
    return response.data;
};

export const createInventoryItem = async (itemData) => {
    const response = await axios.post(
        `${API_URL}/inventory`,
        itemData
    );
    return response.data;
};

export const updateInventoryItem = async (itemId, itemData) => {
    const response = await axios.put(
        `${API_URL}/inventory/${itemId}`,
        itemData
    );
    return response.data;
};

export const deleteInventoryItem = async (itemId) => {
    const response = await axios.delete(
        `${API_URL}/inventory/${itemId}`
    );
    return response.data;
};