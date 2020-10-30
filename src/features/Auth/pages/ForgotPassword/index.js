import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
} from "@material-ui/core";
import logo from "assets/images/iconchat.png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "custom-fields/InputField";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import './style.scss';
import { setCurrentUser } from "app/userSlice";
import { setNotification } from "app/notificationSlice";
import userAPI from "api/userAPI";

const ForgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email is not valid.")
    .required("Email is required."),
});

function ForgotPassword() {
  const methods = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: yupResolver(ForgotPasswordSchema),
  });
  const { handleSubmit } = methods;
  const dispatch = useDispatch();
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
  };
  return (
    <>
      <div className="bg-svg"></div>
      <Container className="Container">
        <Grid className="Header">
          <img src={logo} alt="logo chat" />
          <h3>Hello Everyone , We are Chatty</h3>
          <h4>Wellcome to chatty please, login to your account.</h4>
        </Grid>
        <Grid className="Form-content">
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputField name="email" label="Email" />

              <Button
                variant="contained"
                color="primary"
                size="large"
                className="ResetPassword__btn"
                type="submit"
                onClick={() => setLoading(true)}
              >
                {loading ? (
                  <CircularProgress size={25.75} className="Circular" />
                ) : (
                  "Send link reset password"
                )}
              </Button>
              <Grid className="BackHome">
                {"You want to back home page?  "}
                <Link to="/" className="LinkResetPassword">
                  Back home!
                </Link>
              </Grid>
            </form>
          </FormProvider>
        </Grid>
      </Container>
    </>
  );
}

export default ForgotPassword;
