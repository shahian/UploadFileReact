import {  useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getFromLocalStorage } from "../../helpers/ManageLocalStorage";
import loading from "../../assets/gifs/loading.gif";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const selector = useSelector;
let userInfoValue;
const envUserinfourl = process.env.NODE_ENV
if (envUserinfourl==="production"){
//server
userInfoValue = selector((state) => state?.user?.userInfo?.data?.object);
}
if (envUserinfourl==="development"){
 // local
 userInfoValue = true;
}
  
 const userInfo=userInfoValue; 

  const token = getFromLocalStorage("token");
  const isLoggedIn = !!token;

  return (
    <Route
      {...rest}
      component={(props) =>
        isLoggedIn ? (
          !!userInfo ? (
            <Component {...props} />
          ) : (
            <div className="gif__div">
              <img className="loading-gif" src={loading} alt="loading ..." />
            </div>
          )
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
