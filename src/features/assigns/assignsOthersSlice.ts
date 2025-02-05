/* eslint-disable prettier/prettier */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getApiUrl from "../../getApiUrl";
import Cookies from "cookies-js"

const apiUrl = getApiUrl()



interface AssignsOthers {
  id: string;
  name: number;
  product: number;
  timestamp: string;
}

interface AssignsOthersState {
    assignsOthers: AssignsOthers[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null | undefined;
}



const initialState: AssignsOthersState = {
    assignsOthers: [],
    status: "idle",
    error: null,
};


export const fetchAssignedOthers = createAsyncThunk(
  "assignedOthers/fetchAssignedOthers",
  async (salesTeamId) => {
    console.log('params ', salesTeamId)
    const response = await axios.get(`${apiUrl}/print-assigned-otherproduct/`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("accessToken")}`,
      },
      params: {
        sales_team: salesTeamId,
      },
      
    });
    return response.data;
  }
);


export const assignOthers = createAsyncThunk(
    'assignOthers/assignOthers',
    async (payload) => {
      const response = await axios.post(`${apiUrl}/assign-others/`, payload, {
        headers: {
          Authorization: `Bearer ${Cookies.get('accessToken')}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    }
  );



const assignsOthersSlice = createSlice({
  name: "assignsOthers",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      
      .addCase(assignOthers.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(assignOthers.fulfilled, (state, action) => {
        state.status = "succeeded"
        // state.assignsOthers.push(action.payload);
      })
      .addCase(assignOthers.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
      .addCase(fetchAssignedOthers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAssignedOthers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.assignsOthers = action.payload;
      })
      .addCase(fetchAssignedOthers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllAssignsOthers = (state: { assignsOthers: AssignsOthersState}) =>
  state.assignsOthers.assignsOthers;
export const getAssignsOthersStatus = (state: { assignsOthers: AssignsOthersState}) =>
  state.assignsOthers.status;
export const getAssignsOthersError = (state: { assignsOthers: AssignsOthersState}) =>
  state.assignsOthers.error;

export default assignsOthersSlice.reducer;
