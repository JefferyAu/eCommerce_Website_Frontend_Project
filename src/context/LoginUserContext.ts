import {createContext} from "react";
import {UserData} from "../data/user/User.Type.ts";


export const LoginUserContext = createContext<UserData | null | undefined>(undefined)