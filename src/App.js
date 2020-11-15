import PrivateRoute from "features/routes/PrivateRouter";
import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import Notification from 'components/Notification';
import "./App.css";
import NotFound from 'components/NotFound';
import Loading from 'components/Loading';
import { useDispatch } from "react-redux";
import userAPI from 'api/userAPI';
import {setCurrentUser} from 'app/userSlice';

const SignIn = lazy(() => import("./features/Auth/pages/SignIn"));
const SignUp = lazy(() => import("./features/Auth/pages/SignUp"));
const ResetPassword = lazy(()=>import("./features/Auth/pages/ResetPassword"));
const MainPage = lazy(() => import("./features/Message/pages/Main"));



function App() {

  const dispatch = useDispatch();
  const [isLoading,setIsLoading]=useState(false);
  const history = useHistory();

  useEffect(()=>{
    setIsLoading(true);
    userAPI.verifyCurrentUser().then((user)=>{
      if(user.token){
        userAPI.getUserInfor(user.uid).then((userInfo)=>{
          dispatch(setCurrentUser({
            ...userInfo,
            token:user.token,
          }))
          setIsLoading(false);
        })
      }else{
        setIsLoading(false);
        history.push('/signin');
      }
    }).catch((error)=>{
      console.log(error);
      setIsLoading(false);
    });
  },[]);
  
  return (
    <div className="App">
      {isLoading?<Loading/>:
      <Router>
        <Suspense fallback={<div><Loading/></div>}>
          <Switch>
            <PrivateRoute exact path="/" component={MainPage}></PrivateRoute>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/resetpassword" component={ResetPassword}/>
            <Route component={NotFound}/>
          </Switch>
        </Suspense>
      </Router>}
      <Notification/>
    </div>
  );
}

export default App;
