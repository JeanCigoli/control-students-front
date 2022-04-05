import { useHistory } from 'react-router-dom';
import { requestError } from '../../../utils/error';
import { Dispatch } from '../../../domain/redux/action';
import { LOGOUT } from '../../../infra/redux/authentication/constants';
import { TOKEN } from '../../../main/config/constants';
import { SessionStorage } from '../../../utils/storage/session';

export const logout = () => async (dispatch: Dispatch) => {
  try {
    const history = useHistory();

    SessionStorage.removeItem(TOKEN);
    dispatch({ type: LOGOUT });

    history.push('/');
  } catch (error: any) {
    requestError(error);
  }
};
