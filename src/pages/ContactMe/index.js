import Contact from "../../components/Contact";
import { contactInfo } from "../../constrains/data";

export default function ContactMe() {
  return (
    <div className="mt-5">
      <Contact contactImg="./assets/Messages.jpg" contactInfo={contactInfo} />
    </div>
  );
}
