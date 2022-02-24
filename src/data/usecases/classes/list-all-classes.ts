import { requestError } from '../../../utils/error';
import { AppDispatch } from '../../../domain/redux/action';
import {
  LIST_ALL_CLIENTS,
  FETCH_CLIENTS,
} from '../../../infra/redux/classes/constants';
import { classes } from '../../../infra/http/web-service';

export const listClasses = () => async (dispatch: AppDispatch) => {
  dispatch({ type: FETCH_CLIENTS });
  try {
    const { data } = await classes.listAll();

    dispatch({
      type: LIST_ALL_CLIENTS,
      payload: data.payload,
    });
  } catch (error: any) {
    requestError(error);
  } finally {
    dispatch({ type: FETCH_CLIENTS });
  }
};
