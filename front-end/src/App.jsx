import React, { useEffect } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import middleware from "./middleware";
import reducer from "./reducers";
import Routes from "./Routes";
import { loadUser } from "./actions/auth";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainNav from "./core/MainNav";
import Home from "./core/Home";

export const store = createStore(reducer, composeWithDevTools(middleware));

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainNav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route component={Routes} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
