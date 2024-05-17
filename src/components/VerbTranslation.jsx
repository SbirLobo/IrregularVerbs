import PropTypes from "prop-types";

export default function VerbTranslation({
  selectedVerbIndex,
  currentVerb,
  currentLang,
}) {
  return (
    <>
      <p className="verbTranslation">
        {selectedVerbIndex !== -1 && currentVerb[currentLang.language]}
      </p>
    </>
  );
}

VerbTranslation.propTypes = {
  selectedVerbIndex: PropTypes.number,
  currentVerb: PropTypes.object,
  currentLang: PropTypes.object,
};
