import { formateSnakeCaseKeysForCamelCase } from '@badass-team-code/formatted-cases-words';
import { toast } from 'react-toastify';
import { UpdateUserForm } from '../../../domain/forms';
import { Dispatch } from '../../../domain/redux/action';
import { students } from '../../../infra/http/web-service';
import {
  FETCH_STUDENTS,
  UPDATE_STUDENTS,
} from '../../../infra/redux/students/constants';
import { requestError } from '../../../utils/error';

export const updateStudents =
  (params: UpdateUserForm, history: any) => async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_STUDENTS, payload: 'INIT_LOAD' });
    try {
      const { id, ...props } = params;

      const { data } = await students.update(id, props);

      dispatch({
        type: UPDATE_STUDENTS,
        payload: formateSnakeCaseKeysForCamelCase(data.payload),
      });

      toast.success(data.message);
      history.push('/alunos');
    } catch (error: any) {
      requestError(error);
    } finally {
      dispatch({ type: FETCH_STUDENTS, payload: 'FINISH_LOAD' });
    }
  };
