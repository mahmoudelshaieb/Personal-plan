import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "../../constrains/routes";
import Nav from "../../components/Nav";
import Work from "../Work";
import SakneenCase from "../SakneenCase";

export default function App() {
  return (
    <Router>
      <Nav fname="mahmoud" lname=" hassan" profession="product designer" />
      <Switch>
        <Route exact path={ROUTES.WORK} component={Work} />
        <Route path={ROUTES.CASE_1} component={SakneenCase} />
      </Switch>
    </Router>
  );
}
