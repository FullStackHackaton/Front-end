import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_AUTH } from "../../consts";
import axios from "axios";
import { setUser } from "./authSlice";

export const register = createAsyncThunk(
  "@auth/register",
  async ({ formData }) => {
    try {
      await axios.post(`${API_AUTH}users/`, formData);
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

export const activation = createAsyncThunk(
  "@auth/activation",
  async (formData) => {
    try {
      const res = await axios.post(`${API_AUTH}users/activation/`, formData);
      const data = await res.json()
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
      throw error;
    }
  }
);

export const login = createAsyncThunk(
  "@auth/login",
  async ({ formData, navigate, username }) => {
    try {
      const token = await axios.post(`${API_AUTH}jwt/create/`, formData);
      localStorage.setItem("token", JSON.stringify(token.data));
      localStorage.setItem("username", JSON.stringify(username));
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

export const checkAuthToken = createAsyncThunk(
  "@auth/checkAuthToken",
  async (_, { dispatch }) => {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      let res = await axios.post(`${API_AUTH}jwt/refresh/`, {
        refresh: token.refresh,
      });
      localStorage.setItem(
        "token",
        JSON.stringify({ refresh: token.refresh, access: res.data.access })
      );
      let user = localStorage.getItem("username");
      dispatch(setUser(user));
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

export const logout = createAsyncThunk(
  "@auth/logout",
  async (navigate, { dispatch }) => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    dispatch(setUser(""));
    navigate("/");
  }
);

export const sendEmail = createAsyncThunk(
  "@auth/sendEmail",
  async (formData) => {
    try {
      let res = await axios.post(`${API_AUTH}users/reset_password/`, formData);
      console.log(res);
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

export const sendNewPassword = createAsyncThunk(
  "@auth/sendNewPassword",
  async ({ formData, navigate }) => {
    try {
      let res = await axios.post(
        `${API_AUTH}users/reset_password_confirm/`,
        formData
      );
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

export const sendEmailforUser = createAsyncThunk(
  "@auth/sendEmailforUser",
  async (formData) => {
    try {
      let res = await axios.post(`${API_AUTH}users/reset_username/`, formData);
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

export const saveNewUsername = createAsyncThunk(
  "@auth/saveNewUsername",
  async ({ formData, navigate }) => {
    try {
      let res = await axios.post(
        `${API_AUTH}users/reset_username_confirm/`,
        formData
      );
      console.log(res);
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }
  }
);
