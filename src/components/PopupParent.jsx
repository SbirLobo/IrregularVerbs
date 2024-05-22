import PropTypes from "prop-types";
import PopupAbout from "./PopupAbout";
import PopupLang from "./PopupLang";
import PopupMenu from "./PopupMenu";
import PopupContact from "./PopupContact";
import PopupEntireList from "./PopupEntireList";

export default function PopupParent({
  dataLang,
  popupLang,
  setPopupLang,
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
  popupEntireList,
  setPopupEntireList,
  popupParent,
  verbsByFrequency,
  currentLang,
  shutDownAllPopup,
  verbsByAlphabetic,
}) {
  function handleKeyDown(e) {
    if (e.keyCode === 27) {
      shutDownAllPopup();
    }
  }
  function handleParentClick(e) {
    if (e.target === e.currentTarget) {
      shutDownAllPopup();
    }
  }

  return (
    <>
      {popupParent && (
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
              shutDownAllPopup={shutDownAllPopup}
            />
          )}
          {popupMenu && (
            <PopupMenu
              setPopupMenu={setPopupMenu}
              whiteMode={whiteMode}
              setWhiteMode={setWhiteMode}
              setPopupAbout={setPopupAbout}
              setPopupContact={setPopupContact}
              setPopupEntireList={setPopupEntireList}
            />
          )}
          {popupAbout && <PopupAbout whiteMode={whiteMode} />}
          {popupContact && <PopupContact whiteMode={whiteMode} />}
          {popupEntireList && (
            <PopupEntireList
              whiteMode={whiteMode}
              verbsByFrequency={verbsByFrequency}
              currentLang={currentLang}
              verbsByAlphabetic={verbsByAlphabetic}
            />
          )}
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
  popupEntireList: PropTypes.bool,
  setPopupEntireList: PropTypes.func,
  popupParent: PropTypes.bool,
  verbsByFrequency: PropTypes.arrayOf(PropTypes.object),
  currentLang: PropTypes.object,
  shutDownAllPopup: PropTypes.func,
  verbsByAlphabetic: PropTypes.arrayOf(PropTypes.object),
};
