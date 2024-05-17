import PropTypes from "prop-types";

export default function PopupEntireList({ whiteMode }) {
  return (
    <>
      <div
        className={`popupDefault popupEntireList ${
          whiteMode ? "bgPopupWhite" : "bgPopupDark"
        }`}
      >
        <p>test EntireList</p>
      </div>
    </>
  );
}

PopupEntireList.propTypes = {
  whiteMode: PropTypes.bool,
};
