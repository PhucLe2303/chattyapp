import { IconButton, InputAdornment, Tooltip } from "@material-ui/core";
import InputField from "custom-fields/InputField";
import PlusMenu from "../PlusMenu";
import React, { useRef} from "react";
import { FormProvider, useForm } from "react-hook-form";
import "./style.scss";
import Sticker from "./Sticker";
import fileAPI from "api/fileAPI";

function FooterMessageBox(props) {
  const methods = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {},
  });
  const { handleSubmit } = methods;
  const refChoosePhoto = useRef();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleChoosePhoto=(event)=>{
    const fileUploaded = event.target.files[0];
    fileAPI.upLoadPhoto(fileUploaded);
  }

  const handleChooseFile=(file)=>{
    fileAPI.upLoadFile(file);
    console.log(file);
  }

  return (
    <div className="FooterBox__Container">
      <div className="Footer__SelectIcon">
        <IconButton>
          <PlusMenu clickAttachFile={handleChooseFile}/>
        </IconButton>
      <Sticker/>
        <IconButton onClick={()=>refChoosePhoto.current.click()}>
          <Tooltip title="Choose your image">
          <span className="fas fa-image btn-color"/>
          </Tooltip>
          <input
            ref={refChoosePhoto}
            type="file"
            accept="image/*"
            onChange={handleChoosePhoto}
            style={{display:"none"}}
          />
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
