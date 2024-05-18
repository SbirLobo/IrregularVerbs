import PropTypes from "prop-types";

export default function PopupEntireList({
  whiteMode,
  verbsByFrequency,
  currentLang,
}) {
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
          <div key={verb.id} className="flex flex-col items-center gap-1 pt-8">
            <p>({verb.id})</p>
            <p className="verbTranslation my-0">{verb[currentLang.language]}</p>
            <p>{verb.base_form}</p>
            <p>{verb.past_simple}</p>
            <p>{verb.past_participle}</p>
          </div>
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
