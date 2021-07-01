import { Link } from "react-router-dom";

export default function BackButton({ url }) {
  return (
    <Link to={url}>
      <button type="button" className="btn btn-primary">
        back
      </button>
    </Link>
  );
}
