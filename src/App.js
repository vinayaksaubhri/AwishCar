import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
const LazyBookNow = lazy(() => import("./Pages/BookNow"));

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
