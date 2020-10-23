import React from "react";
import background from "assets/images/Background.svg";
import './SignUp.scss';
import InputField from "custom-fields/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { Controller, useForm } from "react-hook-form";
import { Grid } from "@material-ui/core";

const SignInSchema= yup.object().shape({
  email:yup.string().email('Email is not valid.').required('Email is required.'),
  password:yup.string().required('Password is required.').min(6)
})

const SignUp = () => {

  const {handleSubmit, errors, control } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(SignInSchema),
  });

  const onSubmit=(value)=>{
    console.log(value);
  }
  
  return (
    <>
      <div className="BackgroundImage">
        <img src={background} alt="background" />
      </div>
      <Grid container spacing={2}>
        <Grid item xs={6}>

        </Grid>

        <Grid item xs={6}>

        </Grid>
      </Grid>
      <div className="SignUp">
        <p>đăng ký</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="SignUpForm">
        <Controller
          as={InputField}
          name="test"
          errors={errors.name}
          control={control}
          label="test"
          variant="outlined"
          defaultValue=""
        >
        </Controller>
      </form>
    </>
  );
};

export default SignUp;
