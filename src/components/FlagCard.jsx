import PropTypes from "prop-types";

export default function FlagCard({
  lang,
  setPopupLang,
  setCurrentLang,
  reset,
}) {
  function test() {
    setCurrentLang(lang);
    setPopupLang(false);
    reset();
  }

  return (
    <>
      <img
        key={lang.id}
        className="flag"
        src={`/flags_svg_alpha2/${lang.alpha2}.svg`}
        alt={`${lang.language} flag`}
        onClick={test}
      />
    </>
  );
}

FlagCard.propTypes = {
  lang: PropTypes.object,
  setPopupLang: PropTypes.func,
  setCurrentLang: PropTypes.func,
  reset: PropTypes.func,
};
