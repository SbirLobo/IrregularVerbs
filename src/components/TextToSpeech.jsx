import PropTypes from "prop-types";

export default function TextToSpeech({
  base_form,
  past_simple,
  past_participle,
  whiteMode,
}) {
  function audioHandleClick() {
    const utterance = new SpeechSynthesisUtterance(
      ` ${base_form}, ${past_simple}, ${past_participle} `
    );
    utterance.lang = "en-GB";
    utterance.lang = "en-US";
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  }

  return (
    <div>
      {whiteMode ? (
        <img
          onClick={audioHandleClick}
          src="https://github.com/SbirLobo/IrregularVerbs/assets/108263661/35ff1276-3101-41da-9496-8208ce7f83b0"
          alt="voice_image"
          className="audioIcon"
        />
      ) : (
        <img
          onClick={audioHandleClick}
          src="https://github.com/SbirLobo/IrregularVerbs/assets/108263661/0c7ccbc7-a60a-41b3-92fb-72f7dac885ce"
          alt="voice_image"
          className="audioIcon"
        />
      )}
    </div>
  );
}

TextToSpeech.propTypes = {
  base_form: PropTypes.string,
  past_simple: PropTypes.string,
  past_participle: PropTypes.string,
  whiteMode: PropTypes.bool,
};
