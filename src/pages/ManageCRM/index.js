import Status from "../../components/Status";
import FullPresent from "../../components/FullPresent";
import BentoCard from "../../components/BentoCard";
import ProjectIntro from "../../components/ProjectIntro";
import DescriptiveBentoCard from "../../components/DescriptiveBentoCard";
import "../../sass/_grid.scss";
import {
  sakProjectStatus,
  DS,
  CRMOverview,
  CRMintro,
  realTimeInventory,
  workFlow,
  filters,
  price,
  archive,
  fullManage,
  autoWorkflow,
  unitStatus,
  trackRequests,
  EOI,
  teamManagement,
  teamRole,
  addUsers,
  collaboration,
  sakSuccess,
  sakLearning,
} from "../../constrains/data";

export default function ManageCRM() {
  const { projectName, desc } = CRMOverview;
  const { introDS, descDS, imgDS } = DS;
  const { intro00, desc00, img00 } = CRMintro;
  const { title01, desc01, img01 } = realTimeInventory;
  const { title02, desc02, img02 } = workFlow;
  const { title03, desc03, img03 } = filters;
  const { title04, desc04, img04 } = price;
  const { title05, desc05, img05 } = archive;
  const { title06, desc06, img06 } = fullManage;
  const { title07, desc07, img07 } = autoWorkflow;
  const { title08, desc08, img08 } = unitStatus;
  const { title09, desc09, img09 } = trackRequests;
  const { title10, desc10, img10 } = EOI;
  const { title11, desc11, img11 } = teamManagement;
  const { title12, desc12, img12 } = teamRole;
  const { title13, desc13, img13 } = addUsers;
  const { title14, desc14, img14 } = collaboration;
  const { successTitle, successDesc } = sakSuccess;
  const { learnTitle, learnList } = sakLearning;

  return (
    <>
      <div className="compact-page">
        <ProjectIntro
          projectName={projectName}
          desc={desc}
        />
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
            <div className="cell-12 cell-lg-8">
              <BentoCard
                title={title01}
                desc={desc01}
                descWidth={60}
                asset={img01}
                assetWidth={80}
              />
            </div>
            <div className="cell-12 cell-lg-4">
              <BentoCard title={title02} desc={desc02} asset={img02} />
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
            <div className="cell-12 cell-lg-8">
              <BentoCard
                title={title07}
                desc={desc07}
                descWidth={60}
                asset={img07}
              />
            </div>
            <div className="cell-12 cell-lg-4">
              <BentoCard title={title08} desc={desc08} asset={img08} />
            </div>
            <div className="cell-12 cell-lg-4">
              <BentoCard title={title09} desc={desc09} asset={img09} />
            </div>
            <div className="cell-12 cell-lg-4">
              <BentoCard title={title10} desc={desc10} asset={img10} />
            </div>
            <div className="cell-12 cell-lg-12">
              <BentoCard
                title={title11}
                desc={desc11}
                descWidth={45}
                asset={img11}
              />
            </div>
            <div className="cell-12 cell-lg-4">
              <BentoCard title={title12} desc={desc12} asset={img12} />
            </div>
            <div className="cell-12 cell-lg-4">
              <BentoCard title={title13} desc={desc13} asset={img13} />
            </div>
            <div className="cell-12 cell-lg-4">
              <BentoCard title={title14} desc={desc14} asset={img14} />
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
