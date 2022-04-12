import { formateSnakeCaseKeysForCamelCase } from '@badass-team-code/formatted-cases-words';
import { toast } from 'react-toastify';
import { Dispatch } from '../../../domain/redux/action';
import { classes } from '../../../infra/http/web-service';
import {
  DELETE_CLASSES,
  FETCH_CLASSES,
} from '../../../infra/redux/classes/constants';
import { requestError } from '../../../utils/error';

export const deleteClasses = (id: string) => async (dispatch: Dispatch) => {
  dispatch({ type: FETCH_CLASSES, payload: 'INIT_LOAD' });
  try {
    const { data } = await classes.delete(id);
    const { data: dataUser } = await classes.listAll();

    dispatch({
      type: DELETE_CLASSES,
      payload: formateSnakeCaseKeysForCamelCase(dataUser.payload),
    });

    toast.success(data.message);
  } catch (error: any) {
    requestError(error);
  } finally {
    dispatch({ type: FETCH_CLASSES, payload: 'FINISH_LOAD' });
  }
};
