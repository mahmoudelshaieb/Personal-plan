import Status from "../../components/Status";
import FullPresent from "../../components/FullPresent";
import BentoCard from "../../components/BentoCard";
import ProjectIntro from "../../components/ProjectIntro";
import DescriptiveBentoCard from "../../components/DescriptiveBentoCard";
import ImpactMetrics from "../../components/ImpactMetrics";
import "../../sass/_grid.scss";
import {
  salesOverview,
  salesintro,
  mapintro,
  sakProjectStatus,
  DS,
  engagement,
  searchFilters,
  customize,
  commuteCalculator,
  searchPrecisely,
  unitManagement,
  Offergeneration,
  community,
  sakSuccess,
  sakLearning,
  impactmetrics
} from "../../constrains/data";

export default function SalesTool() {
  const { projectName, desc } = salesOverview;
  const { introDS, descDS, imgDS } = DS;
  const { intro00, desc00, img00 } = salesintro;
  const { intro01, desc01, img01 } = mapintro;
  const { title02, desc02, img02 } = engagement;
  const { title03, desc03, img03 } = searchFilters;
  const { title04, desc04, img04 } = customize;
  const { title05, desc05, img05 } = commuteCalculator;
  const { title06, desc06, img06 } = searchPrecisely;
  const { title07, desc07, img07 } = unitManagement;
  const { title08, desc08, img08 } = Offergeneration;
  const { intro09, desc09, img09 } = community;
  const { successTitle, successDesc } = sakSuccess;
  const { learnTitle, learnList } = sakLearning;

  return (
    <>
      <div className="compact-page">
        <ProjectIntro
          projectName={projectName}
          desc={desc}
        />
        <ImpactMetrics mertics={impactmetrics} />
        <div className="container">
          <div className="mt-3">
            <div className="row justify-content-between mt-3 mt-md-5">
              {sakProjectStatus.map((item, index) => (
                <div key={index} className="col-sm-12 col-lg-3 pe-0">
                  <Status title={item.title} collection={item.collection} />
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <div className="cell-12 cell-lg-12 mt-5">
              <DescriptiveBentoCard
                introtxt={intro00}
                desc={desc00}
                asset={img00}
              />
            </div>
            <div className="cell-12 cell-lg-12">
              <DescriptiveBentoCard
                introtxt={intro01}
                desc={desc01}
                asset={img01}
              />
            </div>

            <div className="cell-12 cell-lg-8">
              <BentoCard
                title={title02}
                desc={desc02}
                descWidth={80}
                asset={img02}
                assetWidth={85}
              />
            </div>
            <div className="cell-12 cell-lg-4">
              <BentoCard title={title03} desc={desc03} asset={img03} />
            </div>
            <div className="cell-12 cell-lg-4">
              <BentoCard title={title04} desc={desc04} asset={img04} />
            </div>
            <div className="cell-12 cell-lg-4">
              <BentoCard title={title05} desc={desc05} asset={img05} />
            </div>
            <div className="cell-12 cell-lg-4">
              <BentoCard title={title06} desc={desc06} asset={img06} />
            </div>
            <div className="cell-12 cell-lg-4">
              <BentoCard title={title08} desc={desc08} asset={img08} />
            </div>
            <div className="cell-12 cell-lg-8">
              <BentoCard
                title={title07}
                desc={desc07}
                descWidth={60}
                asset={img07}
              />
            </div>
            <div className="cell-12 cell-lg-12">
              <DescriptiveBentoCard
                introtxt={intro09}
                desc={desc09}
                asset={img09}
              />
            </div>
            <div className="cell-12 cell-lg-12">
              <DescriptiveBentoCard
                introtxt={introDS}
                desc={descDS}
                asset={imgDS}
              />
            </div>
          </div>
          <FullPresent
            title={successTitle}
            desc={successDesc}
            url={"https://www.sakneen.com/"}
            urlLabel={"See More about this business"}
          />
          <FullPresent title={learnTitle} lists={learnList} />
        </div>
      </div>
    </>
  );
}
