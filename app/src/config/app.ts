import * as dotenv from "dotenv"
dotenv.config()

export default {
  API_BASE: process.env.API_BASE ? process.env.API_BASE : '',
  AXIOS_MAX_TRIES: process.env.AXIOS_MAX_TRIES ? parseInt(process.env.AXIOS_MAX_TRIES) || 1 : 1,
  PATH_FILE_RESULT: process.env.PATH_FILE_RESULT ? process.env.PATH_FILE_RESULT : './users.json',
}