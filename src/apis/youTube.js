import axios from 'axios';

const KEY = 'AIzaSyD1BAkksAcfqpxrqR09WDXdhKuH0to8_YA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});