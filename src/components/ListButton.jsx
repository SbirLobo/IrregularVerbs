import PropTypes from "prop-types";

export default function ListButton({
  currentList,
  dataIndex,
  data,
  setDataIndex,
  setSelectedVerbIndex,
  setCurrentList,
  setCorrectionDisplay,
  setData,
  verbsByCommon,
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
    setData([
      verbsByCommon.slice(0, 30),
      verbsByCommon.slice(0, 60),
      verbsByCommon.slice(0, 90),
      verbsByCommon,
    ]);
  }

  return (
    <>
      <div className="flex flex-row justify-around">
        <button onClick={listHandleClick} className="text-xl my-8 w-72">
          {currentList.length} most common verbs
        </button>
      </div>
    </>
  );
}

ListButton.propTypes = {
  currentList: PropTypes.arrayOf(PropTypes.object),
  dataIndex: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
  setDataIndex: PropTypes.func,
  setSelectedVerbIndex: PropTypes.func,
  setCurrentList: PropTypes.func,
  setCorrectionDisplay: PropTypes.func,
  setData: PropTypes.func,
  verbsByCommon: PropTypes.arrayOf(PropTypes.object),
};
