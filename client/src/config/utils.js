import { BASE_PATH, SERVER_URL } from './index'

export const url = (url) => {
  return `${BASE_PATH}/${url}`
}

export const staticUrl = (url) => {
  if (BASE_PATH) {
    return `/${BASE_PATH}/${url}`
  } else {
    return `/${url}`
  }
}

export const mediaUrl = (url) => `${SERVER_URL}${url}`