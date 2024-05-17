import PropTypes from "prop-types";

export default function Title({ currentLang, setPopupLang, setPopupMenu }) {
  function handleclickOpenPopupLang() {
    setPopupLang(true);
  }
  function handleclickOpenPopupMenu() {
    setPopupMenu(true);
  }

  return (
    <div className="flex flex-row justify-center items-center gap-6">
      <img
        className="flag"
        src="/icons/click_icon.svg"
        alt="click&learn icon"
        onClick={handleclickOpenPopupMenu}
      />
      <h1 className="text-3xl font-bold p-4">Irregular Verbs</h1>
      <img
        className="flag"
        src={`/flags_svg_alpha2/${currentLang.alpha2}.svg`}
        alt={`${currentLang.language} flag`}
        onClick={handleclickOpenPopupLang}
      />
    </div>
  );
}

Title.propTypes = {
  currentLang: PropTypes.object,
  setPopupLang: PropTypes.func,
  setPopupMenu: PropTypes.func,
};
