import PropTypes from "prop-types";

export default function TextToSpeech({
  base_form,
  past_simple,
  past_participle,
}) {
  const audioHandleClick = () => {
    const synth = window.speechSynthesis;
    synth.speak(new SpeechSynthesisUtterance(base_form));
    synth.speak(new SpeechSynthesisUtterance(past_simple));
    synth.speak(new SpeechSynthesisUtterance(past_participle));
  };

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
