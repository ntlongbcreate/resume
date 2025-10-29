import Navfooter from "./Navfooter";
import Navmenu from "./Navmenu";

export default function Navside() {
  return (
    <header>
      <div className="header-content">
        <div className="header-mobile">
          <a className="header-toggle">
            <i className="fas fa-bars"></i>
          </a>
          <h2>Eric Nguyễn</h2>
        </div>

        <div className="header-main" data-simplebar>
          <div className="image-container">
            <h2 className="header-name">Eric Nguyễn</h2>
            <img src="/img/eric-profile-img.jpg" alt="Eric profile" />
          </div>

          <Navmenu />
          <Navfooter />
        </div>
      </div>
    </header>
  );
}
