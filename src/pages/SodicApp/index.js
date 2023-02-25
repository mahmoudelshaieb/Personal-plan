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
  sodicLearning
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
        <FullPresent
          projectName={projectName}
          title={title}
          desc={desc}
          padding={"24px 0"}
        />
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
        <FullPresent title={probTitle} desc={probDesc} padding={"24px 0"} />
        <FullPresent
          title={solTitle}
          desc={solDesc}
          img={solImages}
          padding={"0"}
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
        <NestedFullPresent
          title="design iterations"
          guides={sodicIteration}
          padding={"24px 0"}
        />
        <NestedFullPresent
          title="styles & guides"
          guides={sodicGuide}
          padding={"24px 0"}
        />
        <FullPresent
          title={sodicDesignsTitle}
          img={sodicDesignsImg}
          padding={"24px 0"}
        />
        <FullPresent title={successTitle} desc={successDesc} padding={"24px 0"} />
        <FullPresent title={learnTitle} lists={learnList} padding={"24px 0"} />
      </div>
    </>
  );
}
