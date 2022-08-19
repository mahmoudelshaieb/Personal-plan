import Cover from "../../components/Cover";
import Status from "../../components/Status";
import SineWave from "../../components/SineWave";
import FullPresent from "../../components/FullPresent";
// import BackButton from "../../components/BackBtn";
// import * as ROUTES from "../../constrains/routes";
import { Fade } from "react-reveal";
import {
  brokerCover,
  brokerProjectStatus,
  brokerProblem,
  brokerSolOne,
  brokerSolTwo,
  brokerSolThree,
  brokerOnboardingFlow,
  brokerSearchFlow,
  brokerAccountFlow
} from "../../constrains/data";

export default function BrokerApp() {
  const { coverTitle, strong, bio, coverImg } = brokerCover;
  const { probDescPrimary, probDescsecondary, probImg } = brokerProblem;
  const { solOneDescPrimary, solOneDescsecondary, solOneImg } = brokerSolOne;
  const { solTwoDescPrimary, solTwoDescsecondary, solTwoImg } = brokerSolTwo;
  const { solThreeDescPrimary, solThreeDescsecondary, solThreeImg } =
    brokerSolThree;
  const { flow1Title, flow1Img } = brokerOnboardingFlow;
  const { flow2Title, flow2Img } = brokerSearchFlow;
  const { flow3Title, flow3Img } = brokerAccountFlow;

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
            {brokerProjectStatus.map((item, index) => (
              <div key={index} className="col-sm-12 col-lg-3">
                <Status title={item.title} collection={item.collection} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <SineWave
        title="problem"
        primaryDesc={probDescPrimary}
        secondaryDesc={probDescsecondary}
        img={probImg}
      />
      <SineWave
        title="search"
        primaryDesc={solOneDescPrimary}
        secondaryDesc={solOneDescsecondary}
        img={solOneImg}
        background="#f4f4f4"
        RTL={true}
        containImg={true}
      />
      <SineWave
        title="house card design"
        primaryDesc={solTwoDescPrimary}
        secondaryDesc={solTwoDescsecondary}
        img={solTwoImg}
        containImg={true}
      />
      <SineWave
        title="filters"
        primaryDesc={solThreeDescPrimary}
        secondaryDesc={solThreeDescsecondary}
        img={solThreeImg}
        background="#f4f4f4"
        RTL={true}
        containImg={true}
      />
      <FullPresent
        title={flow1Title}
        img={flow1Img}
      />
      <FullPresent
        title={flow2Title}
        img={flow2Img}
        background="#f4f4f4"
      />
      <FullPresent
        title={flow3Title}
        img={flow3Img}
      />
    </Fade>
  );
}
