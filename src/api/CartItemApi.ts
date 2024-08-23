import * as FirebaseAuthService from "../authService/FirebaseAuthService"
import axios from "axios";

const baseUrl = "http://localhost:8080";

const token = await FirebaseAuthService.getAccessToken();

const getUserCart = async () => {
  await axios.get(`${baseUrl}/cart`,
    {
      headers: {Authorization: `Bearer${token}`}
    }
  )
}