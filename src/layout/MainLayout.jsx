// import Sidebar from "../components/Sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getMenuData } from "../redux/features/values/getMenuDataSlice";
import { getUserInfo } from "../redux/features/user/getUserInfoSlice";
import { useSelector } from "react-redux";
// import loading from "../assets/gifs/loading.gif";
import "./styles.css";

const MainLayout = ({ children }) => {
  const [userLoading, setUserLoading] = useState(true);
  const [menuLoading, setMenuLoading] = useState(true);
  const dispatch = useDispatch();
  const selector = useSelector;

  useEffect(() => {
    dispatch(getMenuData(setMenuLoading));
    dispatch(getUserInfo(setUserLoading));
  }, [dispatch]);

  const userInfo = selector((state) => state?.user?.userInfo?.data?.object);
  // const userInfo = selector((state) => state?.user?.userInfo?.data?.data);
  const menuItems = selector((state) => state?.getValues?.getMenus?.data?.data);

  return (
    <div className="main-layout__div">
      <div className="main-div">
        {/* <Header userInfo={userInfo} userLoading={userLoading} /> */}
        <div className="children__div">
          {/* {!!userInfo && !!menuItems ? ( */}
            {children}
          {/* ) : ( */}
            {/* <div className="gif__div">
              <img className="loading-gif" src={loading} alt="loading ..." />
            </div> */}
          {/* )} */}
        </div>
      </div>
      {/* <Sidebar menuItems={menuItems} menuLoading={menuLoading} /> */}
    </div>
  );
};

export default MainLayout;
