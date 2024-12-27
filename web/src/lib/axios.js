import axios from "axios";
import { API_URL_HTTP } from '$env/static/private';

const api = axios.create({
    baseURL: API_URL_HTTP,
});

export default api;