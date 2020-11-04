import InputField from "custom-fields/InputField";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import './style.scss';

function InputChat(props) {
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
    <div className="Input__Container">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="Form">
          <InputField
            name="message"
            multiline
            placeholder="Type your message..."
            margin="none"
            autoComplete="off"
            label=""
            className="Input__Field"
          />
        </form>
      </FormProvider>
    </div>
  );
}

export default InputChat;
