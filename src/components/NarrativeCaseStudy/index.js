import Cover from "../Cover";
import FullPresent from "../FullPresent";
import InsightCard from "../SummaryInsights";
import Status from "../Status";

// Renders a scrolling narrative case study from a module in constrains/cases.
export default function NarrativeCaseStudy({ caseStudy }) {
  const {
    meta,
    overview,
    liveUrls = [],
    insights = [],
    status = [],
    sections = [],
  } = caseStudy;

  return (
    <>
      <Cover coverImg={meta.cover} alt={meta.title} />
      <div className="compact-page">
        <FullPresent
          projectName={meta.title}
          title={overview.title}
          desc={overview.desc}
          liveUrls={liveUrls}
        />
        <InsightCard insights={insights} />
        <div className="container">
          <div className="row justify-content-between mt-3 mt-md-5">
            {status.map((item, index) => (
              <div key={index} className="col-sm-12 col-lg-3 pe-0">
                <Status title={item.title} collection={item.collection} />
              </div>
            ))}
          </div>
        </div>
        {sections.map((section, index) => (
          <FullPresent
            key={index}
            title={section.title}
            subTitle={section.subTitle}
            desc={section.desc}
            descSecondry={section.descSecondry}
            lists={section.lists}
            img={section.img}
            url={section.url}
            urlLabel={section.urlLabel}
          />
        ))}
      </div>
    </>
  );
}
