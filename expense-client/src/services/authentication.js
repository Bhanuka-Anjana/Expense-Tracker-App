import axios from "axios";
import { userAuthenticated } from "../app/authenticationSlice";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.REACT_APP_BASE_URL}/Authentication`,
});

export const SignUp = async (dispatch, credentials) => {
  try {
    //api call
    const { data } = await axiosInstance.post("/signup", credentials);
    dispatch(userAuthenticated(data));
  } catch (error) {
    console.log(error);
  }
};

export const SignIn = async (dispatch, credentials) => {
  try {
    //api call
    const { data } = await axiosInstance.post("/signin", credentials);
    dispatch(userAuthenticated(data));
  } catch (error) {
    console.log(error);
  }
};

export const ThirdPartySignIn = async (dispatch, token) => {
  try {
    //api call
    const { data } = await axiosInstance.post(`/google?token=${token}`);
    dispatch(userAuthenticated(data));
  } catch (error) {
    console.log(error);
  }
};
