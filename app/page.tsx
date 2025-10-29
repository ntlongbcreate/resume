export default function Home() {
  return (
    <section
      id="home"
      className="banner-section pt-page"
      style={{ backgroundImage: "url('/img/background/home-bg.jpg')" }}
    >
      <div id="particles-js"></div>

      <div className="banner-content">
        <h1 className="mb-20">
          Eric <span>Nguyễn</span>
        </h1>

        <p className="cd-headline clip is-full-width">
          <span>I am a </span>
          <span className="cd-words-wrapper">
            <b className="is-visible">Graphics Designer</b>
            <b>Freelancer</b>
            <b>Web Developer</b>
            <b>UI/UX Designer</b>
          </span>
        </p>
      </div>
    </section>
  );
}
