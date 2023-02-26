export default function ClassicScroll({ images }) {
  return images.map((img, index) => (
    <img
      key={index}
      className="img-fluid mb-3 mb-lg-4"
      src={img}
      alt={`${img}-1`}
      loading="lazy"
    />
  ));
}
