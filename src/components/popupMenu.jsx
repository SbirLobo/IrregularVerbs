import PropTypes from "prop-types";
import PopupMenuButtons from "./PopupMenuButtons";

export default function PopupMenu({
  whiteMode,
  setWhiteMode,
  setPopupMenu,
  setPopupAbout,
  setPopupContact,
  setPopupEntireList,
}) {
  function handleClickAppearence() {
    setWhiteMode(!whiteMode);
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
            className="roundedIcon whiteDarkIcon bg-white"
            onClick={handleClickAppearence}
          />
        ) : (
          <img
            src="/icons/dark-theme.svg"
            alt="dark theme icon"
            className="roundedIcon whiteDarkIcon bg-white"
            onClick={handleClickAppearence}
          />
        )}
        <PopupMenuButtons
          setPopupMenu={setPopupMenu}
          setPopupAbout={setPopupAbout}
          setPopupContact={setPopupContact}
          setPopupEntireList={setPopupEntireList}
        />
      </div>
    </>
  );
}

PopupMenu.propTypes = {
  whiteMode: PropTypes.bool,
  setPopupMenu: PropTypes.func,
  setWhiteMode: PropTypes.func,
  setPopupAbout: PropTypes.func,
  setPopupContact: PropTypes.func,
  setPopupEntireList: PropTypes.func,
};
