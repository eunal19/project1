import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);

    function handleMultiSelection(getCurrentId) {
      let copyMultiple = [...multiple];
      const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

      console.log(findIndexOfCurrentId);
      if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
      else copyMultiple.splice(findIndexOfCurrentId, 1);

      setMultiple(copyMultiple);
    }

    console.log(selected, multiple);
    return (
      <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
          Enable Multi Selection
        </button>
        <div className="accordion">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title">
                  <h4>{dataItem.question}</h4>
                  <span>+</span>
                </div>
                {selected === dataItem.id ||
                multiple.indexOf(dataItem.id) !== -1 ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null}
              </div>
            ))
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
    );
  }
}
