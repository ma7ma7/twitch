import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const PageOne = () => {
  return <h1>This is page one</h1>;
};

const PageTwo = () => {
  return <h1>This is page Two</h1>;
};

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={PageOne} />
        <Route path="/pageTwo" component={PageTwo} />
      </div>
    </Router>
  );
};

export default App;
