export default function GoButton({
  correctionDisplay,
  setCorrectionDisplay,
  currentList,
  setCurrentVerb,
  setCurrentList,
  setSelectedVerbIndex,
}) {
  function newVerbSelection() {
    const tempsSelectedVerbIndex = Math.floor(
      Math.random() * currentList.length
    );
    const tempCurrentList = currentList;

    const tempCurrentVerb = tempCurrentList[tempsSelectedVerbIndex];
    const NewCurrentList = tempCurrentList.filter(
      (i) => i.base_form !== tempCurrentVerb.base_form
    );

    setCurrentVerb(tempCurrentVerb);
    setCurrentList(NewCurrentList);
    setSelectedVerbIndex(tempsSelectedVerbIndex);
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

  return (
    <>
      {currentList.length === 0 && correctionDisplay === 2 ? (
        <button className="text-xl my-8 text-pink-600 font-bold">
          GOOD GAME
        </button>
      ) : (
        <button onClick={goHandleClick} className="text-xl my-8">
          GO
        </button>
      )}
    </>
  );
}
