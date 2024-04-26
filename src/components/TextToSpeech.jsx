import PropTypes from "prop-types";

export default function TextToSpeech({
  base_form,
  past_simple,
  past_participle,
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
      <img
        onClick={audioHandleClick}
        src="https://github.com/SbirLobo/IrregularVerbs/assets/108263661/0c7ccbc7-a60a-41b3-92fb-72f7dac885ce"
        alt="voice_image"
        style={{ cursor: "pointer" }}
        className="w-10 my-8"
      />
    </div>
  );
}

TextToSpeech.propTypes = {
  base_form: PropTypes.string,
  past_simple: PropTypes.string,
  past_participle: PropTypes.string,
};
