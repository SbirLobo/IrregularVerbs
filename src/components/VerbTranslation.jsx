import PropTypes from "prop-types";

export default function VerbTranslation({
  selectedVerbIndex,
  currentVerb,
  currentLang,
}) {
  return (
    <>
      {selectedVerbIndex !== -1 && (
        <p className="text-xl my-8 verbTranslation">
          {currentVerb[currentLang.language]}
        </p>
      )}
    </>
  );
}

VerbTranslation.propTypes = {
  selectedVerbIndex: PropTypes.number,
  currentVerb: PropTypes.object,
  currentLang: PropTypes.object,
};
