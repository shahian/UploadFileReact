
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getFromLocalStorage } from "../../helpers/ManageLocalStorage";
import "./styles.css";
import { getAllRetireOrgan } from "../../redux/testReducer/getAllRetireOrganSlice";

const Login = () => {
  const select = useSelector;
  const dispatch = useDispatch();
  let history = useHistory();

  const token = getFromLocalStorage("token");

  // useEffect(() => {
  //   !!token && history.push("/dashboard");
  // }, [token, history]);
useEffect(()=>{
  dispatch(getAllRetireOrgan())
},[])
 

  return (
<p className="p-red">login</p>
      
  );
};

export default Login;
