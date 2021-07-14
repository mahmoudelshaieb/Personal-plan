import About from "../../components/About";
import { Fade } from "react-reveal";
import { aboutMe } from "../../constrains/data";

export default function AboutMe() {
  const {avatar, primaryBio, secondaryBio} = aboutMe;
  return (
    <Fade bottom duration={500} distance="100px">
      <div className="mt-5 mx-2 mx-md-5">
        <About
          avatar={avatar}
          primaryBio={primaryBio}
          secondaryBio={secondaryBio}
        />
      </div>
    </Fade>
  );
}
