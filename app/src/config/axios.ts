import appConfig from "./app"

export default {
  baseURL: appConfig.API_BASE,
  _tries: 0,
  _maxTries: (appConfig.AXIOS_MAX_TRIES - 1)
}