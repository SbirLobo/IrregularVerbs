import PropTypes from "prop-types";
import FlagCard from "./FlagCard";

export default function PopupLang({
  setPopupLang,
  dataLang,
  setCurrentLang,
  reset,
  whiteMode,
}) {
  return (
    <>
      <div
        className={`popupDefault popupLang ${
          whiteMode ? "bgPopupWhite" : "bgPopupDark"
        }`}
      >
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
    </>
  );
}

PopupLang.propTypes = {
  dataLang: PropTypes.arrayOf(PropTypes.object),
  setPopupLang: PropTypes.func,
  setCurrentLang: PropTypes.func,
  reset: PropTypes.func,
  whiteMode: PropTypes.bool,
};
