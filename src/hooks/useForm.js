import { useState } from "react";

export const useForm = (intialForm = {}) => {
  const [formState, setFormState] = useState(intialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(intialForm);
  };

  const isValidForm = () => {
    const { name, email, password } = formState;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return name != "" && email != "" && password != "" && regex.test(email);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    isValidForm,
  };
};
