import Abstract from "../../components/Abstraction";
import WorkCard from "../../components/WorkCard";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constrains/routes";

export default function Work() {
  return (
    <div className="container">
      <Abstract
        name="mahmoud"
        bio="I'm designing user interfaces and produce prototypes to make design solution based on business and user goals ."
      />
      <div className="row mt-3 mx-5">
        <div className="col-6 p-0 px-2 py-2">
          <Link to={ROUTES.CASE_1}>
            <WorkCard img="/assets/img.jpg" alt="" title="sakneen" />
          </Link>
        </div>
        <div className="col-6 p-0 px-2 py-2">
          <WorkCard img="/assets/img2.jpg" alt="" title="title" />
        </div>
        <div className="col-6 p-0 px-2 py-2">
          <WorkCard img="/assets/img2.jpg" alt="" title="title" />
        </div>
      </div>
    </div>
  );
}
