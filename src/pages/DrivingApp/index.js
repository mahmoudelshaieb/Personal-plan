import Cover from "../../components/Cover";
import Status from "../../components/Status";
import ClassicScroll from "../../components/ClassicScroll";
import FullPresent from "../../components/FullPresent";
// import BackButton from "../../components/BackBtn";
// import * as ROUTES from "../../constrains/routes";
import {
  drivingCover,
  drivingOverview,
  drivingAppProjectStatus,
  drivingScroll,
} from "../../constrains/data";

export default function DrivingApp() {
  const { coverImg } = drivingCover;
  const { projectName, title, desc } = drivingOverview;

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
          {/* <BackButton url={ROUTES.WORK} /> */}
        <div className="container">
          <div className="row justify-content-between mt-3 mt-md-5">
            {drivingAppProjectStatus.map((item, index) => (
              <div key={index} className="col-sm-12 col-lg-3 pe-0">
                <Status title={item.title} collection={item.collection} />
              </div>
            ))}
          </div>
          {drivingScroll.map((item, index) => (
            <ClassicScroll key={index} images={item} background={true} />
          ))}
        </div>
      </div>
    </>
  );
}
