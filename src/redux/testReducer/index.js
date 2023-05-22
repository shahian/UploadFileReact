import { combineReducers } from "redux";
import getAllRetireOrganSlice from "./getAllRetireOrganSlice";

export const retireOrganReducer = combineReducers({
  getAllRetireOrgan:getAllRetireOrganSlice
});
