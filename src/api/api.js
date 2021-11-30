import axios from 'axios';

const requestPattern = axios.create({
    baseURL: 'http://localhost:3000/',
});

export const getData = async (url) => {
    const {data} = await requestPattern.get(url);
    return data;
}

export const postData = async (url, body = {}) => {
    const {data} = await requestPattern.post(url, body);
    return data;
}
