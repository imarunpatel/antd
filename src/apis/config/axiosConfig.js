import axios from "axios";
import store from "../../store/store";
import { toggleSessionDialog } from "../../store/sessionDialogSlice";

export const api = axios.create({
  withCredentials: false,
  baseURL: "",
});

const errorHandler = (error) => {
  const statusCode = error.response?.status;
  store.dispatch(toggleSessionDialog({show: true}))
};

api.interceptors.response.use(undefined, (error) => {
  console.log("api error", error);
  return errorHandler(error);
});
