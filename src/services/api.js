import axios from "axios";

const api = axios.create({
 baseURL: "https://shopify-backend-nisx.onrender.com"
});

export default api;
