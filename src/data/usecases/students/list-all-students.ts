import { formateSnakeCaseKeysForCamelCase } from '@badass-team-code/formatted-cases-words';
import { requestError } from '../../../utils/error';
import { Dispatch } from '../../../domain/redux/action';
import {
  LIST_ALL_STUDENTS,
  FETCH_STUDENTS,
} from '../../../infra/redux/students/constants';
import { students } from '../../../infra/http/web-service';

export const listStudents =
  (classesId?: string) => async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_STUDENTS, payload: 'INIT_LOAD' });
    try {
      const { data } = await students.listAll({ classesId: classesId || '' });

      dispatch({
        type: LIST_ALL_STUDENTS,
        payload: formateSnakeCaseKeysForCamelCase(data.payload),
      });
    } catch (error: any) {
      requestError(error);
    } finally {
      dispatch({ type: FETCH_STUDENTS, payload: 'FINISH_LOAD' });
    }
  };
