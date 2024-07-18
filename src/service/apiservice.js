// src/services/apiService.js

import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.farmstaymanangel.com/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

const getData = async (endpoint) => {
    try {
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
        throw error;
    }
};

export { getData };