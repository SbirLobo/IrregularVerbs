import PropTypes from "prop-types";

export default function ListButton({
  currentList,
  dataIndex,
  data,
  setDataIndex,
  reset,
}) {
  function listHandleClick() {
    if (dataIndex === data.length - 1) {
      setDataIndex(0);
    } else {
      setDataIndex(dataIndex + 1);
    }
    reset();
  }

  return (
    <>
      <div className="flex flex-row justify-around">
        <button onClick={listHandleClick} className="mainButton">
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
  reset: PropTypes.func,
};
