import { toast } from 'react-toastify';
import { formateSnakeCaseKeysForCamelCase } from '@badass-team-code/formatted-cases-words';
import { requestError } from '../../../utils/error';
import { Dispatch } from '../../../domain/redux/action';
import {
  AUTHENTICATION,
  FETCH_AUTH,
} from '../../../infra/redux/authentication/constants';
import { auth } from '../../../infra/http/web-service';
import { SESSION_AUTH, TOKEN } from '../../../main/config/constants';
import { SessionStorage } from '../../../utils/storage/session';
import { LoginType } from '../../../domain/forms/login-form';

export const authentication =
  (params: LoginType, history: any) => async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_AUTH, payload: 'INIT_LOAD' });
    try {
      const { data } = await auth.authentication(params);

      const authParams = formateSnakeCaseKeysForCamelCase(data.payload);

      SessionStorage.setItem(TOKEN, authParams.accessToken);
      SessionStorage.setItem(SESSION_AUTH, authParams.employee);

      dispatch({ type: AUTHENTICATION, payload: authParams.employee });

      toast.success(data.message);
      history.push('/home');
    } catch (error: any) {
      requestError(error);
    } finally {
      dispatch({ type: FETCH_AUTH, payload: 'FINISH_LOAD' });
    }
  };
