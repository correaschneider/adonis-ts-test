import { UserInterface } from "../types/user"
import axios from "./axios"
import { AxiosResponse } from "axios"

const fetchAddress = async (user: UserInterface) => {
  let address = {};
  try {
    const { data }: AxiosResponse = await axios.get(`/${user.id}/address`)

    address = data || {}
  } catch (error) {
    console.error(error)
  }

  user.address = address

  return user
}

export default fetchAddress