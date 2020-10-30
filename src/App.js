import PrivateRoute from "features/routes/PrivateRouter";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notification from 'components/Notification';
import "./App.css";
import NotFound from 'components/NotFound';
const SignIn = lazy(() => import("./features/Auth/pages/SignIn"));
const SignUp = lazy(() => import("./features/Auth/pages/SignUp"));
const ForgotPassword = lazy(()=>import("./features/Auth/pages/ForgotPassword"));
const MainPage = lazy(() => import("./features/Message/pages/Main"));


function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading ...</div>}>
          <Switch>
            <PrivateRoute exact path="/" component={MainPage}></PrivateRoute>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/resetpassword" component={ForgotPassword}/>
            <Route component={NotFound}/>
          </Switch>
        </Suspense>
      </Router>
      <Notification/>
    </div>
  );
}

export default App;
