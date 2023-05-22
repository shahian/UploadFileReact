// import { createSlice } from "@reduxjs/toolkit";
// import makeRequest from "../../../helpers/makeRequest";
// import toaster from "../../../helpers/toaster";
// import { baseValueUrl } from "../../../urls/urls";

// export const initialState = {
//   loading: false,
//   errors: null,
//   data: null,
// };

// const getSingleBaseValueSlice = createSlice({
//   name: "getSingleBaseValue",
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

// export const { request, requestSuccess, requestFailure } =
// getSingleBaseValueSlice.actions;

// export default getSingleBaseValueSlice.reducer;

// export function getSingleBaseValue(id, setLoading) {
//   return async (dispatch) => {
//     dispatch(request());
//     try {
//       const response = await makeRequest("get", `${baseValueUrl}?id=${id}`);
//       // const data = response.data?.object;
//       dispatch(requestSuccess(response));
//       setLoading(false)
//     } catch (error) {
//       const message = error.response?.data?.meta?.errors[0]?.message;
//       toaster("error", message);
//       dispatch(requestFailure(JSON.stringify(error)));
//     }
//   };
// }
