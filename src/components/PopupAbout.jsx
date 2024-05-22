import PropTypes from "prop-types";
import AboutText from "./AboutText";

export default function PopupAbout({ whiteMode }) {
  return (
    <>
      <div
        className={`popupDefault popupAbout ${
          whiteMode ? "bgPopupWhite" : "bgPopupDark"
        }`}
      >
        <div className="text-left text-xl p-4">
          <AboutText />
        </div>
      </div>
    </>
  );
}

PopupAbout.propTypes = {
  whiteMode: PropTypes.bool,
};
