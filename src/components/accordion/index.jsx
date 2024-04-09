// Importing necessary modules and resources
import { useState } from "react"; // Importing useState hook from React
import data from "./data"; // Importing data array from a separate file
import "./styles.css"; // Importing CSS styles for the component

// Declaring and exporting the Accordion component
export default function Accordion() {
  // Defining state variables using useState hook
  const [selected, setSelected] = useState(null); // State variable for selected item
  const [enableMultiSelection, setEnableMultiSelection] = useState(false); // State variable for multi-selection mode
  const [multiple, setMultiple] = useState([]); // State variable for multiple selected items

  // Function to handle selection of a single item in the accordion
  function handleSingleSelection(getCurrentId) {
    // Toggles selection of the clicked item
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  // Function to handle selection of multiple items in the accordion
  function handleMultiSelection(getCurrentId) {
    // Creates a copy of the 'multiple' array
    let copyMultiple = [...multiple];
    // Finds the index of the clicked item in the 'multiple' array
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    // If the clicked item is not already selected, adds it to the 'multiple' array
    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    // If the clicked item is already selected, removes it from the 'multiple' array
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    // Updates the 'multiple' state with the modified array
    setMultiple(copyMultiple);
  }

  // Rendering the component JSX
  return (
    <div className="wrapper">
      {" "}
      {/* Wrapper div for styling */}
      {/* Button to toggle multi-selection mode */}
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      {/* Container for the accordion items */}
      <div className="accordion">
        {/* Mapping over the 'data' array to render each item. **This is a test mode for commit you can delete this section later on */}
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              {/* Clickable title for each item */}
              <div
                // Event handler for title click, based on selection mode. **This is a test mode for commit you can delete this section later on
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id) // Multi-selection mode
                    : () => handleSingleSelection(dataItem.id) // Single-selection mode
                }
                className="title" // CSS class for styling. **This is a test mode for commit you can delete this section later on
              >
                {/* Question text */}
                <h4>{dataItem.question}</h4>
                {/* Plus sign icon */}
                <span>+</span>
              </div>
              {/* Render the answer content based on selection mode. **This is a test mode for commit you can delete this section later on */}
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>
            No data found. Please try again or put some data in the data file
          </div>
        )}
      </div>
    </div>
  );
}
