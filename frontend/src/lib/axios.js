import axios from "axios";

// In production, there's no localhost. The backend is served from the same origin as the frontend.
// Hence, we use a relative URL for API requests in production.
// In development, we need to specify the full URL to the backend server.
const BASE_URL = import.meta.env.mode === "development" ? "http://localhost:5001/api" : "/api";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

export default axiosInstance;