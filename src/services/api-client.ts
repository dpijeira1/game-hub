import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e1108075e18d4b9d8de0e1f3f0bfb653'
    }
})