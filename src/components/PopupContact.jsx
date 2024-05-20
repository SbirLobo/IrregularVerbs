import PropTypes from "prop-types";
import ContactForm from "./ContactForm";

export default function PopupContact({ whiteMode }) {
  return (
    <>
      <div
        className={`popupDefault popupContact ${
          whiteMode ? "bgPopupWhite" : "bgPopupDark"
        }`}
      >
        <ContactForm />
      </div>
    </>
  );
}

PopupContact.propTypes = {
  whiteMode: PropTypes.bool,
};
