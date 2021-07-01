import Abstract from "../../components/Abstraction";
import WorkCard from "../../components/WorkCard";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constrains/routes";

export default function Work() {
  return (
    <div className="container">
      <Abstract
        name="mahmoud"
        bio="I'm digital product designer, make user interface designs for web and mobile applications based on user experience and business goals ."
      />
      <div className="mt-3 mx-2 mx-md-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 p-0 px-2 py-2">
            <Link to={ROUTES.CASE_1}>
              <WorkCard img="/assets/img.jpg" alt="" title="Sakneen" />
            </Link>
          </div>
          <div className="col-sm-12 col-md-6 p-0 px-2 py-2">
            <WorkCard img="/assets/img2.jpg" alt="" title="title" />
          </div>
          <div className="col-sm-12 col-md-6 p-0 px-2 py-2">
            <WorkCard img="/assets/img2.jpg" alt="" title="title" />
          </div>
        </div>
      </div>
    </div>
  );
}
