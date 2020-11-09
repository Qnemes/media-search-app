import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID GsmN4yLH6tRbJHNLPuuokcN5GckdcEDiNRIvb-WMaaM'
    }
})