import PropTypes from "prop-types";

export default function Title({
  currentLang,
  setPopupLang,
  setPopupMenu,
  shutDownAllPopup,
  popupLang,
  popupMenu,
}) {
  function handleclickOpenPopupLang() {
    shutDownAllPopup();
    setPopupLang(!popupLang);
  }
  function handleclickOpenPopupMenu() {
    shutDownAllPopup();
    setPopupMenu(!popupMenu);
  }
  return (
    <div className="flex flex-row justify-center items-center gap-6">
      <img
        className="roundedIcon menuIcon"
        src="/icons/click_icon.svg"
        alt="click&learn icon"
        onClick={handleclickOpenPopupMenu}
      />
      <h1 className="text-3xl font-bold p-4">Irregular Verbs</h1>
      <img
        className="roundedIcon flagIcon"
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
  shutDownAllPopup: PropTypes.func,
  setPopupParent: PropTypes.func,
  popupLang: PropTypes.bool,
  popupMenu: PropTypes.bool,
};
