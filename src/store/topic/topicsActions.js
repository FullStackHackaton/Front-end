import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_TOPIC } from "../../consts";

export const createTopic = createAsyncThunk(
  "topic/createTopic",
  async (topicData) => {
    try {
      const response = await axios.post(`${API_TOPIC}`, topicData);
      return response.data;
    } catch (error) {
      console.log(topicData);
      throw Error("Ошибка создания темы");
    }
  }
);