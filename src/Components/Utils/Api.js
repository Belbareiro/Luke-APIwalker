import axios from 'axios';

const API_BASE_URL = 'https://swapi.dev/api/';

export const getResourceData = async (resource, id) => {
    const response = await axios.get(`${API_BASE_URL}${resource}/${id}/`);
    return response.data;
};

export const getHomeworld = async (url) => {
    const response = await axios.get(url);
    return response.data;
};

