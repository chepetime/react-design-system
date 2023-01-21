import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Button, Spacer, Label, InputText, InputHint } from "@chepe/ui";
import { Jellyfish } from "@chepe/icons";

interface IFormInput {
  firstName: string;
  lastName: string;
}

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Spacer>
          <Label for="firstName">First Name</Label>
          <InputText {...register("firstName", { required: true })} />
          {errors.firstName && <InputHint>This field is required</InputHint>}
        </Spacer>
        <Spacer>
          <Label for="lastName">Last Name</Label>
          <InputText {...register("lastName", { required: true })} />
          {errors.lastName && <InputHint>This field is required</InputHint>}
        </Spacer>
        <Spacer>
          <Button type="submit">
            Click me <Jellyfish />
          </Button>
        </Spacer>
      </form>
    </>
  );
}
