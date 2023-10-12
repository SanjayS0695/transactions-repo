import axios from "axios";
import { INSTALLMENTS_URL, TRANSACTIONS_URL } from "./constants";

axios.defaults.baseURL = "http://localhost:8081/api";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const getTransactionsApi = async (payload) => {
  return await axios.get(
    TRANSACTIONS_URL(payload?.pageNumber, payload?.sortBy)
  );
};

export const getInstallmentsApi = async (id) => {
  return await axios.get(INSTALLMENTS_URL(id));
};
