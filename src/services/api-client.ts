import axios from "axios";

const keys = import.meta.env.VITE_API_KEY;

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: keys
    }
})