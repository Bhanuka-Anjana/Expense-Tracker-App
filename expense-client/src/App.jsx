import { useEffect } from "react";
import Home from "./components/Home";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userAuthenticated } from "./app/authenticationSlice";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  const { isLoggedIn } = useSelector((state) => state.authenticationSlice);
  console.log(isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token !== undefined && token !== null) {
      dispatch(userAuthenticated({ token: token }));
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to='signin'/>}
        />
        <Route
          path="/signup"
          element={isLoggedIn ? <Navigate replace to="/" /> : <SignUpPage />}
        />
        {/* <Route path="/signup" element={<SignUpPage/>} /> */}
        <Route
          path="/signin"
          element={isLoggedIn ? <Navigate replace to="/" /> : <SignInPage />}
        />
        <Route element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
