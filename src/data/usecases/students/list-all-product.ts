import { formateSnakeCaseKeysForCamelCase } from '@badass-team-code/formatted-cases-words';
import { requestError } from '../../../utils/error';
import { AppDispatch } from '../../../domain/redux/action';
import {
  LIST_ALL_STUDENTS,
  FETCH_STUDENTS,
} from '../../../infra/redux/students/constants';
import { students } from '../../../infra/http/web-service';

export const listStudents = () => async (dispatch: AppDispatch) => {
  dispatch({ type: FETCH_STUDENTS });
  try {
    const { data } = await students.listAll();

    dispatch({
      type: LIST_ALL_STUDENTS,
      payload: formateSnakeCaseKeysForCamelCase(data.payload),
    });
  } catch (error: any) {
    requestError(error);
  } finally {
    dispatch({ type: FETCH_STUDENTS });
  }
};
