import PropTypes from "prop-types";

export default function PopupContact({ whiteMode }) {
  return (
    <>
      <div
        className={`popupDefault popupContact ${
          whiteMode ? "bgPopupWhite" : "bgPopupDark"
        }`}
      >
        <p>in development...</p>
      </div>
    </>
  );
}

PopupContact.propTypes = {
  whiteMode: PropTypes.bool,
};
