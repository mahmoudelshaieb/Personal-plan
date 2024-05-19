import Abstract from "../../components/Abstraction";
import WorkCard from "../../components/WorkCard";
import { Link } from "react-router-dom";
import { caseLinks } from "../../constrains/data";
import { welcometxt } from "../../constrains/data";

export default function Work() {
  const {name, bio} = welcometxt; 
  return (
    <div className="container">
      <Abstract
        name={name}
        bio={bio}
      />
      <div className="mt-3">
        <div className="row">
          {caseLinks.map((item, index) => (
            <div key={index} className="col-sm-12 col-md-6 p-0 px-2 py-2">
              <Link to={item.url} className="text-decoration-none">
                <WorkCard
                  img={item.coverImg}
                  title={item.title}
                  workFlow={item.workFlow}
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
