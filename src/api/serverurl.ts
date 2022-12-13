import axios from "axios";
import { getEnvVariables } from '../helpers';


 const {VITE_SERVER_URL} = getEnvVariables();

export const serverUrl = axios.create({
    baseURL: VITE_SERVER_URL,
});
