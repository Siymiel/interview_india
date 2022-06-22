import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: ' http://localhost:4000',
    headers: {
        accept: 'application/json'
    }
});

export default axiosInstance