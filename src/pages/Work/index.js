import Abstract from "../../components/Abstraction";
import WorkCard from "../../components/WorkCard";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import { caseLinks } from "../../constrains/data";

export default function Work() {
  return (
    <Fade bottom duration={500} distance="100px">
      <div className="container">
        <Abstract
          name="mahmoud"
          bio="I'm digital product designer, user interface creator for web and mobile applications based on user experience and business goals ."
        />
        <div className="mt-3 mx-2 mx-md-5">
          <div className="row">
            {caseLinks.map((item, index) => (
              <div key={index} className="col-sm-12 col-md-6 p-0 px-2 py-2">
                <Link to={item.url}>
                  <WorkCard img={item.coverImg} alt="" title={item.title} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
