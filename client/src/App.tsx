import React from "react";
import { Switch, Route } from "react-router-dom";

/* pages */
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import LeuniCaffee from "./pages/LeuniCaffee";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/main" render={() => <Main></Main>}></Route>
        <Route path="/signup" render={() => <Signup></Signup>}></Route>
        <Route path="/signin" render={() => <Signin></Signin>}></Route>
        <Route
          path="/leunicaffee"
          render={() => <LeuniCaffee></LeuniCaffee>}
        ></Route>
        <Route path="/" render={() => <Main></Main>}></Route>
      </Switch>
    </div>
  );
}
