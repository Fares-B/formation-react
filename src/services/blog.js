import { get } from "./query";
import { apiBlog } from "../config";

const prefixUrl = `https://newsapi.org/v2/`;
const key = `apiKey=${apiBlog}`;

export const getBlogs = (query = "Apple") => get(`${prefixUrl}everything?${key}&sortBy=popularity&q=${query}`).then(data => data.articles );