import { formateSnakeCaseKeysForCamelCase } from '@badass-team-code/formatted-cases-words';
import { toast } from 'react-toastify';
import { Dispatch } from '../../../domain/redux/action';
import { students } from '../../../infra/http/web-service';
import {
  DELETE_STUDENTS,
  FETCH_STUDENTS,
} from '../../../infra/redux/students/constants';
import { requestError } from '../../../utils/error';

export const deleteStudents = (id: string) => async (dispatch: Dispatch) => {
  dispatch({ type: FETCH_STUDENTS, payload: 'INIT_LOAD' });
  try {
    const { data } = await students.delete(id);
    const { data: dataUser } = await students.listAll();

    dispatch({
      type: DELETE_STUDENTS,
      payload: formateSnakeCaseKeysForCamelCase(dataUser.payload),
    });

    toast.success(data.message);
  } catch (error: any) {
    requestError(error);
  } finally {
    dispatch({ type: FETCH_STUDENTS, payload: 'FINISH_LOAD' });
  }
};
