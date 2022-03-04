import React from "react";
import { Provider } from "react-redux";
import { addExpense } from "./actions/expenses";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default jsx;
