import { createSlice } from "@reduxjs/toolkit";
import makeRequest from "../../../helpers/makeRequest";
import { uploadExcelFileLifeInsuranceUrl } from "../../../urls/urls";


export const initialState = {
    loading: false,
    errors: null,
    data: [],
  };

  const uploadExcelFileSlice=createSlice({
    name:"uploadExcelFile",
    initialState,
    reducers:{
        request:(state)=>{
            state.loading=true;
        },
        requestSuccess:(state,{payload})=>{
            state.data=payload.data;
            state.loading=false;
            state.errors=null;
        },
        requestFailure:(state,{payload})=>{
            state.loading=false;
            state.errors=payload;
        },
    },
  });

  export const{request,requestSuccess,requestFailure}=uploadExcelFileSlice.actions;

  export default uploadExcelFileSlice.reducer;

  export function uploadExcelFile(data){
    return async(dispatch)=>{
        dispatch(request());
        try{
            const response=await makeRequest('post',uploadExcelFileLifeInsuranceUrl,data)
            dispatch(requestSuccess(response));
           // setLoading(false)
        }catch(errors){
            dispatch(requestFailure(JSON.stringify(errors)));
        }
    };
  }