import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function ClassicScroll({ images }) {

  return images.map((img, index) => (
    <Zoom key={index}>
      <img
        className="img-fluid mb-3 mb-lg-4"
        src={img.src}
        alt={`${img}-1`}
        loading="lazy"
      />
    </Zoom>
  ));
}
