import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import NotFound404 from "./pages/404/404";
import Login from "./pages/Login/Login";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";
import "./App.css";
import "./css/global.css";
import "./css/antd-styles.css";
import LifeInsurance from "./pages/LifeInsurance/LifeInsurance";

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer
          style={{ fontSize: "18px" }}
          position="top-center"
          autoClose={2000}
          limit={3}
        />
        <Switch>
          <Route exact path="/LifeInsurance" component={LifeInsurance} />
          <Route exact path="/login" component={Login} />
          {/* <MainLayout> */}
            <Switch>
              <PrivateRoute component={NotFound404} />
            </Switch>
          {/* </MainLayout> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
