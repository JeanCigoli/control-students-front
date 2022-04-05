import { formateSnakeCaseKeysForCamelCase } from '@badass-team-code/formatted-cases-words';
import { requestError } from '../../../utils/error';
import { Dispatch } from '../../../domain/redux/action';
import {
  FETCH_PERIODS,
  LIST_ALL_PERIODS,
} from '../../../infra/redux/period/constants';
import { period } from '../../../infra/http/web-service';

export const listAllPeriods = () => async (dispatch: Dispatch) => {
  dispatch({ type: FETCH_PERIODS, payload: 'INIT_LOAD' });
  try {
    const { data } = await period.listAll();

    dispatch({
      type: LIST_ALL_PERIODS,
      payload: formateSnakeCaseKeysForCamelCase(data.payload),
    });
  } catch (error: any) {
    requestError(error);
  } finally {
    dispatch({ type: FETCH_PERIODS, payload: 'FINISH_LOAD' });
  }
};
