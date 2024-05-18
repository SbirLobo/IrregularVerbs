import PropTypes from "prop-types";
import UpdateStyles from "./UpdateStyle";
import VerbCard from "./VerbCard";

export default function PopupEntireList({
  whiteMode,
  verbsByFrequency,
  currentLang,
}) {
  UpdateStyles;
  return (
    <>
      <div
        className={`popupDefault popupEntireList ${
          whiteMode ? "bgPopupWhite" : "bgPopupDark"
        }`}
      >
        <p className="font-bold text-xl">
          185 Irregular Verbs List by Frequency
        </p>
        {verbsByFrequency.map((verb) => (
          <VerbCard
            key={verb.id}
            whiteMode={whiteMode}
            verb={verb}
            currentLang={currentLang}
          />
        ))}
      </div>
    </>
  );
}

PopupEntireList.propTypes = {
  whiteMode: PropTypes.bool,
  verbsByFrequency: PropTypes.arrayOf(PropTypes.object),
  currentLang: PropTypes.object,
};
