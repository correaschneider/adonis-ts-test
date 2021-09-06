import { UserInterface } from "./types/user"
import services from "./services"

const app = async () => {
  try {
    const usersTemp: UserInterface[] = await services.fetchUsers()

    // Remover
    const users = usersTemp.slice(0, 10)

    const usersWithAddress = users.map(services.fetchAddress)
    const usersFinished = await Promise.all(usersWithAddress)

    services.jsonFile.save(usersFinished)
  } catch (error) {
    console.error(error)
  }
}

app()