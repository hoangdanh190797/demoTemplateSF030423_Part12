import axios from "axios";

export const axiosAPI = axios.create({
    baseURL:"https://api.realworld.io/api/",
    headers:{
        Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3R0ZXN0MTc5QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoidGVzdHRlc3QxNzkiLCJpYXQiOjE2ODA1MTExNjYsImV4cCI6MTY4NTY5NTE2Nn0.dM1S3KIqbyyh7rcn-B3iYE5hjgTZWbK4Jw-qYAj1GmY`
    }
})

export default axiosAPI;