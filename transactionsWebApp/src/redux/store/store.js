import {
  configureStore,
  createSlice,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";

const slice = createSlice({
  name: "datas",
  initialState: {
    transactions: {
      data: [],
      totalPages: null,
    },
    installments: [],
    loadingData: false,
    error: {
      message: "",
    },
  },
  reducers: {
    getTransactions: (state, action) => {
      return {
        ...state,
        loadingData: true,
      };
    },
    getTransactionsSuccess: (state, action) => {
      return {
        ...state,
        transactions: {
          data: action?.payload?.content,
          totalPages: action?.payload?.totalPages,
        },
        loadingData: false,
      };
    },
    getTransactionsFailure: (state, action) => {
      return {
        ...state,
        transactions: [],
        error: {
          message: action?.payload,
        },
        loadingData: false,
      };
    },
    getInstallments: (state, action) => {
      return {
        ...state,
        loadingData: true,
      };
    },
    getInstallmentsSuccess: (state, action) => {
      return {
        ...state,
        installments: action?.payload,
        loadingData: false,
      };
    },
    getInstallmentsFailure: (state, action) => {
      return {
        ...state,
        installments: [],
        error: {
          message: action?.payload,
        },
        loadingData: false,
      };
    },
  },
});

export const {
  getTransactions,
  getTransactionsSuccess,
  getTransactionsFailure,
  getInstallments,
  getInstallmentsSuccess,
  getInstallmentsFailure,
} = slice.actions;

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    dataState: slice.reducer,
  },
  middleware,
});

sagaMiddleware.run(saga);

export default store;
