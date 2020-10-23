import React, { useState } from "react";
import { useForm, Controller, FormProvider} from "react-hook-form";
// import {Link} from "react-router-dom";
import {
  Button,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import "./SignIn.scss";
import background from "assets/images/Background.svg";
import logo from "assets/images/iconchat.png";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {auth} from 'services/firebaseConfig';
import InputField from "custom-fields/InputField";

const SignInSchema= yup.object().shape({
  email:yup.string().email('Email is not valid.').required('Email is required.'),
  password:yup.string().required('Password is required.').min(6)
})

function SignIn() {

  const methods = useForm({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(SignInSchema),
  });
  const {handleSubmit} = methods;

  // const [showPassword, setShowPassword] = useState(false);

  const [loading,setLoading] = useState(false);

  const onSubmit = (data) => {
      console.log(data);
      setLoading(true);
      // auth.createUserWithEmailAndPassword(data.email,data.password).catch((err)=>{
      //   setLoading(false);
      //   console.log(err);
      // })
  };

  return (
    <>
      <div className="BackgroundImage">
        <img src={background} alt="background" />
      </div>
      <div className="SignIn">
        <div className="SignIn__Container">
          <div className="SignIn__Header">
            <img src={logo} alt="logo chat" />
            <h3>Hello Everyone , We are Chatty</h3>
            <h4>Wellcome to chatty please, login to your account.</h4>
          </div>
          <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="SignIn__Form">

            <InputField name="email" label="Email"/>
            
            <InputField name="password" label="PassWord" type="password"/>
            {/* <Link to="/forgotpassword">
                Forgot Password?
            </Link> */}
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="SignIn__Button"
              type="submit"
              onClick={()=>setLoading(true)}
            >
              {loading? <CircularProgress size={25.75} className="Circular"/>:"Login"}
            </Button>
          </form>
          </FormProvider>
         
          <ul className="SignIn__MediaLogo">
            <li>
              <IconButton className="SignIn__IconButton--fb" color="primary">
                <i className="fab fa-facebook-f"></i>
              </IconButton>
            </li>
            <li>
              <IconButton className="SignIn__IconButton--gg" color="primary">
                <i className="fab fa-google"></i>
              </IconButton>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SignIn;
