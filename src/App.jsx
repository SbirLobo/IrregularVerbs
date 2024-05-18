import "./App.css";
import { useState, useEffect } from "react";
import verbsByFrequency from "./data/verbsByFrequency";
import Title from "./components/Title";
import ListButton from "./components/ListButton";
import GoButton from "./components/GoButton";
import VerbTranslation from "./components/VerbTranslation";
import VerbCorrection from "./components/VerbCorrection";
import languages from "./data/languages";
import PopupParent from "./components/PopupParent";
import UpdateStyles from "./components/UpdateStyle";

function App() {
  // data : all verbs
  const [data, setData] = useState([
    verbsByFrequency.slice(0, 30),
    verbsByFrequency.slice(0, 60),
    verbsByFrequency.slice(0, 90),
    verbsByFrequency,
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
  // languages array with alpha2 code
  const [dataLang] = useState(languages);
  // current language selected : object example { language: "english", alpha2: "GB" }
  const [currentLang, setCurrentLang] = useState(dataLang[0]);
  // darkMode interruptor : bool (initialized with prefers-color-scheme)
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const [whiteMode, setWhiteMode] = useState(mq.matches ? false : true);
  // popup interruptors : bool
  const [popupParent, setPopupParent] = useState(false);
  const [popupLang, setPopupLang] = useState(false);
  const [popupMenu, setPopupMenu] = useState(false);
  const [popupAbout, setPopupAbout] = useState(false);
  const [popupContact, setPopupContact] = useState(false);
  const [popupEntireList, setPopupEntireList] = useState(false);

  useEffect(() => {
    setCurrentList(data[dataIndex]);
    setCorrectionDisplay(0);
  }, [dataIndex, data]);

  function reset() {
    setSelectedVerbIndex(-1);
    setCurrentList(data[dataIndex]);
    setCorrectionDisplay(0);
    setData([
      verbsByFrequency.slice(0, 30),
      verbsByFrequency.slice(0, 60),
      verbsByFrequency.slice(0, 90),
      verbsByFrequency,
    ]);
  }

  function shutDownAllPopup() {
    setPopupParent(false);
    setPopupAbout(false);
    setPopupLang(false);
    setPopupMenu(false);
    setPopupContact(false);
    setPopupEntireList(false);
  }

  useEffect(() => {
    UpdateStyles(whiteMode);
  }, [whiteMode]);

  useEffect(() => {
    if (
      popupAbout ||
      popupLang ||
      popupMenu ||
      popupContact ||
      popupEntireList
    ) {
      setPopupParent(true);
    }
  }, [popupAbout, popupLang, popupMenu, popupContact, popupEntireList]);

  return (
    <>
      <div className="flex flex-col items-center">
        <Title
          currentLang={currentLang}
          setPopupLang={setPopupLang}
          setPopupMenu={setPopupMenu}
          shutDownAllPopup={shutDownAllPopup}
        />
        <ListButton
          currentList={currentList}
          dataIndex={dataIndex}
          data={data}
          setDataIndex={setDataIndex}
          reset={reset}
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
          currentLang={currentLang}
        />
        <VerbCorrection
          selectedVerbIndex={selectedVerbIndex}
          correctionDisplay={correctionDisplay}
          currentVerb={currentVerb}
          whiteMode={whiteMode}
        />
      </div>
      <PopupParent
        popupLang={popupLang}
        setPopupLang={setPopupLang}
        dataLang={dataLang}
        setCurrentLang={setCurrentLang}
        reset={reset}
        whiteMode={whiteMode}
        popupMenu={popupMenu}
        setPopupMenu={setPopupMenu}
        setWhiteMode={setWhiteMode}
        setPopupAbout={setPopupAbout}
        popupAbout={popupAbout}
        popupContact={popupContact}
        setPopupContact={setPopupContact}
        popupEntireList={popupEntireList}
        setPopupEntireList={setPopupEntireList}
        popupParent={popupParent}
        verbsByFrequency={verbsByFrequency}
        currentLang={currentLang}
        shutDownAllPopup={shutDownAllPopup}
      />
    </>
  );
}

export default App;
