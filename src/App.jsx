import "./App.css";
import { useState, useEffect } from "react";
import verb176 from "./data/verb176";
import verb90 from "./data/verb90";
import verb60 from "./data/verb60";
import verb30 from "./data/verb30";

function App() {
  // data : all verbs
  const [data, setData] = useState([verb30, verb60, verb90, verb176]);
  // correctionDisplay (0: start, 1: translation, 2: correction) = display of the correction
  const [correctionDisplay, setCorrectionDisplay] = useState(0);
  //selectedVerbIndex = index of the verb chosen by chance
  const [selectedVerbIndex, setSelectedVerbIndex] = useState(-1);
  // dataIndex = index of the data list
  const [dataIndex, setDataIndex] = useState(0);
  // current data list of verbs : array
  const [currentList, setCurrentList] = useState(data[0]);
  // current verb : object
  const [currentVerb, setCurrentVerb] = useState({});

  function newVerbSelection() {
    const tempsSelectedVerbIndex = Math.floor(
      Math.random() * currentList.length
    );
    const tempCurrentList = currentList;
    // const tempCurrentVerb = tempCurrentList.splice(tempsSelectedVerbIndex, 1);
    const tempCurrentVerb = tempCurrentList[tempsSelectedVerbIndex];
    const NewCurrentList = tempCurrentList.filter(
      (i) => i.base_form !== tempCurrentVerb.base_form
    );
    setCurrentVerb(tempCurrentVerb[0]);
    setCurrentVerb(tempCurrentVerb);
    setCurrentList(NewCurrentList);
    setSelectedVerbIndex(tempsSelectedVerbIndex);
  }

  function listHandleClick() {
    if (dataIndex === data.length - 1) {
      setDataIndex(0);
    } else {
      setDataIndex(dataIndex + 1);
    }
    setSelectedVerbIndex(-1);
    setCurrentList(data[dataIndex]);
    setCorrectionDisplay(0);
    setData([verb30, verb60, verb90, verb176]);
  }

  function goHandleClick() {
    if (correctionDisplay === 0) {
      newVerbSelection();
    }
    if (correctionDisplay === 2) {
      setCorrectionDisplay(1);
      newVerbSelection();
    } else {
      setCorrectionDisplay(correctionDisplay + 1);
    }
  }

  useEffect(() => {
    setCurrentList(data[dataIndex]);
    setCorrectionDisplay(0);
  }, [dataIndex, data]);

  return (
    <>
      <div className="flex flex-col"></div>
      <h1 className="text-3xl font-bold p-4">Irregular Verbs</h1>
      <div className="flex flex-row justify-around">
        {currentList.length === 176 ? (
          <button onClick={listHandleClick} className="text-xl my-8 w-72">
            All of the {currentList.length} verbs
          </button>
        ) : (
          <button onClick={listHandleClick} className="text-xl my-8 w-72">
            {currentList.length} most common verbs
          </button>
        )}
      </div>
      <div className="flex flex-col">
        {currentList.length === 0 && correctionDisplay === 2 ? (
          <button className="text-xl my-8 text-pink-600 font-bold">
            GOOD GAME
          </button>
        ) : (
          <button onClick={goHandleClick} className="text-xl my-8">
            GO
          </button>
        )}

        {selectedVerbIndex !== -1 && (
          <p className="text-xl my-8 text-yellow-300">
            {currentVerb.french_translation}
          </p>
        )}
      </div>
      {selectedVerbIndex !== -1 && correctionDisplay === 2 && (
        <div className="flex flex-col MY-8">
          <p className="text-xl">{currentVerb.base_form}</p>
          <p className="text-xl">{currentVerb.past_tense}</p>
          <p className="text-xl">{currentVerb.past_participle}</p>
        </div>
      )}
    </>
  );
}

export default App;
