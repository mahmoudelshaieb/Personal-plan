import BentoCard from "../BentoCard";
import DescriptiveBentoCard from "../DescriptiveBentoCard";
import FullPresent from "../FullPresent";
import ImpactCard from "../ImpactCard";
import ImpactMetrics from "../ImpactMetrics";
import ProjectIntro from "../ProjectIntro";
import Status from "../Status";
import "../../sass/_grid.scss";

// Renders a bento-grid case study from a module in constrains/cases.
export default function BentoCaseStudy({ caseStudy }) {
  const {
    meta,
    overview,
    metrics = [],
    status = [],
    sections = [],
    outro = [],
  } = caseStudy;

  return (
    <div className="compact-page">
      <ProjectIntro projectName={meta.title} desc={overview.desc} />
      <ImpactMetrics mertics={metrics} />
      <div className="container">
        <div className="mt-3">
          <div className="row justify-content-between mt-3 mt-md-5">
            {status.map((item, index) => (
              <div key={index} className="col-sm-12 col-lg-3 pe-0">
                <Status title={item.title} collection={item.collection} />
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`cell-12 cell-lg-${section.span}${
                section.className ? ` ${section.className}` : ""
              }`}
            >
              {section.kind === "impact" ? (
                <ImpactCard
                  category={section.category}
                  title={section.title}
                  blocks={section.blocks}
                  asset={section.img}
                  assetWidth={section.assetWidth}
                />
              ) : section.kind === "descriptive" ? (
                <DescriptiveBentoCard
                  introtxt={section.title}
                  desc={section.desc}
                  asset={section.img}
                />
              ) : (
                <BentoCard
                  title={section.title}
                  desc={section.desc}
                  descWidth={section.descWidth}
                  asset={section.img}
                  assetWidth={section.assetWidth}
                />
              )}
            </div>
          ))}
        </div>
        {outro.map((block, index) => (
          <FullPresent
            key={index}
            title={block.title}
            desc={block.desc}
            lists={block.lists}
            url={block.url}
            urlLabel={block.urlLabel}
          />
        ))}
      </div>
    </div>
  );
}
