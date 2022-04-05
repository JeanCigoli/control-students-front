import { formateSnakeCaseKeysForCamelCase } from '@badass-team-code/formatted-cases-words';
import { requestError } from '../../../utils/error';
import { Dispatch } from '../../../domain/redux/action';
import {
  FETCH_CLASSES_TYPE,
  LIST_ALL_CLASSES_TYPE,
} from '../../../infra/redux/classes-type/constants';
import { classes } from '../../../infra/http/web-service';

export const listAllClassesType = () => async (dispatch: Dispatch) => {
  dispatch({ type: FETCH_CLASSES_TYPE, payload: 'INIT_LOAD' });
  try {
    const { data } = await classes.listType();

    dispatch({
      type: LIST_ALL_CLASSES_TYPE,
      payload: formateSnakeCaseKeysForCamelCase(data.payload),
    });
  } catch (error: any) {
    requestError(error);
  } finally {
    dispatch({ type: FETCH_CLASSES_TYPE, payload: 'FINISH_LOAD' });
  }
};
