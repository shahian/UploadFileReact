import { createSlice } from "@reduxjs/toolkit";
import makeRequest from "../../helpers/makeRequest";
import { retireOrganUrl } from "../../urls/urls";

export const initialState = {
  loading: false,
  errors: null,
  data: [],
};

const getAllRetireOrganSlice = createSlice({
  name: "getAllRetireOrgan",
  initialState,
  reducers: {
    request: (state) => {
      state.loading = true;
    },
    requestSuccess: (state, { payload }) => {
      state.data = payload.data;
      state.loading = false;
      state.errors = null;
    },
    requestFailure: (state, { payload }) => {
      state.loading = false;
      state.errors = payload;
    },
  },
});

export const { request, requestSuccess, requestFailure } = getAllRetireOrganSlice.actions;

export default getAllRetireOrganSlice.reducer;

export function getAllRetireOrgan(setLoading) {
  return async (dispatch) => {
    dispatch(request());
    try {
      const response = await makeRequest('get', retireOrganUrl)
      dispatch(requestSuccess(response));
      setLoading(false)
    } catch (error) {
      dispatch(requestFailure(JSON.stringify(error)));
    }
  };
}
