import PropTypes from "prop-types";

export default function VerbCard({ whiteMode, verb, currentLang }) {
  return (
    <div className="flex flex-col items-center gap-1 pt-8">
      <p className="w-full bg-black h-1" />
      <p>({verb.id})</p>
      <p
        className={`verbTranslation my-0 ${
          whiteMode
            ? "text-[--text-white-theme-translation]"
            : "text-[--text-dark-theme-translation]"
        }`}
      >
        {verb[currentLang.language]}
      </p>
      <p>{verb.base_form}</p>
      <p>{verb.past_simple}</p>
      <p>{verb.past_participle}</p>
    </div>
  );
}

VerbCard.propTypes = {
  whiteMode: PropTypes.bool,
  verb: PropTypes.object,
  currentLang: PropTypes.object,
};
