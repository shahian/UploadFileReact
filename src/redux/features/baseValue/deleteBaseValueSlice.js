// import { createSlice } from "@reduxjs/toolkit";
// import makeRequest from "../../../helpers/makeRequest";
// import toaster from "../../../helpers/toaster";
// import { baseValueUrl } from "../../../urls/urls";

// export const initialState = {
//   loading: false,
//   errors: null,
//   data: null,
// };

// const deleteBaseValueSlice = createSlice({
//   name: "deleteBaseValue",
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
// deleteBaseValueSlice.actions;

// export default deleteBaseValueSlice.reducer;

// export function deleteBaseValue(id, setLoading) {
//   return async (dispatch) => {
//     dispatch(request());
//     try {
//       setLoading(true)
//       const response = await makeRequest("delete", `${baseValueUrl}?id=${id}`);
//       const data = response.data;
//       dispatch(requestSuccess(data));
//       toaster("success", "اطلاعات پایه با موفقیت حذف شد");
//     } catch (error) {
//       const message = error.response?.data?.meta?.errors[0]?.message;
//       toaster("error", message);
//       dispatch(requestFailure(JSON.stringify(error)));
//     }
//   };
// }
