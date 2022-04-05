import { formateSnakeCaseKeysForCamelCase } from '@badass-team-code/formatted-cases-words';
import { toast } from 'react-toastify';
import { requestError } from '../../../utils/error';
import { Dispatch } from '../../../domain/redux/action';
import {
  CREATE_CLASSES,
  FETCH_CLASSES,
} from '../../../infra/redux/classes/constants';
import { classes } from '../../../infra/http/web-service';
import { CreateClassesForm } from '../../../domain/forms';

export const createClasses =
  (params: CreateClassesForm, history: any) => async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_CLASSES, payload: 'INIT_LOAD' });
    try {
      const { data } = await classes.create(params);

      dispatch({
        type: CREATE_CLASSES,
        payload: formateSnakeCaseKeysForCamelCase(data.payload),
      });

      toast.success(data.message);
      history.push('/turmas');
    } catch (error: any) {
      requestError(error);
    } finally {
      dispatch({ type: FETCH_CLASSES, payload: 'FINISH_LOAD' });
    }
  };
