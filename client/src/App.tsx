import React from "react";
import { Switch, Route } from "react-router-dom";

/* pages */
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import PortableGames from "./pages/PortableGames";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/main" render={() => <Main></Main>}></Route>
        <Route exact path="/signup" render={() => <SignUp></SignUp>}></Route>
        <Route
          exact
          path="/portablegames"
          render={() => <PortableGames></PortableGames>}
        ></Route>
        <Route path="/" render={() => <Main></Main>}></Route>
      </Switch>
    </div>
  );
}

export default App;
