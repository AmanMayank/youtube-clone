import axios from 'axios'

const KEY = 'AIzaSyCfMvDl1nm5sHbRbCK19luyMXKXg--cCZg'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
})