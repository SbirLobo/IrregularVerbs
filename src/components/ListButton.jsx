export default function ListButton({
  currentList,
  dataIndex,
  data,
  setDataIndex,
  setSelectedVerbIndex,
  setCurrentList,
  setCorrectionDisplay,
  setData,
  verb30,
  verb60,
  verb90,
  verb176,
}) {
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

  return (
    <>
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
    </>
  );
}
