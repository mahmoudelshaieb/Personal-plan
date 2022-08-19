import Cover from "../../components/Cover";
import Status from "../../components/Status";
import SineWave from "../../components/SineWave";
import FullPresent from "../../components/FullPresent";
import NestedFullPresent from "../../components/NestedFullPresent";
// import BackButton from "../../components/BackBtn";
// import * as ROUTES from "../../constrains/routes";
import { Fade } from "react-reveal";
import {
  agencyCover,
  agencyProjectStatus,
  agencyFlow,
  agencyLanding,
  agencyPre,
  agencyService,
  agencyAbout,
  agencyGuide,
} from "../../constrains/data";

export default function Agency() {
  const { coverTitle, strong, bio, coverImg } = agencyCover;
  const { flowTitle, flowImg } = agencyFlow;
  const { landingTitle, landingDesc, landingImg } = agencyLanding;
  const { preTitle, preDesc, preImg } = agencyPre;
  const { serviceTitle, serviceDesc, serviceImg } = agencyService;
  const { aboutTitle, aboutImg } = agencyAbout;
  return (
    <Fade bottom duration={500} distance="100px">
      <Cover
        title={coverTitle}
        strong={strong}
        bio={bio}
        coverImg={coverImg}
      />
      <div className="container">
        <div className="mx-2 mx-md-5 mt-3 mt-lg-5">
          {/* <BackButton url={ROUTES.WORK} /> */}
          <div className="row justify-content-center mt-3 mt-md-5">
            {agencyProjectStatus.map((item, index) => (
              <div key={index} className="col-sm-12 col-lg-3">
                <Status title={item.title} collection={item.collection} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <FullPresent title={flowTitle} img={flowImg} />
      <SineWave
        title={landingTitle}
        step="0"
        primaryDesc={landingDesc}
        img={landingImg}
      />
      <SineWave
        title={preTitle}
        step="1"
        primaryDesc={preDesc}
        img={preImg}
        background="#f4f4f4"
        RTL={true}
      />
      <SineWave
        title={serviceTitle}
        step="3"
        primaryDesc={serviceDesc}
        img={serviceImg}
      />
      <FullPresent title={aboutTitle} img={aboutImg} background="#f4f4f4" />
      <NestedFullPresent title="styles & guides" guides={agencyGuide} />
    </Fade>
  );
}
