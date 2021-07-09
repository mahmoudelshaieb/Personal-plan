import Cover from "../../components/Cover";
import Status from "../../components/Status";
import SineWave from "../../components/SineWave";
import FullPresent from "../../components/FullPresent";
import NestedFullPresent from "../../components/NestedFullPresent";
import BackButton from "../../components/BackBtn";
import * as ROUTES from "../../constrains/routes";
import { Fade } from "react-reveal";

export default function SakneenCase() {
  const projectStatus = [
    {
      title: "date",
      collection: [
        {
          bio: "January 2020, present",
        },
      ],
    },
    {
      title: "role",
      collection: [
        {
          bio: "Product Designer",
        },
      ],
    },
    {
      title: "location",
      collection: [
        {
          bio: "Cairo, Egypt",
        },
      ],
    },
  ];

  return (
    <Fade bottom duration={500} distance="100px">
      <div className="container">
        <div className="mx-2 mx-md-5 mt-3 mt-lg-5">
          <BackButton url={ROUTES.WORK} />
          <Cover
            title="sakneen"
            subTitle="Buy or sell homes in Egypt"
            strong="Sakneen, the online portal"
            bio="that helps home buyers search for properties, key financial service providers and prominent angel investors spanning Egypt, MENA, the US, and Europe."
            coverImg="/assets/img.jpg"
          />
          <div className="row justify-content-center mt-3 mt-md-5">
            {projectStatus.map((item, index) => (
              <div key={index} className="col-sm-12 col-lg-3">
                <Status title={item.title} collection={item.collection} />
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
      <FullPresent
        title="site map"
        desc="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain"
        img="./assets/img.jpg"
      />
      <FullPresent
        title="prototyping"
        img="./assets/img2.jpg"
        background="#f4f4f4"
      />
      <NestedFullPresent title="styles & guides" />
    </Fade>
  );
}
