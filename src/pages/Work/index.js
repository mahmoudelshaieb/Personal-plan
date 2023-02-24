import Abstract from "../../components/Abstraction";
import WorkCard from "../../components/WorkCard";
import { Link } from "react-router-dom";
import { caseLinks } from "../../constrains/data";

export default function Work() {
  return (
    <div className="container">
      <Abstract
        name="mahmoud"
        bio="I am a digital product designer with over 3 years of experience. I have completed several projects such as an e-commerce web app, a real estate marketplace, as well as SaaS projects such as dashboards and landing pages."
      />
      <div className="mt-3">
        <div className="row">
          {caseLinks.map((item, index) => (
            <div key={index} className="col-sm-12 col-md-6 p-0 px-2 py-2">
              <Link to={item.url} className="text-decoration-none">
                <WorkCard
                  img={item.coverImg}
                  title={item.title}
                  desc={item.desc}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
