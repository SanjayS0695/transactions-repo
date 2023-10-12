import { takeLatest, put, call } from "redux-saga/effects";
import {
  getTransactions,
  getTransactionsSuccess,
  getTransactionsFailure,
  getInstallments,
  getInstallmentsSuccess,
  getInstallmentsFailure,
} from "./store";

import { getInstallmentsApi, getTransactionsApi } from "../../utils/api";
import { GET_INSTALLMENTS, GET_TRANSACTIONS } from "./actionType";

function* onGetTransactions(payload) {
  try {
    yield put(getTransactions());
    const response = yield getTransactionsApi(payload?.payload);
    yield put(getTransactionsSuccess(response?.data));
  } catch (error) {
    yield put(getTransactionsFailure(error.response));
  }
}

function* onGetInstallments(payload) {
  try {
    yield put(getInstallments());
    const response = yield getInstallmentsApi(payload?.payload?.parentId);
    yield put(getInstallmentsSuccess(response?.data));
  } catch (error) {
    yield put(getInstallmentsFailure(error.response));
  }
}

export default function* rootSaga() {
  yield takeLatest(GET_TRANSACTIONS, onGetTransactions);
  yield takeLatest(GET_INSTALLMENTS, onGetInstallments);
}
