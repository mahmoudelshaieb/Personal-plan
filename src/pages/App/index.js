import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "../../constrains/routes";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Work from "../Work";
import SakneenCase from "../SakneenCase";
import DrivingApp from "../DrivingApp";
import CoinApp from "../CoinApp";
// import BrokerApp from "../BrokerApp";
import SodicCase from "../SodicApp"
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import BackToTop from "../../components/BackToTop";
import ScrollToTop from "../../constrains/FixScrollToTop";

export default function App() {
  return (
    <Router>
      <Nav fname="mahmoud" lname=" hassan" profession="product designer" />
      <ScrollToTop />
      <BackToTop />
      <Switch>
        <Route exact path={ROUTES.WORK} component={Work} />
        <Route path={ROUTES.ABOUT} component={AboutMe} />
        <Route path={ROUTES.CONTACT} component={ContactMe} />
        <Route path={ROUTES.CASE_1} component={SakneenCase} />
        <Route path={ROUTES.CASE_5} component={SodicCase} />
        <Route path={ROUTES.CASE_6} component={DrivingApp} />
        <Route path={ROUTES.CASE_2} component={CoinApp} />
      </Switch>
      <Footer fname="mahmoud" lname={`Hassan ${new Date().getFullYear()}`} />
    </Router>
  );
}
