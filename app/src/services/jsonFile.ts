import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs"
import appConfig from "../config/app"

const fetchDir = (path) => path.split('/').slice(0, -1).join('/')

const checkPath = (path) => {
  if (!existsSync(fetchDir(path))) {
    checkPath(fetchDir(path))
  }

  if (!existsSync(path)) {
    mkdirSync(path)
  }
}

export default {
  save: (data) => {
    const jsonString = JSON.stringify(data)
    const path = appConfig.PATH_FILE_RESULT.replace(/^\//, './')
    const file = path.split('/').pop()

    checkPath(fetchDir(path))

    writeFileSync(path, jsonString)
  }
}