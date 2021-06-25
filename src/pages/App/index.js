import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "../../constrains/routes";
import Nav from "../../components/Nav";
import Work from "../Work";

export default function App() {
  return (
    <Router>
      <Nav fname="mahmoud" lname=" hassan" profession="product designer" />
      <Work />
      {/* <Switch>
        <Route exact path={ROUTES.LANDING} component={Home} />
        <Route path={ROUTES.CASESTUDIES} component={CaseStudies} />
        <Route
          path={`${ROUTES.PRESENTATION}/:case_id`}
          component={Presentation}
        />
      </Switch> */}
    </Router>
  );
}
