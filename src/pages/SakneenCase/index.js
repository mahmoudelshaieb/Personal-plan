import Cover from "../../components/Cover";
import Status from "../../components/Status";
import SineWave from "../../components/SineWave";

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
    <>
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
      <SineWave
        title="problem"
        step="0"
        primaryDesc="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain"
        secondaryDesc="was born and I will give you a complete account of the system, and expound the actual teachings of th"
        img="/assets/img2.jpg"
      />
      <SineWave
        title="solution"
        step="1"
        primaryDesc="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain"
        secondaryDesc="was born and I will give you a complete account of the system"
        img="/assets/img.jpg"
        background="#f4f4f4"
        RTL={true}
      />
    </>
  );
}
