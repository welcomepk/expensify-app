import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import EditExpensePage from "../components/EditExpensePage";
import AddExpensePage from "../components/AddExpensePage";
import "../App.scss";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={ExpenseDashboardPage} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit/:id" component={EditExpensePage} />
          <Route path="/help" component={HelpPage} />
          <Route path="/*" component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
