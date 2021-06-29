import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "../../constrains/routes";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
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
      <Footer fname="mahmoud" lname="Hassan 2021" />
    </Router>
  );
}
