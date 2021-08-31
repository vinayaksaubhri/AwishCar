import BookNow from "./BookNow";
import LandingPage from "./landingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToOnMount from "./components/ScrollToOnMount";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/BookNow">
          <BookNow />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
