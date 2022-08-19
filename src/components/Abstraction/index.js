import styles from "./index.module.scss";

export default function Abstract({ name, bio }) {
  return (
    <section className={`${styles.abstract} text-start text-md-center mt-5 mx-2 mx-md-0`}>
      <h4 className="text-capitalize">
        hello, i'm <span className="text-primary">{name} 👋</span>
      </h4>
      <p className="present-p">{bio}</p>
    </section>
  );
}
