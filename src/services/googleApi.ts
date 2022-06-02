import axios from "axios";

const googleApi = axios.create({
  baseURL: "https://www.googleapis.com/oauth2/v1",
});

const googleOAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth";

export { googleApi, googleOAuthUrl };
