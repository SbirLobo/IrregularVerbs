import PropTypes from "prop-types";

export default function Title({ currentLang, setPopupLang }) {
  function handleclickOpenPopup() {
    setPopupLang(true);
  }

  const flagPath = `../public/flags_svg_alpha2/${currentLang.alpha2}.svg`;

  return (
    <div className="flex flex-row justify-center items-center gap-6">
      <img
        className="flag"
        src="\icons\click_icon.svg"
        alt="click&learn icon"
      />
      <h1 className="text-3xl font-bold p-4">Irregular Verbs</h1>
      <img
        className="flag"
        src={flagPath}
        alt={`${currentLang.language} flag`}
        onClick={handleclickOpenPopup}
      />
    </div>
  );
}

Title.propTypes = {
  currentLang: PropTypes.object,
  setPopupLang: PropTypes.func,
};
