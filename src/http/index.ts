import axios from "axios";

export const APIKEY: string = 'FZVohgVkCqv040gQ7BEDP6rQqkQ4fRjD'

export const http = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    headers: {
        "apikey": APIKEY
    }
})

