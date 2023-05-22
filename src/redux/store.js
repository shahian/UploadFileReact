import { configureStore } from "@reduxjs/toolkit";
import { uploadExcelFileReducer } from "./features/LifeInsurance";
import { retireOrganReducer } from "./testReducer";
export const store = configureStore({
  reducer: {
    retireOrgan:retireOrganReducer,
    uploadExcelFile:uploadExcelFileReducer
  },
});
