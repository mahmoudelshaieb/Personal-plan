import styles from "./index.module.scss";

export default function ProjectIntro({ projectName, desc }) {
  return (
    <div className="container">
      <div className={`${styles.intro} text-center`}>
        <h2 className="text-primary my-4">{projectName}</h2>
        <h3 className="fw-bold">{desc}</h3>
      </div>
    </div>
  );
}
