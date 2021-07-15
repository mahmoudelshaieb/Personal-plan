import Cover from "../../components/Cover";
import Status from "../../components/Status";
// import SineWave from "../../components/SineWave";
import FullPresent from "../../components/FullPresent";
import NestedFullPresent from "../../components/NestedFullPresent";
import BackButton from "../../components/BackBtn";
import * as ROUTES from "../../constrains/routes";
import { Fade } from "react-reveal";
import {
  courseAppCover,
  courseAppProjectStatus,
  CourseAppFlow,
  CourseAppFraming,
  CourseAppVisual,
  CourseAppPrototype,
  CourseAppGuide,
} from "../../constrains/data";

export default function CouserApp() {
  const { coverTitle, subTitle, strong, bio, coverImg } = courseAppCover;
  const { flowTitle, flowDesc, flowImg } = CourseAppFlow;
  const { frameTitle, frameDesc, frameImg } = CourseAppFraming;
  const { visualTitle, visualDesc, visualImg } = CourseAppVisual;
  const { prototypeTitle, prototypeDesc, prototypeImg } = CourseAppPrototype;

  return (
    <Fade bottom duration={500} distance="100px">
      <div className="container">
        <div className="mx-2 mx-md-5 mt-3 mt-lg-5">
          <BackButton url={ROUTES.WORK} />
          <Cover
            title={coverTitle}
            subTitle={subTitle}
            strong={strong}
            bio={bio}
            coverImg={coverImg}
          />
          <div className="row justify-content-center mt-3 mt-md-5">
            {courseAppProjectStatus.map((item, index) => (
              <div key={index} className="col-sm-12 col-lg-3">
                <Status title={item.title} collection={item.collection} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <FullPresent title={flowTitle} desc={flowDesc} img={flowImg} />
      <FullPresent
        title={frameTitle}
        desc={frameDesc}
        img={frameImg}
        background="#f4f4f4"
      />
      <FullPresent title={visualTitle} desc={visualDesc} img={visualImg} />
      <FullPresent
        title={prototypeTitle}
        desc={prototypeDesc}
        img={prototypeImg}
        background="#f4f4f4"
      />
      <NestedFullPresent title="styles & guides" guides={CourseAppGuide} />
    </Fade>
  );
}
