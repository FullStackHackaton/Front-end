import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Создайте асинхронное действие для выполнения POST-запроса
export const createTopic = createAsyncThunk(
  "topics/createTopic",
  async (topicData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/topics", // Замените на адрес вашего сервера JSON
        topicData
      );
      return response.data;
    } catch (error) {
      throw Error("Ошибка создания темы");
    }
  }
);

const topicsSlice = createSlice({
  name: "topics",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createTopic.fulfilled, (state, action) => {
      // Обновление состояния после успешного создания темы
      state.push(action.payload);
    });
  },
});

export default topicsSlice.reducer;
