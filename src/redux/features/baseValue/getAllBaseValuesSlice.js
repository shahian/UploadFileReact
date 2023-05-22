// import { createSlice } from "@reduxjs/toolkit";
// import makeRequest from "../../../helpers/makeRequest";
// import { baseValuesUrl } from "../../../urls/urls";

// export const initialState = {
//   loading: false,
//   errors: null,
//   data: [],
// };

// const getAllBaseValuesSlice = createSlice({
//   name: "getAllBaseValues",
//   initialState,
//   reducers: {
//     request: (state) => {
//       state.loading = true;
//     },
//     requestSuccess: (state, { payload }) => {
//       state.data = payload.data;
//       state.loading = false;
//       state.errors = null;
//     },
//     requestFailure: (state, { payload }) => {
//       state.loading = false;
//       state.errors = payload;
//     },
//   },
// });

// export const { request, requestSuccess, requestFailure } = getAllBaseValuesSlice.actions;

// export default getAllBaseValuesSlice.reducer;

// export function getAllBaseValues(setLoading) {
//   return async (dispatch) => {
//     dispatch(request());
//     try {
//       const response = await makeRequest('get', baseValuesUrl)
//       dispatch(requestSuccess(response));
//       setLoading(false)
//     } catch (error) {
//       dispatch(requestFailure(JSON.stringify(error)));
//     }
//   };
// }
