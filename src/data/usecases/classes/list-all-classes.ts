import { formateSnakeCaseKeysForCamelCase } from '@badass-team-code/formatted-cases-words';
import { requestError } from '../../../utils/error';
import { Dispatch } from '../../../domain/redux/action';
import {
  LIST_ALL_CLASSES,
  FETCH_CLASSES,
} from '../../../infra/redux/classes/constants';
import { classes } from '../../../infra/http/web-service';

export const listClasses = () => async (dispatch: Dispatch) => {
  dispatch({ type: FETCH_CLASSES, payload: 'INIT_LOAD' });
  try {
    const { data } = await classes.listAll();

    dispatch({
      type: LIST_ALL_CLASSES,
      payload: formateSnakeCaseKeysForCamelCase(data.payload),
    });
  } catch (error: any) {
    requestError(error);
  } finally {
    dispatch({ type: FETCH_CLASSES, payload: 'FINISH_LOAD' });
  }
};
