import axios from "axios";

export const getAllPeople = axios.create({
  baseURL: "https://swapi.tech/api",
});
