// import { createSlice } from "@reduxjs/toolkit";
// import makeRequest from "../../../helpers/makeRequest";
// import toaster from "../../../helpers/toaster";
// import { baseValueUrl } from "../../../urls/urls";

// export const initialState = {
//   loading: false,
//   errors: null,
//   data: null,
// };

// const addBaseValueSlice = createSlice({
//   name: "addBaseValue",
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
// addBaseValueSlice.actions;

// export default addBaseValueSlice.reducer;

// export function addBaseValue(values, history, setSubmitting) {
//   return async (dispatch) => {
//     dispatch(request());
//     try {
//       const response = await makeRequest("post", baseValueUrl, values);
//       const data = response.data;
//       dispatch(requestSuccess(data));
//       toaster("success", "اطلاعات پایه با موفقیت اضافه شد");
//       history.push('/base-value-table')
//     } catch (error) {
//       const message = error.response?.data?.meta?.errors[0]?.message;
//       toaster("error", message);
//       dispatch(requestFailure(JSON.stringify(error)));
//       setSubmitting(false)
//     }
//   };
// }
