import Cover from "../../components/Cover";
import Status from "../../components/Status";
import FullPresent from "../../components/FullPresent";
import NestedFullPresent from "../../components/NestedFullPresent";
// import BackButton from "../../components/BackBtn";
// import * as ROUTES from "../../constrains/routes";
import {
  sodicCover,
  sodicOverview,
  sodicProjectStatus,
  sodicProblem,
  sodicSolution,
  sodicUserResearch,
  sodicPersona,
  sodicGuide,
  sodicIteration,
  sodicDesigns,
  sodicSuccess,
  sodicLearning,
} from "../../constrains/data";

export default function SodicCase() {
  const { coverImg } = sodicCover;
  const { projectName, title, desc } = sodicOverview;
  const { probTitle, probDesc } = sodicProblem;
  const { solTitle, solDesc, solImages } = sodicSolution;
  const { sodicResearhTitle, sodicResearhDesc, sodicResearhImg } =
    sodicUserResearch;
  const { sodicPersonaTitle, sodicPersonaImg } = sodicPersona;
  const { sodicDesignsTitle, sodicDesignsImg } = sodicDesigns;
  const { successTitle, successDesc } = sodicSuccess;
  const { learnTitle, learnList } = sodicLearning;

  return (
    <>
      <Cover coverImg={coverImg} />
      <div className="compact-page">
        <FullPresent projectName={projectName} title={title} desc={desc} />
        <div className="container">
          {/* <BackButton url={ROUTES.WORK} /> */}
          <div className="row justify-content-between mt-3 mt-md-5">
            {sodicProjectStatus.map((item, index) => (
              <div key={index} className="col-sm-12 col-lg-3 pe-0">
                <Status title={item.title} collection={item.collection} />
              </div>
            ))}
          </div>
        </div>
        <FullPresent title={probTitle} desc={probDesc} />
        <FullPresent title={solTitle} desc={solDesc} img={solImages} />
        <FullPresent
          title={sodicResearhTitle}
          desc={sodicResearhDesc}
          img={sodicResearhImg}
        />
        <FullPresent title={sodicPersonaTitle} img={sodicPersonaImg} />
        <NestedFullPresent title="design iterations" guides={sodicIteration} />
        <NestedFullPresent title="styles & guides" guides={sodicGuide} />
        <FullPresent title={sodicDesignsTitle} img={sodicDesignsImg} />
        <FullPresent title={successTitle} desc={successDesc} />
        <FullPresent title={learnTitle} lists={learnList} />
      </div>
    </>
  );
}
