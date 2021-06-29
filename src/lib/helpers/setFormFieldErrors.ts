import { AxiosError } from 'axios';

export function setFormFieldErrors(
  error: AxiosError,
  setFieldError: (field: string, message: string) => void
) {
  const errors = error?.response?.data;

  if (!errors) {
    return;
  }

  Object.keys(errors).forEach((field) => {
    const [fieldError] = errors[field] as string[];

    const message = fieldError.replace(field, '').trim();

    setFieldError(field, message.charAt(0).toUpperCase() + message.slice(1));
  });
}
