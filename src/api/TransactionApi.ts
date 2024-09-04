import axios from "axios";
import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts";
import {TransactionDto} from "../data/transaction/Transaction.type.ts";
import getEnvConfig from "../config/env/EnvConfig.ts";

const baseUrl = getEnvConfig().baseUrl;

export const getTransactionByTid = async (tid:string) => {
  const response = await axios.get<TransactionDto>(
    `${baseUrl}/transaction/${tid}`,
    await  FirebaseAuthService.getAuthConfig()
  );
  return response.data;
}

export const prepareTransaction = async () => {
  const response = await axios.post<TransactionDto>(
    `${baseUrl}/transaction/prepare`,
    null,
    await  FirebaseAuthService.getAuthConfig()
  );
  return response.data;
}

export const payTransaction = async (tid:string) => {
   await axios.patch(
    `${baseUrl}/transaction/${tid}/pay`,
    null,
    await  FirebaseAuthService.getAuthConfig()
  );
}

export const finishTransaction = async (tid:string) => {
  const responseData = await axios.patch<TransactionDto>(
    `${baseUrl}/transaction/${tid}/finish`,
    null,
    await  FirebaseAuthService.getAuthConfig()
  );
  return responseData.data;
}

