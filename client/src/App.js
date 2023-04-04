import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import setAuthToken from "utils/setAuthToken";
import Landing from "components/layout/Landing";
import Navbar from "components/layout/Navbar";
import Register from "components/auth/Register";
import Login from "components/auth/Login";
import Alert from "components/layout/Alert";
import Dashboard from "components/dashboard/Dashboard";
import PrivateRoute from "components/routing/PrivateRoute";
import store from "store";

import { loadUser } from "store/auth/actions";

import "App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
        </Routes>
        <section className="container">
          <Alert />
          <Routes>
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </section>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
