import { createSlice } from "@reduxjs/toolkit";

const reportTypeSlice = createSlice({
  name: "reportType",
  initialState: {
      reportType: 0,
  },
  reducers: {
    changeReportType( state, action ) {
      state.reportType = action.payload
    },
  },
});

export const reportType = ({report}) => report.reportType

export const { changeReportType } = reportTypeSlice.actions;

export default reportTypeSlice.reducer;
