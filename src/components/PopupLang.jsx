import PropTypes from "prop-types";
import FlagCard from "./FlagCard";

export default function PopupLang({
  popupLang,
  setPopupLang,
  dataLang,
  setCurrentLang,
  reset,
}) {
  function handleKeyDown(e) {
    if (e.keyCode === 27) {
      setPopupLang(false);
    }
  }
  function handleParentClick(e) {
    if (e.target === e.currentTarget) {
      setPopupLang(false);
    }
  }
  return (
    <>
      {popupLang && (
        <div
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="popupLayout"
          onClick={handleParentClick}
        >
          <div className="popupLang">
            {dataLang.map((lang) => (
              <FlagCard
                key={lang.id}
                lang={lang}
                setPopupLang={setPopupLang}
                setCurrentLang={setCurrentLang}
                reset={reset}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

PopupLang.propTypes = {
  dataLang: PropTypes.arrayOf(PropTypes.object),
  popupLang: PropTypes.bool,
  setPopupLang: PropTypes.func,
  setCurrentLang: PropTypes.func,
  reset: PropTypes.func,
};
