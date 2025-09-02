import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "../../constrains/routes";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Work from "../Work";
import DrivingApp from "../DrivingApp";
import CoinApp from "../CoinApp";
import ManageCRM from "../ManageCRM";
import SalesTool from "../SalesTool";
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
      <Routes>
        <Route path={ROUTES.WORK} element={<Work />} />
        <Route path={ROUTES.ABOUT} element={<AboutMe/>} />
        <Route path={ROUTES.CONTACT} element={<ContactMe/>} />
        <Route path={ROUTES.CASE_3} element={<ManageCRM/>} />
        <Route path={ROUTES.CASE_6} element={<DrivingApp/>} />
        <Route path={ROUTES.CASE_7} element={<SalesTool/>} />
        {/* <Route path={ROUTES.CASE_2} element={<CoinApp/>} /> */}
      </Routes>
      <Footer fname="mahmoud" lname={`Hassan ${new Date().getFullYear()}`} />
    </Router>
  );
}
