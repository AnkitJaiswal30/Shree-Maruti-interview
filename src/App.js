import "./styles.css";
import BoxContainer from "./components/BoxContainer";
import { useState } from "react";

const DUMMY_DATA = [
  { id: 1, selectedCount: 0 },
  { id: 2, selectedCount: 0 },
  { id: 3, selectedCount: 0 },
  { id: 4, selectedCount: 0 },
  { id: 5, selectedCount: 0 },
  { id: 6, selectedCount: 0 },
  { id: 7, selectedCount: 0 },
  { id: 8, selectedCount: 0 },
  { id: 9, selectedCount: 0 },
  { id: 10, selectedCount: 0 },
  { id: 11, selectedCount: 0 },
  { id: 12, selectedCount: 0 },
  { id: 13, selectedCount: 0 },
  { id: 14, selectedCount: 0 },
  { id: 15, selectedCount: 0 },
  { id: 16, selectedCount: 0 },
];

export default function App() {
  const [boxList, setBoxList] = useState(DUMMY_DATA);
  const [count, setCount] = useState(0);
  const handleClick = (id) => {
    const copyBoxList = [...boxList];
    const index = copyBoxList.findIndex((ele) => ele?.id === id);
    if (index !== -1) {
      if (!copyBoxList[index].selectedCount) {
        if (count < 2) {
          copyBoxList[index].selectedCount = count + 1;
          setCount(count + 1);
        } else {
          const firstRedIndex = copyBoxList.findIndex(
            (ele) => ele.selectedCount === 1
          );
          const secondRedIndex = copyBoxList.findIndex(
            (ele1) => ele1.selectedCount === 2
          );
          copyBoxList[secondRedIndex].selectedCount = count - 1;
          copyBoxList[firstRedIndex].selectedCount = 0;

          copyBoxList[index].selectedCount = count;
        }
      }
    }
    setBoxList(copyBoxList);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <BoxContainer boxList={boxList} handleClick={handleClick} />
    </div>
  );
}
