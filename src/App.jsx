import "./App.css";
import { useState, useEffect } from "react";
import verb176 from "./data/verb176";
import verb90 from "./data/verb90";
import verb60 from "./data/verb60";
import verb30 from "./data/verb30";

function App() {
  const [switchCorrection, setSwitchCorrection] = useState(0);
  const [selectedVerbIndex, setSelectedVerbIndex] = useState(-1);
  const [data] = useState([verb30, verb60, verb90, verb176]);
  const [dataIndex, setDataIndex] = useState(0);
  const [dataName, setDataName] = useState("30 verbs");
  const [currentList, setCurrentList] = useState(data[0]);

  function listHandleClick() {
    if (dataIndex === data.length - 1) {
      setDataIndex(0);
    } else {
      setDataIndex(dataIndex + 1);
    }
  }

  function goHandleClick() {
    if (switchCorrection === 0) {
      setSelectedVerbIndex(Math.floor(Math.random() * data[dataIndex].length));
    }
    if (switchCorrection != 2) {
      setSwitchCorrection(switchCorrection + 1);
    } else {
      setSwitchCorrection(1);
      setSelectedVerbIndex(Math.floor(Math.random() * data[dataIndex].length));
    }
  }

  useEffect(() => {
    if (dataIndex === 0) {
      setDataName("30 verbs");
    } else if (dataIndex === 1) {
      setDataName("60 verbs");
    } else if (dataIndex === 2) {
      setDataName("90 verbs");
    } else if (dataIndex === 3) {
      setDataName("176 verbs");
    }
    setCurrentList(data[dataIndex]);
  }, [dataIndex, data]);

  return (
    <>
      <div className="flex flex-col"></div>
      <h1 className="text-3xl font-bold p-4">Irregular Verbs</h1>
      <div className="flex flex-row justify-around">
        <button onClick={listHandleClick} className="text-xl my-8">
          {dataName}
        </button>
      </div>
      <div className="flex flex-col">
        <button onClick={goHandleClick} className="text-xl my-8">
          GO
        </button>
        {selectedVerbIndex !== -1 && (
          <p className="text-xl my-8">
            {currentList[selectedVerbIndex].french_translation}
          </p>
        )}
      </div>
      {switchCorrection === 2 && (
        <div className="flex flex-col MY-8">
          <p className="text-xl">{currentList[selectedVerbIndex].base_form}</p>
          <p className="text-xl">{currentList[selectedVerbIndex].past_tense}</p>
          <p className="text-xl">
            {currentList[selectedVerbIndex].past_participle}
          </p>
        </div>
      )}
    </>
  );
}

export default App;
