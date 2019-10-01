import axios from "axios"

import * as secrets from "../../secrets.json"

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: "[API KEY GOES HERE]"
  }
})
