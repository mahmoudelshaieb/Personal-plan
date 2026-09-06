import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// `alt` is the section's fallback description; an image can override it with
// its own `alt`. Interpolating the image object here produced "[object Object]-1".
export default function ClassicScroll({ images, alt = "" }) {

  return images.map((img, index) => (
    <Zoom key={index}>
      <img
        className="img-fluid mb-3 mb-lg-4"
        src={img.src}
        alt={img.alt || alt}
        loading="lazy"
      />
    </Zoom>
  ));
}
