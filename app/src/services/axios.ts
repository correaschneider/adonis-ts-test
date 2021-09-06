import axiosTemp, { AxiosResponse } from "axios"
import axiosConfig from "../config/axios"

const axios = axiosTemp.create(axiosConfig)

axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response.status === 500) {
      const originalRequest = error.config

      if (originalRequest._tries < originalRequest._maxTries) {
        originalRequest._tries++

        return axios(originalRequest)
      } else {
        return Promise.reject('Max tries exceded on status 500')
      }
    }

    return error
  }
)

export default axios