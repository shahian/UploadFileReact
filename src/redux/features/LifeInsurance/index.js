import { combineReducers } from "redux";
import uploadExcelFile from './uploadExcelFile'  

export const uploadExcelFileReducer=combineReducers({
    uploadExcelFile:uploadExcelFile
});