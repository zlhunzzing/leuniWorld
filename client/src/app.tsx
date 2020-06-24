import React from "react";
import { Switch, Route } from "react-router-dom";

/* pages */
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import LeuniCaffee from "./pages/LeuniCaffee";
import Guestbook from "./pages/Guestbook";
import Freeboard from "./pages/Freeboard";
import Boardview from "./pages/Boardview";
import Boardwrite from "./pages/Boardwrite";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/main" render={() => <Main></Main>}></Route>
        <Route path="/signup" render={() => <Signup></Signup>}></Route>
        <Route path="/signin" render={() => <Signin></Signin>}></Route>
        <Route path="/guestbook" render={() => <Guestbook></Guestbook>}></Route>
        <Route path="/freeboard" render={() => <Freeboard></Freeboard>}></Route>
        <Route
          path="/boardview/:id"
          render={() => <Boardview></Boardview>}
        ></Route>
        <Route
          path="/boardwrite"
          render={() => <Boardwrite></Boardwrite>}
        ></Route>
        <Route
          path="/leunicaffee"
          render={() => <LeuniCaffee></LeuniCaffee>}
        ></Route>
        <Route path="/" render={() => <Main></Main>}></Route>
      </Switch>
    </div>
  );
}
