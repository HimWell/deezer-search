import axios from 'axios';
const options = {

    //please not this is where I managed to get the base api from
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
}
const instance = axios.create(options);

instance.defaults.timeout = 2500;

instance.interceptors.request.use((config) => ({
    ...config,
    headers: {
        ...config.headers,
        // please not this is where I managed to get the api key from for free
        'X-RapidAPI-Key': '4fbbe7b512msh501191c477af2e2p1d23c8jsn5f6cd26fa675',
    },
}))

export default instance;