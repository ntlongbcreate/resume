export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section pt-page">
      <div className="section-container">
        <div className="page-heading">
          <span className="icon">
            <i className="lnr lnr-briefcase"></i>
          </span>
          <h2>Portfolio.</h2>
        </div>

        <div className="row">
          <div className="col-md-12 portfolio-filter text-center">
            <ul>
              <li className="active" data-filter="*">
                All
              </li>
              <li data-filter=".brand">Brand</li>
              <li data-filter=".design">Design</li>
              <li data-filter=".graphic">Graphic</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-items mb-50">
          <div className="item col-lg-4 col-sm-6 brand graphic">
            <a className="image-link" href="img/portfolio/img-1.jpg">
              <figure>
                <img src="/img/portfolio/img-1.jpg" alt="" />
                <figcaption>
                  <h4>Book Design</h4>
                  <p>Graphic</p>
                </figcaption>
              </figure>
            </a>
          </div>

          <div className="item col-lg-4 col-sm-6 design">
            <a className="ajax-link" href="single-work.html">
              <figure>
                <img src="/img/portfolio/img-2.jpg" alt="" />
                <figcaption>
                  <h4>Notepad Design</h4>
                  <p>Design</p>
                </figcaption>
              </figure>
            </a>
          </div>

          <div className="item col-lg-4 col-sm-6 design graphic">
            <a className="video-link" href="https://www.youtube.com/watch?v=k_okcNVZqqI">
              <figure>
                <img src="/img/portfolio/img-3.jpg" alt="" />
                <figcaption>
                  <h4>Creative Cup</h4>
                  <p>Graphic</p>
                </figcaption>
              </figure>
            </a>
          </div>

          <div className="item col-lg-4 col-sm-6 design">
            <a className="image-link" href="img/portfolio/img-4.jpg">
              <figure>
                <img src="/img/portfolio/img-4.jpg" alt="" />
                <figcaption>
                  <h4>Business Card</h4>
                  <p>Design</p>
                </figcaption>
              </figure>
            </a>
          </div>

          <div className="item col-lg-4 col-sm-6 brand">
            <a className="ajax-link" href="single-work.html">
              <figure>
                <img src="/img/portfolio/img-5.jpg" alt="" />
                <figcaption>
                  <h4>Back Pack</h4>
                  <p>Brand</p>
                </figcaption>
              </figure>
            </a>
          </div>

          <div className="item col-lg-4 col-sm-6 design">
            <a className="ajax-link" href="single-work.html">
              <figure>
                <img src="/img/portfolio/img-6.jpg" alt="" />
                <figcaption>
                  <h4>Door Hangar</h4>
                  <p>Design</p>
                </figcaption>
              </figure>
            </a>
          </div>

          <div className="item col-lg-4 col-sm-6 graphic">
            <a className="image-link" href="img/portfolio/img-7.jpg">
              <figure>
                <img src="/img/portfolio/img-7.jpg" alt="" />
                <figcaption>
                  <h4>Notepad Design</h4>
                  <p>graphic</p>
                </figcaption>
              </figure>
            </a>
          </div>

          <div className="item col-lg-4 col-sm-6 brand">
            <a className="image-link" href="img/portfolio/img-8.jpg">
              <figure>
                <img src="/img/portfolio/img-8.jpg" alt="" />
                <figcaption>
                  <h4>Creative Flyer</h4>
                  <p>Brand</p>
                </figcaption>
              </figure>
            </a>
          </div>

          <div className="item col-lg-4 col-sm-6 brand">
            <a className="video-link" href="https://www.youtube.com/watch?v=k_okcNVZqqI">
              <figure>
                <img src="/img/portfolio/img-9.jpg" alt="" />
                <figcaption>
                  <h4>Mobile App</h4>
                  <p>Brand</p>
                </figcaption>
              </figure>
            </a>
          </div>

          <div className="item col-lg-4 col-sm-6 graphic">
            <a className="image-link" href="img/portfolio/img-10.jpg">
              <figure>
                <img src="/img/portfolio/img-10.jpg" alt="" />
                <figcaption>
                  <h4>Cup Design</h4>
                  <p>Graphic</p>
                </figcaption>
              </figure>
            </a>
          </div>

          <div className="item col-lg-4 col-sm-6 brand graphic">
            <a className="ajax-link" href="single-work.html">
              <figure>
                <img src="/img/portfolio/img-11.jpg" alt="" />
                <figcaption>
                  <h4>Creative Box</h4>
                  <p>brand</p>
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
