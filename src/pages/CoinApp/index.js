import Cover from "../../components/Cover";
import Status from "../../components/Status";
import FullPresent from "../../components/FullPresent";
import InsightCard from "../../components/SummaryInsights";
// import BackButton from "../../components/BackBtn";
// import * as ROUTES from "../../constrains/routes";
import {
  coinCover,
  coinOverview,
  coinInsights,
  coinProjectStatus,
  coinProblem,
  coinFlow,
  coinDesigns,
  coinSuccess,
  cointesting,
  coinLearning,
} from "../../constrains/data";

export default function CoinApp() {
  const { coverImg } = coinCover;
  const { projectName, title, desc } = coinOverview;
  const { probTitle, probDesc, probDesc2, probLists } = coinProblem;
  const { flowTitle, flowImages } = coinFlow;
  const { testTitle, testDesc, testImages } = cointesting;
  const { designsTitle, designsImg } = coinDesigns;
  const { successTitle, successDesc } = coinSuccess;
  const { learnTitle, learnList } = coinLearning;

  return (
    <>
      <Cover coverImg={coverImg} />
      <div className="compact-page">
        <FullPresent projectName={projectName} title={title} desc={desc} />
        <InsightCard insights={coinInsights} />
        <div className="container">
          <div className="row justify-content-between mt-3 mt-md-5">
            {coinProjectStatus.map((item, index) => (
              <div key={index} className="col-sm-12 col-lg-3 pe-0">
                <Status title={item.title} collection={item.collection} />
              </div>
            ))}
          </div>
        </div>
        <FullPresent
          title={probTitle}
          desc={probDesc}
          descSecondry={probDesc2}
          lists={probLists}
        />
        <FullPresent title={flowTitle} img={flowImages} />
        <FullPresent title={designsTitle} img={designsImg} />
        <FullPresent
          title={successTitle}
          desc={successDesc}
          url={"https://market.staging.pvbtc.cloud/"}
        />
        <FullPresent title={testTitle} desc={testDesc} img={testImages} />
        <FullPresent title={learnTitle} lists={learnList} />
      </div>
    </>
  );
}
