import PropTypes from "prop-types";

export default function VerbCorrection({
  selectedVerbIndex,
  correctionDisplay,
  currentVerb,
  audioClick,
  setAudioClick,
}) {
  function audioHandleClick() {
    setAudioClick(!audioClick);
  }

  return (
    <>
      {selectedVerbIndex !== -1 && correctionDisplay === 2 && (
        <div className="flex flex-col MY-8 items-center">
          <p className="text-xl">{currentVerb.base_form}</p>
          <p className="text-xl">{currentVerb.past_simple}</p>
          <p className="text-xl">{currentVerb.past_participle}</p>
          <img
            onClick={audioHandleClick}
            src="https://github.com/SbirLobo/IrregularVerbs/assets/108263661/0c7ccbc7-a60a-41b3-92fb-72f7dac885ce"
            alt="voice_image"
            style={{ cursor: "pointer" }}
            className="w-10 my-8"
          />
          {audioClick && (
            <audio
              autoPlay
              src={`https://manylex.com/audio/verbs/${
                currentVerb.base_form.split(" ")[1]
              }.mp3`}
            ></audio>
          )}
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
