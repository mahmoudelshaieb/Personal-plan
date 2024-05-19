// import styles from "./index.module.scss";

export default function ListItem({ lists }) {
  return (
    <ul className="ps-4 m-0">
      {lists.map((list, index) => (
        <li key={index} className="present-p">{list}</li>
      ))}
    </ul>
  );
}
