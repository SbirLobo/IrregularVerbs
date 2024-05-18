import PropTypes from "prop-types";

export default function FlagCard({
  lang,
  setCurrentLang,
  reset,
  shutDownAllPopup,
}) {
  function test() {
    setCurrentLang(lang);
    shutDownAllPopup();
    reset();
  }

  return (
    <>
      <img
        key={lang.id}
        className="roundedIcon flagIcon"
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
  shutDownAllPopup: PropTypes.func,
};
