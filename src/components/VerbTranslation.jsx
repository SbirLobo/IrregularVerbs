import PropTypes from "prop-types";

export default function VerbTranslation({ selectedVerbIndex, currentVerb }) {
  return (
    <>
      {selectedVerbIndex !== -1 && (
        <p className="text-xl my-8 verbTranslation">{currentVerb.french}</p>
      )}
    </>
  );
}

VerbTranslation.propTypes = {
  selectedVerbIndex: PropTypes.number,
  currentVerb: PropTypes.object,
};
