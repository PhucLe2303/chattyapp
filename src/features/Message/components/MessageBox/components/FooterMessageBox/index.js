import { IconButton, InputAdornment, Tooltip } from "@material-ui/core";
import InputField from "custom-fields/InputField";
import PlusMenu from "../PlusMenu";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import "./style.scss";

function FooterMessageBox(props) {
  const methods = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {},
  });
  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="FooterBox__Container">
      <div className="Footer__SelectIcon">
        <IconButton>
          <PlusMenu />
        </IconButton>
        <IconButton>
          <Tooltip title="Choose ticker">
          <span className="fas fa-sticky-note btn-color"></span>
          </Tooltip>
        </IconButton>
        <IconButton>
          <Tooltip title="Choose your image">
          <span className="fas fa-image btn-color"></span>
          </Tooltip>
        </IconButton>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="Form">
          <InputField
            name="message"
            multiline
            placeholder="Type your message..."
            margin="none"
            autoComplete="off"
            label=""
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title="Choose emoji">
                  <span className="fas fa-smile btn-color" style={{fontSize:"1.5rem",cursor:"pointer"}}/>
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />
        </form>
      </FormProvider>
      <div className="Footer__SendIcon">
        <IconButton>
          <span className="fas fa-paper-plane btn-color"></span>
        </IconButton>
      </div>
    </div>
  );
}

export default FooterMessageBox;
