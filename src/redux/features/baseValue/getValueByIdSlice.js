// import { createSlice } from "@reduxjs/toolkit";
// import makeRequest from "../../../helpers/makeRequest";
// import toaster from "../../../helpers/toaster";
// import { getValueByIdUrl } from "../../../urls/urls";

// export const initialState = {
//   loading: false,
//   errors: null,
//   years: null,
//   months: null,
//   share: null,
//   progressType: null,
// };

// const getValueByIdSlice = createSlice({
//   name: "getValueById",
//   initialState,
//   reducers: {
//     request: (state) => {
//       state.loading = true;
//     },
//     requestSuccessYears: (state, { payload }) => {
//       state.years = payload.data;
//       state.loading = false;
//       state.errors = null;
//     },
//     requestSuccessMonths: (state, { payload }) => {
//       state.months = payload.data;
//       state.loading = false;
//       state.errors = null;
//     },
//     requestSuccessShare: (state, { payload }) => {
//       state.share = payload.data;
//       state.loading = false;
//       state.errors = null;
//     },
//     requestSuccessProjectProgressType: (state, { payload }) => {
//       state.share = payload.data;
//       state.loading = false;
//       state.errors = null;
//     },
//     requestFailure: (state, { payload }) => {
//       state.loading = false;
//       state.errors = payload;
//     },
//   },
// });

// export const {
//   request,
//   requestSuccessYears,
//   requestSuccessMonths,
//   requestSuccessProjectProgressType,
//   requestSuccessShare,
//   requestFailure,
// } = getValueByIdSlice.actions;

// export default getValueByIdSlice.reducer;

// export function getValueById(id) {
//   return async (dispatch) => {
//     dispatch(request());
//     try {
//       const response = await makeRequest("get", `${getValueByIdUrl}?id=${id}`);
//       if (id === 1) {
//         dispatch(requestSuccessYears(response, id));
//       } else if (id === 2) {
//         dispatch(requestSuccessMonths(response, id));
//       } else if (id === 5) {
//         dispatch(requestSuccessShare(response, id));
//       } else if (id === 6) {
//         dispatch(requestSuccessProjectProgressType(response, id));
//       }
//     } catch (error) {
//       const message = error.response?.data?.meta?.errors[0]?.message;
//       toaster("error", message);
//       dispatch(requestFailure(JSON.stringify(error)));
//     }
//   };
// }
