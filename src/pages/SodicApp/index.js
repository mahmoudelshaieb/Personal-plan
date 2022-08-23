import Cover from "../../components/Cover";
import Status from "../../components/Status";
// import SineWave from "../../components/SineWave";
import FullPresent from "../../components/FullPresent";
import NestedFullPresent from "../../components/NestedFullPresent";
// import BackButton from "../../components/BackBtn";
// import * as ROUTES from "../../constrains/routes";
import { Fade } from "react-reveal";
import {
  sodicCover,
  sodicProjectStatus,
  sodicProblem,
  sodicSolution,
  sodicUserResearch,
  sodicPersona,
  sodicGuide,
  sodicIteration,
  sodicDesigns
} from "../../constrains/data";

export default function SodicCase() {
  const { coverTitle, strong, bio, coverImg } = sodicCover;
  const { probTitle, probDesc } = sodicProblem;
  const { solTitle, solDesc } = sodicSolution;
  const { sodicResearhTitle, sodicResearhDesc, sodicResearhImg } = sodicUserResearch;
  const { sodicPersonaTitle, sodicPersonaImg } = sodicPersona;
  const { sodicDesignsTitle, sodicDesignsImg } = sodicDesigns;

  return (
    <Fade bottom duration={500} distance="100px">
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
            {sodicProjectStatus.map((item, index) => (
              <div key={index} className="col-sm-12 col-lg-3">
                <Status title={item.title} collection={item.collection} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <FullPresent
        title={probTitle}
        desc={probDesc}
        padding={"24px 0"}
      />
      <FullPresent
        title={solTitle}
        desc={solDesc}
        padding={"24px 0"}
      />
      <FullPresent
        title={sodicResearhTitle}
        desc={sodicResearhDesc}
        img={sodicResearhImg}
        padding={"24px 0"}
      />
      <FullPresent
        title={sodicPersonaTitle}
        img={sodicPersonaImg}
        padding={"24px 0"}
      />
      <NestedFullPresent title="design iterations" guides={sodicIteration} padding={"24px 0"} />
      <NestedFullPresent title="styles & guides" guides={sodicGuide} padding={"24px 0"} />
      <FullPresent
        title={sodicDesignsTitle}
        img={sodicDesignsImg}
        padding={"24px 0"}
      />
    </Fade>
  );
}
