import "./BoxContainer.css";

export default BoxContainer = ({ boxList, handleClick }) => {
  return (
    <div className="container">
      {boxList.map((item) => {
        return (
          <div
            key={item?.id}
            className={`box ${
              item?.selectedCount !== 0 ? "selectedBox" : "unSelectedBox"
            }`}
            onClick={() => {
              handleClick(item?.id);
            }}
          ></div>
        );
      })}
    </div>
  );
};
