import React from "react";
import Users from "./pages/Users";
import "./App.css";
import Details from "./pages/Details";
import Posts from "./pages/Posts";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Users} />
        <Route
          exact
          path="/Posts/:id"
          component={props => <Posts {...props} />}
        />
        <Route
          exact
          path="/Details/:id"
          component={props => <Details {...props} />}
        />
      </Switch>
    </>
  );
}

function AppWithStore() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppWithStore;
