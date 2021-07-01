// import styles from "./index.module.scss";

export default function GetSocial() {
  const getSocial = [
    {
      title: "twitter",
      icon: "./assets/test-icon.svg",
      url: "",
    },
    {
      title: "behace",
      icon: "./assets/test-icon.svg",
      url: "",
    },
  ];
  return (
    <>
      {getSocial.map((item, index) => (
        <a href={item.url} key={index} className="ps-md-3">
          <img src={item.icon} alt={item.title} loading="lazy" />
        </a>
      ))}
    </>
  );
}
