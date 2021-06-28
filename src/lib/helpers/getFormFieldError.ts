import { FormikErrors, FormikTouched, getIn } from 'formik';

export function getFormFieldError<Values>(
  name: string,
  errors: FormikErrors<Values>,
  touched: FormikTouched<Values>
): string | null {
  const error = getIn(errors, name);
  const touch = getIn(touched, name);

  return touch && error ? error : null;
}
