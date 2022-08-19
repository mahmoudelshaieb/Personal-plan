import Cover from "../../components/Cover";
import Status from "../../components/Status";
import SineWave from "../../components/SineWave";
import FullPresent from "../../components/FullPresent";
import NestedFullPresent from "../../components/NestedFullPresent";
// import BackButton from "../../components/BackBtn";
// import * as ROUTES from "../../constrains/routes";
import { Fade } from "react-reveal";
import {
  sakCover,
  sakProjectStatus,
  sakProblem,
  sakSolOne,
  sakSolTwo,
  sakSolThree,
  sakAppGuide,
} from "../../constrains/data";

export default function SakneenCase() {
  const { coverTitle, strong, bio, coverImg } = sakCover;
  const { probDescPrimary, probDescsecondary, probImg } = sakProblem;
  const { solOneDescPrimary, solOneDescsecondary, solOneImg } = sakSolOne;
  const { solTwoDescPrimary, solTwoDescsecondary, solTwoImg } = sakSolTwo;
  const { solThreeDescPrimary, solThreeDescsecondary, solThreeImg } =
    sakSolThree;

  return (
    <Fade bottom duration={500} distance="100px">
      <Cover
        title={coverTitle}
        strong={strong}
        bio={bio}
        coverImg={coverImg}
      />
      <div className="container">
        <div className="mt-3">
          {/* <BackButton url={ROUTES.WORK} /> */}
          <div className="row justify-content-center mt-3 mt-md-5">
            {sakProjectStatus.map((item, index) => (
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
        title="search page"
        primaryDesc={solOneDescPrimary}
        secondaryDesc={solOneDescsecondary}
        img={solOneImg}
        background="#f4f4f4"
        RTL={true}
      />
      <SineWave
        title="filters"
        primaryDesc={solTwoDescPrimary}
        secondaryDesc={solTwoDescsecondary}
        img={solTwoImg}
      />
      <SineWave
        title="virtual tour"
        primaryDesc={solThreeDescPrimary}
        secondaryDesc={solThreeDescsecondary}
        img={solThreeImg}
        background="#f4f4f4"
        RTL={true}
      />
      <FullPresent
        title="prototyping"
        desc="making a lot of prototyping and this sample of it, financing flow recently added feature"
        img="./assets/sakneen/prototyping.webp"
      />
      {/* <FullPresent
        title="technical tools"
        img="./assets/sakneen/tech.webp"
        background="#f4f4f4"
      /> */}
      <NestedFullPresent title="styles & guides" guides={sakAppGuide} />
    </Fade>
  );
}
