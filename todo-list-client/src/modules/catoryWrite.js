import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as categoryAPI from '../lib/api/category';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'categoryWrite/INITIALIZE';
const CHANGE_FIELD = 'categoryWrite/CHANGE_FIELD';

const [
  CATEGORY_WRITE,
  CATEGORY_WRITE_SUCCESS,
  CATEGORY_WRITE_FAILURE,
] = createRequestActionTypes('categoryWrite/CATEGORY_WRITE');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const categoryWritePost = createAction(
  CATEGORY_WRITE,
  ({ title, color }) => ({
    title,
    color,
  }),
);

const categoryWritePostSaga = createRequestSaga(
  CATEGORY_WRITE,
  categoryAPI.categoryWrite,
);

export function* categoryWriteSaga() {
  yield takeLatest(CATEGORY_WRITE, categoryWritePostSaga);
}

const initialState = {
  title: '',
  color: '',
  category: '',
  categoryError: '',
};

const categoryWrite = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [CATEGORY_WRITE]: (state) => ({
      ...state,
      category: null,
      categoryError: null,
    }),
    [CATEGORY_WRITE_SUCCESS]: (state, { payload: category }) => ({
      ...state,
      category,
    }),
    [CATEGORY_WRITE_FAILURE]: (state, { payload: categoryError }) => ({
      ...state,
      categoryError,
    }),
  },
  initialState,
);

export default categoryWrite;
