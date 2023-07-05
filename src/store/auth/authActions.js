import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, API_AUTH, API_PROFILE } from "../../consts";
import axios from "axios";
import { setError, setUser } from "./authSlice";

function getAuth() {
  const token = JSON.parse(localStorage.getItem("token"));
  const Authorization = `Bearer ${token.access}`;
  // console.log(token.access);
  const config = {
    headers: {
      Authorization,
    },
  };
  return config;
}

export const register = createAsyncThunk(
  "@auth/register",
  async ({ formData }, { dispatch }) => {
    try {
      await axios.post(`${API_AUTH}users/`, formData);
    } catch (error) {
      console.log(error.response.data);
      dispatch(setError(error.response.data));
    }
  }
);

export const activation = createAsyncThunk(
  "@auth/activation",
  async (formData) => {
    try {
      const res = await axios.post(`${API_AUTH}users/activation/`, formData);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
      throw error;
    }
  }
);

export const login = createAsyncThunk(
  "@auth/login",
  async ({ formData, navigate, username }, { dispatch }) => {
    try {
      const token = await axios.post(`${API_AUTH}jwt/create/`, formData);
      localStorage.setItem("token", JSON.stringify(token.data));
      localStorage.setItem("username", JSON.stringify(username));
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
      dispatch(setError(error.response.data));
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
  async ({ formData }, { dispatch }) => {
    try {
      let res = await axios.post(`${API_AUTH}users/reset_password/`, formData);
      console.log(res);
    } catch (error) {
      console.log(error.response.data);
      dispatch(setError(error.response.data));
    }
  }
);

export const sendNewPassword = createAsyncThunk(
  "@auth/sendNewPassword",
  async ({ formData, navigate }, { dispatch }) => {
    try {
      let res = await axios.post(
        `${API_AUTH}users/reset_password_confirm/`,
        formData
      );
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(error.response.data);
      dispatch(setError(error.response.data));
    }
  }
);

export const sendEmailforUser = createAsyncThunk(
  "@auth/sendEmailforUser",
  async ({ formData }, { dispatch }) => {
    try {
      let res = await axios.post(`${API_AUTH}users/reset_username/`, formData);
    } catch (error) {
      console.log(error.response.data);
      dispatch(setError(error.response.data));
    }
  }
);

export const saveNewUsername = createAsyncThunk(
  "@auth/saveNewUsername",
  async ({ formData, navigate }, { dispatch }) => {
    try {
      let res = await axios.post(
        `${API_AUTH}users/reset_username_confirm/`,
        formData
      );
      console.log(res);
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
      dispatch(setError(error.response.data));
    }
  }
);

export const getMyProfile = createAsyncThunk("@auth/getMyProfile", async () => {
  try {
    const config = getAuth();
    const res = await axios(`${API_PROFILE}profiles/me`, config);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error.response.data);
  }
});

export const updateProfile = createAsyncThunk(
  "@auth/updateProfile",
  async ({ formData, slug }) => {
    try {
      const config = getAuth();
      await axios.patch(`${API_PROFILE}profiles/${slug}/`, formData, config);
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

export const setNewUsername = createAsyncThunk(
  "@auth/setNewUsername",
  async ({ formData }, { dispatch }) => {
    try {
      const config = getAuth();
      await axios.post(`${API_AUTH}users/set_username/`, formData, config);
      getMyProfile();
    } catch (error) {
      console.log(error.response.data);
      dispatch(setError(error.response.data));
    }
  }
);

export const setNewPassword = createAsyncThunk(
  "@auth/setNewPassword",
  async ({ formData }, { dispatch }) => {
    try {
      const config = getAuth();
      await axios.post(`${API_AUTH}users/set_password/`, formData, config);
    } catch (error) {
      console.log(error.response.data);
      dispatch(setError(error.response.data));
    }
  }
);

export const deleteAccount = createAsyncThunk(
  "@auth/deleteAccount",
  async (formData) => {
    try {
      const config = getAuth();
      await axios.delete(`${API_AUTH}users/me/`, formData, config);
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

export const getUsersProfiles = createAsyncThunk(
  "@auth/getUsersProfiles",
  async () => {
    try {
      const config = getAuth();
      const res = await axios.get(`${API_PROFILE}profiles/`, config);
      return res.data;
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

export const getOneUser = createAsyncThunk(
  "@auth/getOneUser",
  async ({ slug }) => {
    try {
      const config = getAuth();
      const res = await axios.get(`${API_PROFILE}profiles/${slug}`, config);
      return res.data;
    } catch (error) {
      console.log(error.respone.data);
    }
  }
);
