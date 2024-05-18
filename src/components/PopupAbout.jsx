import PropTypes from "prop-types";

export default function PopupAbout({ whiteMode }) {
  return (
    <>
      <div
        className={`popupDefault popupAbout ${
          whiteMode ? "bgPopupWhite" : "bgPopupDark"
        }`}
      >
        <p>in development...</p>
      </div>
    </>
  );
}

PopupAbout.propTypes = {
  whiteMode: PropTypes.bool,
};
