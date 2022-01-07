import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "../../constrains/routes";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Work from "../Work";
import SakneenCase from "../SakneenCase";
import CourseApp from "../CourseApp";
import AgencyPortfolio from "../AgencyPortfolio";
import BrokerApp from "../BrokerApp";
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
        <Route path={ROUTES.CASE_2} component={CourseApp} />
        <Route path={ROUTES.CASE_3} component={AgencyPortfolio} />
        <Route path={ROUTES.CASE_4} component={BrokerApp} />
      </Switch>
      <Footer fname="mahmoud" lname={`Hassan ${new Date().getFullYear()}`} />
    </Router>
  );
}
