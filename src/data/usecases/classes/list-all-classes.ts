import { formateSnakeCaseKeysForCamelCase } from '@badass-team-code/formatted-cases-words';
import { requestError } from '../../../utils/error';
import { AppDispatch } from '../../../domain/redux/action';
import {
  LIST_ALL_CLASSES,
  FETCH_CLASSES,
} from '../../../infra/redux/classes/constants';
import { classes } from '../../../infra/http/web-service';

export const listClasses = () => async (dispatch: AppDispatch) => {
  dispatch({ type: FETCH_CLASSES });
  try {
    const { data } = await classes.listAll();

    dispatch({
      type: LIST_ALL_CLASSES,
      payload: formateSnakeCaseKeysForCamelCase(data.payload),
    });
  } catch (error: any) {
    requestError(error);
  } finally {
    dispatch({ type: FETCH_CLASSES });
  }
};
