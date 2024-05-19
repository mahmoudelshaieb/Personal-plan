export default function BackToTop() {
  const rootElement = document.documentElement;
  const handleScroll = () => {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.3) {
      // Show button
      document.getElementById("scrollToTopBtn").classList.add("showBtn");
    } else {
      // Hide button
      document.getElementById("scrollToTopBtn").classList.remove("showBtn");
    }
  };
  document.addEventListener("scroll", handleScroll);
  const scrollTop = () => {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={scrollTop}
      id="scrollToTopBtn"
      type="button"
      className="btn rounded-3 d-flex justifiy-content-center align-items-center"
    >
      <img src="../assets/top.svg" alt="back button" loading="lazy" />
    </button>
  );
}
