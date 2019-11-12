import React from "react";
import { Route } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./routes/PrivateRoute";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/bubblepage" component={BubblePage} />
    </div>
  );
}

export default App;
