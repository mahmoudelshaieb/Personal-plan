import About from "../../components/About";
import { Fade } from "react-reveal";

export default function AboutMe() {
  return (
    <Fade bottom duration={1000} distance="100px">
      <div className="mt-5 mx-2 mx-md-5">
        <About
          avatar="../assets/me.jpeg"
          primaryBio="ny right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with"
          secondaryBio="ny right to find fault with a man who chooses to enjoy a pleasure that has"
        />
      </div>
    </Fade>
  );
}
