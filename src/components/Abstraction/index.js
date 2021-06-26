import styles from "./index.module.scss";

export default function Abstract({ name, bio }) {
  return (
    <section className={`${styles.abstract} text-center mt-1`}>
      <h2 className="text-capitalize">
        hello, i'm <span className="text-primary">{name} 👋</span>
      </h2>
      <p>{bio}</p>
    </section>
  );
}
