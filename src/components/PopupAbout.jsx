import PropTypes from "prop-types";

export default function PopupAbout({ popupAbout, setPopupAbout, whiteMode }) {
  function handleKeyDown(e) {
    if (e.keyCode === 27) {
      setPopupAbout(false);
    }
  }

  function handleParentClick(e) {
    if (e.target === e.currentTarget) {
      setPopupAbout(false);
    }
  }
  return (
    <>
      {popupAbout && (
        <div
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="popupLayout"
          onClick={handleParentClick}
        >
          <div
            className={`popupDefault popupAbout ${
              whiteMode ? "bgPopupWhite" : "bgPopupDark"
            }`}
          >
            <p>test about</p>
          </div>
        </div>
      )}
    </>
  );
}

PopupAbout.propTypes = {
  popupAbout: PropTypes.bool,
  setPopupAbout: PropTypes.func,
  whiteMode: PropTypes.bool,
};
