export default function AjaxPortfolioPopup() {
  return (
    <div className="ajax-portfolio-popup">
      <span className="ajax-loader"></span>
      <div className="navigation-wrap">
        <span className="popup-close">
          <i className="fas fa-times-circle"></i>
        </span>
      </div>
      <div className="content-wrap">
        <div className="popup-content"></div>
      </div>
    </div>
  );
}
