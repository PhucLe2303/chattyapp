import { IconButton, InputAdornment, Tooltip } from "@material-ui/core";
import InputField from "custom-fields/InputField";
import PlusMenu from "../PlusMenu";
import React, { useRef} from "react";
import { FormProvider, useForm } from "react-hook-form";
import "./style.scss";
import Sticker from "./Sticker";
import fileAPI from "api/fileAPI";
import Emoji from './Emoji';
import messageAPI from 'api/messageAPI';
import { useSelector } from "react-redux";

function FooterMessageBox(props) {

  const methods = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {},
  });
  const { handleSubmit,setValue } = methods;
  const refChoosePhoto = useRef();
  const refSubmit = useRef();
  const currentID = useSelector((state)=>state.user.currentUser.uid);
  const currentContact = useSelector((state)=>state.message.currentContact.uid);

  const onSubmit = (data) => {
    messageAPI.sendMessage(data.message,currentID,currentContact);
    setValue('message','');
  };

  const handleUserKeyPress=(e)=>{
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      refSubmit.current.click();
    }
  }

  const handleClickEmoji=(emoji)=>{
    console.log(emoji);
    let value = methods.getValues('message');
    value = value + emoji.native;
    methods.setValue('message',value);
  }

  const handleChoosePhoto=(event)=>{
    const fileUploaded = event.target.files[0];
    fileAPI.upLoadPhoto(fileUploaded);
  }

  const handleChooseFile=(file)=>{
    fileAPI.upLoadFile(file);
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
            onKeyPress={handleUserKeyPress}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Emoji emojiProps={handleClickEmoji}/>
                </InputAdornment>
              ),
            }}
          />
          <button type="submit" ref={refSubmit} style={{display:"none"}}/>
        </form>
      </FormProvider>
      <div className="Footer__SendIcon">
        <IconButton onClick={()=>refSubmit.current.click()}>
          <span className="fas fa-paper-plane btn-color"/>
        </IconButton>
      </div>
    </div>
  );
}

export default FooterMessageBox;
