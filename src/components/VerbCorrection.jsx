import PropTypes from "prop-types";
import TextToSpeech from "./TextToSpeech";

export default function VerbCorrection({
  selectedVerbIndex,
  correctionDisplay,
  currentVerb,
}) {
  return (
    <>
      {selectedVerbIndex !== -1 && correctionDisplay === 2 && (
        <div className="flex flex-col MY-8 items-center">
          <p className="text-xl">{currentVerb.base_form}</p>
          <p className="text-xl">{currentVerb.past_simple}</p>
          <p className="text-xl">{currentVerb.past_participle}</p>

          <TextToSpeech
            base_form={currentVerb.base_form}
            past_simple={currentVerb.past_simple}
            past_participle={currentVerb.past_participle}
          />
        </div>
      )}
    </>
  );
}

VerbCorrection.propTypes = {
  selectedVerbIndex: PropTypes.number,
  correctionDisplay: PropTypes.number,
  currentVerb: PropTypes.object,
  audioClick: PropTypes.bool,
  setAudioClick: PropTypes.func,
};
