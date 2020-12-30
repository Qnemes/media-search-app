import axios from 'axios'

export const unsplash = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID GsmN4yLH6tRbJHNLPuuokcN5GckdcEDiNRIvb-WMaaM'
    }
})
export const pixabay = axios.create({
    baseURL: 'https://pixabay.com/api/',
    params: {
        key: '19090751-40f305fc7e9b060ca15e0ae2d'
    }
})