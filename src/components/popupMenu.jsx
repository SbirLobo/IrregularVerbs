import PropTypes from "prop-types";

export default function PopupMenu({
  popupMenu,
  setPopupMenu,
  whiteMode,
  setWhiteMode,
  setPopupAbout,
}) {
  function handleKeyDown(e) {
    if (e.keyCode === 27) {
      setPopupMenu(false);
    }
  }

  function handleParentClick(e) {
    if (e.target === e.currentTarget) {
      setPopupMenu(false);
    }
  }

  function handleClickAppearence() {
    setWhiteMode(!whiteMode);
  }

  function handleClickAbout() {
    setPopupMenu(false);
    setPopupAbout(true);
  }

  return (
    <>
      {popupMenu && (
        <div
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="popupLayout"
          onClick={handleParentClick}
        >
          <div
            className={`popupDefault popupMenu ${
              whiteMode ? "bgPopupWhite" : "bgPopupDark"
            }`}
          >
            {whiteMode ? (
              <img
                src="/icons/white-theme.svg"
                alt="white theme icon"
                className="flag bg-white"
                onClick={handleClickAppearence}
              />
            ) : (
              <img
                src="/icons/dark-theme.svg"
                alt="dark theme icon"
                className="flag bg-white"
                onClick={handleClickAppearence}
              />
            )}
            <button
              className="menuButton text-white"
              onClick={handleClickAbout}
            >
              About
            </button>
          </div>
        </div>
      )}
    </>
  );
}

PopupMenu.propTypes = {
  popupMenu: PropTypes.bool,
  setPopupMenu: PropTypes.func,
  whiteMode: PropTypes.bool,
  setWhiteMode: PropTypes.func,
  setPopupAbout: PropTypes.func,
};
