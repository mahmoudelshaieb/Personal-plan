import Cover from "../../components/Cover";
import Status from "../../components/Status";
import FullPresent from "../../components/FullPresent";
// import BackButton from "../../components/BackBtn";
// import * as ROUTES from "../../constrains/routes";
import {
  drivingCover,
  drivingOverview,
  drivingAppProjectStatus,
  drivingDesigns,
  drivingProblem,
  drivingSolution,
  drivingResearch,
  drivingAnalysis,
  drivingPersona,
  drivingFlow,
  drivingTesting,
  drivingLearning,
} from "../../constrains/data";

export default function DrivingApp() {
  const { coverImg } = drivingCover;
  const { projectName, title, desc } = drivingOverview;
  const { probTitle, probDesc } = drivingProblem;
  const { solTitle, solSubTitle, solDesc1, solDesc2, solImages } =
    drivingSolution;
  const { researchTitle, researchDesc1, researchDesc2, researchLists } =
    drivingResearch;
  const { analysisTitle, analysisDesc, analysisLists } = drivingAnalysis;
  const { personaTitle, personaImages } = drivingPersona;
  const { flowTitle, flowImages } = drivingFlow;
  const { designsTitle, designsImg } = drivingDesigns;
  const { testTitle, testDesc, testImages } = drivingTesting;
  const { learnTitle, learnList } = drivingLearning;

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
        </div>
        <FullPresent title={probTitle} desc={probDesc} padding={"24px 0"} />
        <FullPresent
          title={solTitle}
          subTitle={solSubTitle}
          desc={solDesc1}
          descSecondry={solDesc2}
          img={solImages}
          padding={"0"}
        />
        <FullPresent
          title={researchTitle}
          desc={researchDesc1}
          descSecondry={researchDesc2}
          lists={researchLists}
          padding={"24px 0"}
        />
        <FullPresent
          title={analysisTitle}
          desc={analysisDesc}
          lists={analysisLists}
          padding={"24px 0"}
        />
        <FullPresent
          title={personaTitle}
          img={personaImages}
          padding={"24px 0"}
        />
        <FullPresent title={flowTitle} img={flowImages} padding={"24px 0"} />
        <FullPresent
          title={testTitle}
          desc={testDesc}
          img={testImages}
          padding={"24px 0"}
        />
        <FullPresent title={designsTitle} img={designsImg} padding={"24px 0"} />
        <FullPresent title={learnTitle} lists={learnList} padding={"24px 0"} />
      </div>
    </>
  );
}
