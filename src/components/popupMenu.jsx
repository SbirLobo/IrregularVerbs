import PropTypes from "prop-types";

export default function PopupMenu({
  setPopupMenu,
  whiteMode,
  setWhiteMode,
  setPopupAbout,
}) {
  function handleClickAppearence() {
    setWhiteMode(!whiteMode);
  }

  function handleClickAbout() {
    setPopupMenu(false);
    setPopupAbout(true);
  }

  return (
    <>
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
        <button className="menuButton text-white" onClick={handleClickAbout}>
          About
        </button>
      </div>
    </>
  );
}

PopupMenu.propTypes = {
  setPopupMenu: PropTypes.func,
  whiteMode: PropTypes.bool,
  setWhiteMode: PropTypes.func,
  setPopupAbout: PropTypes.func,
};
