import PropTypes from "prop-types";

export default function PopupContact({ whiteMode }) {
  return (
    <>
      <div
        className={`popupDefault popupContact ${
          whiteMode ? "bgPopupWhite" : "bgPopupDark"
        }`}
      >
        <p>test contact</p>
      </div>
    </>
  );
}

PopupContact.propTypes = {
  whiteMode: PropTypes.bool,
};
