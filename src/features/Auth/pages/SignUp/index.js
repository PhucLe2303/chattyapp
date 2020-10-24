import React, { useState } from "react";
import background from "assets/images/Background.svg";
import "./SignUp.scss";
import InputField from "custom-fields/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { Button, CircularProgress, Container, Grid } from "@material-ui/core";

const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email is not valid.")
    .required("Email is required."),
  lastname: yup.string().required("Last name is required."),
  firstname: yup.string().required("First name is required."),
  password: yup.string().required("Password is required.").min(6),
  confirmPassword: yup
    .string()
    .required("confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const SignUp = () => {
  const methods = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: yupResolver(SignInSchema),
  });
  const { handleSubmit } = methods;
  const [loading, setLoading] = useState(false);

  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <>
      <div className="BackgroundImage">
        <img src={background} alt="background" />
      </div>
      <div className="SignUp">
        <Container className="SignUpContainer">
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="SignUpForm">
              <Grid container>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <InputField name="firstname" label="First Name" />
                  </Grid>
                  <Grid item xs={6}>
                    <InputField name="lastname" label="Last Name" />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <InputField name="email" label="Email" />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    name="password"
                    type="password"
                    label="Password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    // labelWidth={175}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className=""
                  type="submit"
                  fullWidth
                  onClick={() => setLoading(true)}
                >
                  {loading ? (
                    <CircularProgress size={25.75} className="Circular" />
                  ) : (
                    "Login"
                  )}
                </Button>
              </Grid>
            </form>
          </FormProvider>
        </Container>
      </div>
    </>
  );
};

export default SignUp;
