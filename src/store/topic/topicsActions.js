import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API, API_PRODUCTS, API_PROFILE, API_TOPIC } from "../../consts";

function getAuth() {
  const token = JSON.parse(localStorage.getItem("token"));
  const Authorization = `Bearer ${token.access}`;
  const config = {
    headers: {
      Authorization,
    },
  };
  return config;
}

export const createTopic = createAsyncThunk(
  "@articles/createTopic",
  async (topicData) => {
    try {
      const config = getAuth();
      const res = await axios.post(`${API_TOPIC}`, topicData, config);
      console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

export const getTopic = createAsyncThunk("@articles/getTopic", async () => {
  try {
    const config = getAuth();
    const res = await axios.get(`${API_TOPIC}`, config);
    console.log(res.data.results);
    return res.data.results;
  } catch (error) {
    console.log(error.response.data);
    throw error;
  }
});

export const getEvents = createAsyncThunk("@articles/getEvents", async () => {
  try {
    const res = await axios.get(`${API}api/v1/get_news`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error.response.data);
  }
});

export const leaveComment = createAsyncThunk(
  "@articles/leaveComment",
  async (formData) => {
    try {
      const config = getAuth();
      await axios.post(`${API_PROFILE}comment/`, formData, config);
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

export const getOnePost = createAsyncThunk(
  "@articles/getOneComment",
  async (slug) => {
    try {
      const res = await axios.get(`${API_TOPIC}${slug}/`);
      return res.data;
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

export const getAllComments = createAsyncThunk(
  "@articles/getAllComments",
  async () => {
    try {
      const config = getAuth();
      const res = await axios.get(`${API_PRODUCTS}comment/`, config);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error.response.data);
    }
  }
);
