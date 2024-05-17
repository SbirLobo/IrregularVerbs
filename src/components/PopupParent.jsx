import PropTypes from "prop-types";
import PopupAbout from "./PopupAbout";
import PopupLang from "./PopupLang";
import PopupMenu from "./PopupMenu";

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
}) {
  function handleKeyDown(e) {
    if (e.keyCode === 27) {
      setPopupLang(false);
      setPopupAbout(false);
      setPopupMenu(false);
    }
  }
  function handleParentClick(e) {
    if (e.target === e.currentTarget) {
      setPopupAbout(false);
      setPopupLang(false);
      setPopupMenu(false);
    }
  }

  return (
    <>
      {(popupAbout || popupLang || popupMenu) && (
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
            />
          )}
          {popupAbout && <PopupAbout whiteMode={whiteMode} />}
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
};
