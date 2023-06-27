import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_AUTH } from "../../consts";
import axios from "axios";

export const register = createAsyncThunk(
  "@auth/register",
  async ({ formData, navigate }) => {
    try {
      const res = await axios.post(`${API_AUTH}users/`, formData);
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(error.response.data);
    }
  }
);
