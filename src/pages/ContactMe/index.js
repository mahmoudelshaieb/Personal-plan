import Contact from "../../components/Contact";
import { Fade } from "react-reveal";
import { contactInfo } from "../../constrains/data";

export default function ContactMe() {
  return (
    <Fade bottom duration={500} distance="100px">
      <div className="mt-5 mx-2 mx-md-5">
        <Contact contactImg="" contactInfo={contactInfo} />
      </div>
    </Fade>
  );
}
