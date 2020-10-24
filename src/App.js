// import PrivateRoute from "features/routes/PrivateRouter";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
const SignIn = lazy(() => import("./features/Auth/pages/SignIn"));
const SignUp = lazy(() => import("./features/Auth/pages/SignUp"));
const MainPage = lazy(() => import("./features/Message/pages/Main"));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading ...</div>}>
          <Switch>
            {/* <PrivateRoute exact path="/" component={""}></PrivateRoute> */}
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
