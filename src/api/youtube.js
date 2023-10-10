import axios from 'axios';
const KEY="AIzaSyAVscemj7O55kMkxMv5qsRH6smyztNI0Rg";
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        
        maxResults:30,
        key:KEY
    },
    headers:{}
})
    
