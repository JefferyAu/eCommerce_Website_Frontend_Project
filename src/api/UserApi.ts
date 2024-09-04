import axios from "axios";
import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts";
import getEnvConfig from "../config/env/EnvConfig.ts";

const baseUrl = getEnvConfig().baseUrl;


export const checkAdminRole = async () =>{
  const response = axios.get<boolean>(
    `${baseUrl}/user/userrole`,
    await FirebaseAuthService.getAuthConfig()
  );
  return response;
}