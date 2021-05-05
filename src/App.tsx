/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import PageNotFound from "./containers/PageNotFound";
import { routesHome } from "./routers";
import { HomeTemplates } from "./templates/HomeTemplates";

const showHomeLayout = (routes: any[]) => {
  if (routes && routes.length > 0) {
    return routes.map((route, index) => {
      // console.log(routes);
      return (
        <HomeTemplates
          key={index}
          exact={route.exact}
          path={route.path}
          Component={route.component}
        />
      );
    });
  }
};
const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {showHomeLayout(routesHome)}
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
