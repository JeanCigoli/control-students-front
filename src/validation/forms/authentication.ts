import * as yup from 'yup';
import { email, password } from '..';

const authenticationSchema = yup.object().shape({
  email,
  password,
});

export { authenticationSchema };
