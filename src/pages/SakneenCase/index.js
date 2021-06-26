import Cover from "../../components/Cover";
import Status from "../../components/Status";

export default function SakneenCase() {
  const projectStatus = [
    {
      title: "date",
      bio: "January 2020, present",
    },
    {
      title: "role",
      bio: "Product Designer",
    },
    {
      title: "location",
      bio: "Cairo, Egypt",
    },
  ];

  return (
    <div className="container">
      <div className="mx-5 mt-5">
        <button type="button" className="btn btn-primary">
          back
        </button>
        <Cover
          title="sakneen"
          subTitle="Buy or sell homes in Egypt"
          strong="Sakneen, the online portal"
          bio="that helps home buyers search for properties, key financial service providers and prominent angel investors spanning Egypt, MENA, the US, and Europe."
          coverImg="/assets/img.jpg"
        />
        <div className="row justify-content-center mt-5">
          {projectStatus.map((item, index) => (
            <div key={index} className="col-sm-12 col-md-3">
              <Status title={item.title} bio={item.bio} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
