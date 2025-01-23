import axios from 'axios';
const env = process.env;
const backendUrl = env.REACT_APP_BACKEND_URL;

const axiosApi = axios.create({
    baseURL: backendUrl
});

axiosApi.defaults.timeout = 5000;
axiosApi.defaults.headers.common['Authorization'] = 'BEARER <token>';

export default axiosApi;

// const loadAnotherMessage = async () => {
//     return await axios
//         .get(`${env.REACT_APP_BACKEND_URL}/anothermessage`)
//         .then(response => response.data);
// };

// const loadMessage = async () => {
//     return await axios
//         .get(`${env.REACT_APP_BACKEND_URL}/message`)
//         .then(response => response.data);
// };

//export default loadMessage;