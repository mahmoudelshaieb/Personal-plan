import styles from "./index.module.scss";

export default function Status({ title, subTitle, bio, italic }) {
  return (
    <section className={`${styles.status}`}>
      {title ? <h5 className="text-uppercase mb-4">{title}</h5> : null}
      {subTitle ? <h6 className="m-0">{subTitle}</h6> : null}
      <p>{bio}</p>
      {italic ? <p className="fst-italic mb-2">{italic}</p> : null}
    </section>
  );
}
