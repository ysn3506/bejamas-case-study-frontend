import axios from "axios";

export default axios.create({
  baseURL: "https://bejamas-casestudy.herokuapp.com/photos",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
