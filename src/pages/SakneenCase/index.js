import Cover from "../../components/Cover";
import Status from "../../components/Status";
import ClassicScroll from "../../components/ClassicScroll";
import FullPresent from "../../components/FullPresent";
// import BackButton from "../../components/BackBtn";
// import * as ROUTES from "../../constrains/routes";
import {
  sakCover,
  sakOverview,
  sakProjectStatus,
  sakScroll,
} from "../../constrains/data";

export default function SakneenCase() {
  const { coverImg } = sakCover;
  const { projectName, title, desc } = sakOverview;

  return (
    <>
      <Cover coverImg={coverImg} />
      <div className="compact-page">
        <FullPresent
          projectName={projectName}
          title={title}
          desc={desc}
          padding={"24px 0"}
        />
        <div className="container">
          <div className="mt-3">
            {/* <BackButton url={ROUTES.WORK} /> */}
            <div className="row justify-content-between mt-3 mt-md-5">
              {sakProjectStatus.map((item, index) => (
                <div key={index} className="col-sm-12 col-lg-3 pe-0">
                  <Status title={item.title} collection={item.collection} />
                </div>
              ))}
            </div>
          </div>
          {sakScroll.map((item, index) => (
            <ClassicScroll key={index} images={item} background={true} />
          ))}
        </div>
      </div>
    </>
  );
}
