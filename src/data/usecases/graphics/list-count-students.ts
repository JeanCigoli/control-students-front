import { formateSnakeCaseKeysForCamelCase } from '@badass-team-code/formatted-cases-words';
import { requestError } from '../../../utils/error';
import { Dispatch } from '../../../domain/redux/action';
import {
  LIST_GRAPHICS_SCHOOL,
  FETCH_GRAPHICS,
} from '../../../infra/redux/graphics/constants';
import { graphics } from '../../../infra/http/web-service';

export const listCountStudents = () => async (dispatch: Dispatch) => {
  dispatch({ type: FETCH_GRAPHICS, payload: 'INIT_LOAD' });
  try {
    const { data } = await graphics.listStudent();

    dispatch({
      type: LIST_GRAPHICS_SCHOOL,
      payload: formateSnakeCaseKeysForCamelCase(data.payload),
    });
  } catch (error: any) {
    requestError(error);
  } finally {
    dispatch({ type: FETCH_GRAPHICS, payload: 'FINISH_LOAD' });
  }
};
