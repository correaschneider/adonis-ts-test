import axios from "./axios"
import { AxiosResponse } from "axios"

const fetchUsers = async () => {
  try {
    const { data: users }: AxiosResponse = await axios.get('/')

    return users || []
  } catch (error) {
    console.error(error)
  }
}

export default fetchUsers