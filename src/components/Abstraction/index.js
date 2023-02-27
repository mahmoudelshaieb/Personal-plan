import styles from "./index.module.scss";

export default function Abstract({ name, bio }) {
  return (
    <section className={`${styles.abstract} text-start text-md-center my-5`}>
      <h3 className="text-capitalize">
        hello, i'm <span className="text-primary">{name} 👋🏻</span>
      </h3>
      <p className="present-p">{bio}</p>
    </section>
  );
}
