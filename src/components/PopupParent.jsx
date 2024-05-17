import PropTypes from "prop-types";
import PopupAbout from "./PopupAbout";
import PopupLang from "./PopupLang";
import PopupMenu from "./PopupMenu";
import PopupContact from "./PopupContact";

export default function PopupParent({
  popupLang,
  setPopupLang,
  dataLang,
  setCurrentLang,
  reset,
  whiteMode,
  popupMenu,
  setPopupMenu,
  setWhiteMode,
  setPopupAbout,
  popupAbout,
  popupContact,
  setPopupContact,
}) {
  function handleKeyDown(e) {
    if (e.keyCode === 27) {
      setPopupLang(false);
      setPopupAbout(false);
      setPopupMenu(false);
      setPopupContact(false);
    }
  }
  function handleParentClick(e) {
    if (e.target === e.currentTarget) {
      setPopupAbout(false);
      setPopupLang(false);
      setPopupMenu(false);
      setPopupContact(false);
    }
  }

  return (
    <>
      {(popupAbout || popupLang || popupMenu || popupContact) && (
        <div
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="popupLayout"
          onClick={handleParentClick}
        >
          {popupLang && (
            <PopupLang
              setPopupLang={setPopupLang}
              dataLang={dataLang}
              setCurrentLang={setCurrentLang}
              reset={reset}
              whiteMode={whiteMode}
            />
          )}
          {popupMenu && (
            <PopupMenu
              setPopupMenu={setPopupMenu}
              whiteMode={whiteMode}
              setWhiteMode={setWhiteMode}
              setPopupAbout={setPopupAbout}
              setPopupContact={setPopupContact}
            />
          )}
          {popupAbout && <PopupAbout whiteMode={whiteMode} />}
          {popupContact && <PopupContact whiteMode={whiteMode} />}
        </div>
      )}
    </>
  );
}

PopupParent.propTypes = {
  dataLang: PropTypes.arrayOf(PropTypes.object),
  popupLang: PropTypes.bool,
  setPopupLang: PropTypes.func,
  setCurrentLang: PropTypes.func,
  reset: PropTypes.func,
  whiteMode: PropTypes.bool,
  popupMenu: PropTypes.bool,
  setPopupMenu: PropTypes.func,
  setWhiteMode: PropTypes.func,
  setPopupAbout: PropTypes.func,
  popupAbout: PropTypes.bool,
  popupContact: PropTypes.bool,
  setPopupContact: PropTypes.func,
};
