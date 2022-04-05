import { formateSnakeCaseKeysForCamelCase } from '@badass-team-code/formatted-cases-words';
import { toast } from 'react-toastify';
import {
  CreatePrimaryStudentsForm,
  CreateSecondaryStudentsForm,
} from '../../../domain/forms';
import { Dispatch } from '../../../domain/redux/action';
import { students } from '../../../infra/http/web-service';
import {
  CREATE_STUDENTS,
  FETCH_STUDENTS,
} from '../../../infra/redux/students/constants';
import { requestError } from '../../../utils/error';

type CreateUser = CreatePrimaryStudentsForm | CreateSecondaryStudentsForm;

export const createStudents =
  (params: CreateUser, history: any) => async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_STUDENTS, payload: 'INIT_LOAD' });
    try {
      const { data } = await students.create(params);

      dispatch({
        type: CREATE_STUDENTS,
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
