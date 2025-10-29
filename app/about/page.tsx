export default function About() {
  return (
    <section id="about" className="about-section pt-page">
      <div className="section-container">
        <div className="page-heading">
          <span className="icon">
            <i className="lnr lnr-user"></i>
          </span>
          <h2>About Me.</h2>
        </div>

        <div className="row about mb-70">
          <div className="col-lg-8">
            <h3 className="mb-20">Web Developer & UI/UX Enthusiast</h3>
            <p>
              I am a passionate web developer specializing in creating modern, high-performance, and user-friendly
              websites. I enjoy turning ideas into interactive digital experiences that not only look great but also
              work smoothly across all devices.
            </p>
            <p>
              With a strong focus on clean code, responsive design, and usability, I build custom web solutions using
              technologies like WordPress, ReactJS, NodeJS, and PHP. I love exploring new tools and frameworks to
              continuously improve both development efficiency and user experience.
            </p>

            <div className="signature mt-20">
              <h4 className="font-signature">Eric Nguyen</h4>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="about-info">
              <h3 className="mb-20">Personal Information</h3>
              <ul>
                <li>
                  <span className="title">Name</span>
                  <span className="value">Eric Nguyễn</span>
                </li>
                <li>
                  <span className="title">Age</span>
                  <span className="value">37 Years</span>
                </li>
                <li>
                  <span className="title">Residence</span>
                  <span className="value">Ho Chi Minh city, Vietnam</span>
                </li>
                <li>
                  <span className="title">Address</span>
                  <span className="value">118/47 Au Duong Lan Street</span>
                </li>
                <li>
                  <span className="title">Ward</span>
                  <span className="value">Chanh Hung</span>
                </li>
                <li>
                  <span className="title">Email</span>
                  <span className="value">longnt2302@gmail.com</span>
                </li>
                <li>
                  <span className="title">Phone</span>
                  <span className="value">(+84) 0933 460 208</span>
                </li>
                <li>
                  <span className="title">Freelance</span>
                  <span className="value">Available</span>
                </li>
              </ul>
              {/* <div className="resume-button mt-30">
                <a className="btn-main" href="#">
                  Download Resume
                </a>
              </div> */}
            </div>
          </div>
        </div>

        <div className="row services mb-30">
          <div className="col-md-12">
            <div className="subheading">
              <h3>Services</h3>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="service-item">
              <div className="icon">
                <i className="lnr lnr-laptop"></i>
              </div>
              <h4>Web Development</h4>
              <p>Building functional, efficient, and scalable websites.</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="service-item">
              <div className="icon">
                <i className="lnr lnr-eye"></i>
              </div>
              <h4>Web Design</h4>
              <p>Creating visually appealing and user-friendly website layouts.</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="service-item">
              <div className="icon">
                <i className="lnr lnr-laptop-phone"></i>
              </div>
              <h4>Responsive Design</h4>
              <p>Ensuring websites look great on all devices and screen sizes.</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="service-item">
              <div className="icon">
                <i className="lnr lnr-camera"></i>
              </div>
              <h4>Photography</h4>
              <p>Capturing high-quality images for digital and print media.</p>
            </div>
          </div>
        </div>

        <div className="row clients mb-70">
          <div className="col-md-12">
            <div className="subheading">
              <h3>Clients</h3>
            </div>
          </div>

          <div className="owl-carousel owl-theme">
            <div className="client-logo">
              <a href="#">
                <img src="/img/clients/client-01.png" alt="" />
              </a>
            </div>

            <div className="client-logo">
              <a href="#">
                <img src="/img/clients/client-02.png" alt="" />
              </a>
            </div>

            <div className="client-logo">
              <a href="#">
                <img src="/img/clients/client-03.png" alt="" />
              </a>
            </div>

            <div className="client-logo">
              <a href="#">
                <img src="/img/clients/client-04.png" alt="" />
              </a>
            </div>

            <div className="client-logo">
              <a href="#">
                <img src="/img/clients/client-05.png" alt="" />
              </a>
            </div>

            <div className="client-logo">
              <a href="#">
                <img src="/img/clients/client-06.png" alt="" />
              </a>
            </div>

            <div className="client-logo">
              <a href="#">
                <img src="/img/clients/client-07.png" alt="" />
              </a>
            </div>

            <div className="client-logo">
              <a href="#">
                <img src="/img/clients/client-08.png" alt="" />
              </a>
            </div>

            <div className="client-logo">
              <a href="#">
                <img src="/img/clients/client-09.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="row testimonials mb-50">
          <div className="col-md-12">
            <div className="subheading">
              <h3>Testimonials</h3>
            </div>
            <div className="owl-carousel owl-theme">
              <div className="testimonial-item">
                <div className="testimonial-content">
                  <p>
                    Working with this team was a game-changer for our digital strategy. Their attention to detail and
                    creative solutions exceeded expectations.
                  </p>
                </div>
                <div className="testimonial-meta">
                  <img src="/img/testimonials/author-1.jpg" alt="" />
                  <div className="meta-info">
                    <h4>Kate Fox</h4>
                    <p>Digital Marketing Executive</p>
                  </div>
                </div>
              </div>

              <div className="testimonial-item">
                <div className="testimonial-content">
                  <p>
                    Their design expertise transformed our website into a visually stunning and highly functional
                    platform. Truly professional and innovative.
                  </p>
                </div>
                <div className="testimonial-meta">
                  <img src="/img/testimonials/author-2.jpg" alt="" />
                  <div className="meta-info">
                    <h4>Emma Jones</h4>
                    <p>Creative Director</p>
                  </div>
                </div>
              </div>

              <div className="testimonial-item">
                <div className="testimonial-content">
                  <p>
                    Exceptional service and strategic insight. They delivered results that significantly boosted our
                    online presence and engagement.
                  </p>
                </div>
                <div className="testimonial-meta">
                  <img src="/img/testimonials/author-3.jpg" alt="" />
                  <div className="meta-info">
                    <h4>Jack Smith</h4>
                    <p>Marketing Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
