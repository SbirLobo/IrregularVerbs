import PropTypes from "prop-types";

export default function PopupMenu({
  setPopupMenu,
  whiteMode,
  setWhiteMode,
  setPopupAbout,
  setPopupContact,
  setPopupEntireList,
}) {
  function handleClickAppearence() {
    setWhiteMode(!whiteMode);
  }

  function handleClickAbout() {
    setPopupMenu(false);
    setPopupAbout(true);
  }

  function handleClickContact() {
    setPopupMenu(false);
    setPopupContact(true);
  }

  function handleClickEntireList() {
    setPopupMenu(false);
    setPopupEntireList(true);
  }

  return (
    <>
      <div
        className={`popupDefault popupMenu ${
          whiteMode ? "bgPopupWhite" : "bgPopupDark"
        }`}
      >
        {whiteMode ? (
          <img
            src="/icons/white-theme.svg"
            alt="white theme icon"
            className="flag bg-white"
            onClick={handleClickAppearence}
          />
        ) : (
          <img
            src="/icons/dark-theme.svg"
            alt="dark theme icon"
            className="flag bg-white"
            onClick={handleClickAppearence}
          />
        )}
        <button
          className="menuButton text-white"
          onClick={handleClickEntireList}
        >
          All verbs
        </button>
        <button className="menuButton text-white" onClick={handleClickAbout}>
          About
        </button>
        <button className="menuButton text-white" onClick={handleClickContact}>
          Contact
        </button>
      </div>
    </>
  );
}

PopupMenu.propTypes = {
  setPopupMenu: PropTypes.func,
  whiteMode: PropTypes.bool,
  setWhiteMode: PropTypes.func,
  setPopupAbout: PropTypes.func,
  setPopupContact: PropTypes.func,
  setPopupEntireList: PropTypes.func,
};
