import { combineReducers } from "redux";
import addBaseValueSlice from "./addBaseValueSlice";
import deleteBaseValueSlice from "./deleteBaseValueSlice";
import editBaseValueSlice from "./editBaseValueSlice";
import getAllBaseValuesSlice from "./getAllBaseValuesSlice";
import getSingleBaseValueSlice from "./getSingleBaseValueSlice";
import getValueByIdSlice from "./getValueByIdSlice";

export const baseValueReducers = combineReducers({
  getAllBaseValues: getAllBaseValuesSlice,
  getSingleBaseValue: getSingleBaseValueSlice,
  deleteBaseValue: deleteBaseValueSlice,
  EditBaseValue: editBaseValueSlice,
  addBaseValue: addBaseValueSlice,
  getValueById: getValueByIdSlice,
});
