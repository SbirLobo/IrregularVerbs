import "./App.css";
import { useState, useEffect } from "react";
import verbsByCommon from "./data/verbsByCommon";
import Title from "./components/Title";
import ListButton from "./components/ListButton";
import GoButton from "./components/GoButton";
import VerbTranslation from "./components/VerbTranslation";
import VerbCorrection from "./components/VerbCorrection";

function App() {
  // data : all verbs
  const [data, setData] = useState([
    verbsByCommon.slice(0, 30),
    verbsByCommon.slice(0, 60),
    verbsByCommon.slice(0, 90),
    verbsByCommon,
  ]);
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

  useEffect(() => {
    setCurrentList(data[dataIndex]);
    setCorrectionDisplay(0);
  }, [dataIndex, data]);

  return (
    <>
      <div className="flex flex-col items-center">
        <Title />
        <ListButton
          currentList={currentList}
          dataIndex={dataIndex}
          data={data}
          setDataIndex={setDataIndex}
          setSelectedVerbIndex={setSelectedVerbIndex}
          setCurrentList={setCurrentList}
          setCorrectionDisplay={setCorrectionDisplay}
          setData={setData}
          verbsByCommon={verbsByCommon}
        />
        <GoButton
          correctionDisplay={correctionDisplay}
          setCorrectionDisplay={setCorrectionDisplay}
          currentList={currentList}
          setCurrentVerb={setCurrentVerb}
          setCurrentList={setCurrentList}
          setSelectedVerbIndex={setSelectedVerbIndex}
        />
        <VerbTranslation
          selectedVerbIndex={selectedVerbIndex}
          currentVerb={currentVerb}
        />
        <VerbCorrection
          selectedVerbIndex={selectedVerbIndex}
          correctionDisplay={correctionDisplay}
          currentVerb={currentVerb}
        />
      </div>
    </>
  );
}

export default App;
