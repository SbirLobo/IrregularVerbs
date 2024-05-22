import PropTypes from "prop-types";
import { useState } from "react";
import UpdateStyles from "./UpdateStyle";
import VerbCard from "./VerbCard";

export default function PopupEntireList({
  whiteMode,
  verbsByFrequency,
  currentLang,
  verbsByAlphabetic,
}) {
  UpdateStyles;

  const [order, setOrder] = useState("Frequency");
  const [list, setList] = useState(verbsByFrequency);

  function handleSwitchButton() {
    if (order === "Frequency") {
      setOrder("Alphabetic");
      setList(verbsByAlphabetic);
    } else {
      setOrder("Frequency");
      setList(verbsByFrequency);
    }
  }

  return (
    <>
      <div
        className={`popupDefault popupEntireList ${
          whiteMode ? "bgPopupWhite" : "bgPopupDark"
        }`}
      >
        <button className="mainButton" onClick={handleSwitchButton}>
          order by {order}
        </button>
        <p className="font-bold text-xl">185 Irregular Verbs List by {order}</p>
        {list.map((verb) => (
          <VerbCard
            key={verb.id}
            whiteMode={whiteMode}
            verb={verb}
            currentLang={currentLang}
          />
        ))}
      </div>
    </>
  );
}

PopupEntireList.propTypes = {
  whiteMode: PropTypes.bool,
  verbsByFrequency: PropTypes.arrayOf(PropTypes.object),
  currentLang: PropTypes.object,
  verbsByAlphabetic: PropTypes.arrayOf(PropTypes.objetc),
};
