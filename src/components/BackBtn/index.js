import { Link } from "react-router-dom";

export default function BackButton({ url }) {
  return (
    <Link to={url}>
      <button type="button" className="btn btn-link ps-0">
        <img src="../assets/back.png" alt="back button" loading="lazy" />
      </button>
    </Link>
  );
}
