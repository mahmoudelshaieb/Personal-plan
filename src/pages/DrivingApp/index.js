import Cover from "../../components/Cover";
import Status from "../../components/Status";
import ClassicScroll from "../../components/ClassicScroll";
// import BackButton from "../../components/BackBtn";
// import * as ROUTES from "../../constrains/routes";
// import { Fade } from "react-reveal";
import {
  drivingCover,
  drivingAppProjectStatus,
  drivingScroll
} from "../../constrains/data";

export default function DrivingApp() {
  const { coverTitle, strong, bio, coverImg } = drivingCover;

  return (
    <>
      <Cover
        title={coverTitle}
        strong={strong}
        bio={bio}
        coverImg={coverImg}
      />
      <div className="container">
        <div className="mx-2 mx-md-5 mt-3">
          {/* <BackButton url={ROUTES.WORK} /> */}
          <div className="row justify-content-center mt-3 mt-md-5">
            {drivingAppProjectStatus.map((item, index) => (
              <div key={index} className="col-sm-12 col-lg-3">
                <Status title={item.title} collection={item.collection} />
              </div>
            ))}
          </div>
        </div>
        {drivingScroll.map((item, index) => (
          <ClassicScroll key={index} images={item} />
          
        ))}
      </div>
    </>
  );
}
