import About from "../../components/About";
import { aboutMe } from "../../constrains/data";

export default function AboutMe() {
  const { avatar, primaryBio, secondaryBio } = aboutMe;
  return (
    <div className="mt-5">
      <About
        avatar={avatar}
        primaryBio={primaryBio}
        secondaryBio={secondaryBio}
      />
    </div>
  );
}
