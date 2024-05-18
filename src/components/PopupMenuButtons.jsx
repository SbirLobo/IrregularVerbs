import PropTypes from "prop-types";

export default function PopupMenuButtons({
  setPopupMenu,
  setPopupAbout,
  setPopupContact,
  setPopupEntireList,
}) {
  function handleClickMenu(e) {
    setPopupMenu(false);
    e.target.innerHTML === menuButtons[0] && setPopupEntireList(true);
    e.target.innerHTML === menuButtons[1] && setPopupAbout(true);
    e.target.innerHTML === menuButtons[2] && setPopupContact(true);
  }

  const menuButtons = ["All verbs", "About", "Contact"];

  return (
    <div className="popupMenuButtons">
      {menuButtons.map((e, i) => (
        <button key={i} className="menuButton" onClick={handleClickMenu}>
          {e}
        </button>
      ))}
    </div>
  );
}

PopupMenuButtons.propTypes = {
  whiteMode: PropTypes.bool,
  setPopupMenu: PropTypes.func,
  setWhiteMode: PropTypes.func,
  setPopupAbout: PropTypes.func,
  setPopupContact: PropTypes.func,
  setPopupEntireList: PropTypes.func,
};
