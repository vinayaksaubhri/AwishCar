import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
const LazyBookNow = lazy(() => import("./BookNow"));

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/BookNow">
          <Suspense fallback="...Loading">
            <LazyBookNow />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
