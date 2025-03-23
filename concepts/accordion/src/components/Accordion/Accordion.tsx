import { useState } from "react";

import classes from "./Accordion.module.css";
import { data } from "./data.ts";

const Accordion = () => {
  const [selectedId, setSelectedId] = useState<string | never | null>(null);
  const [isEnabledMultiSelection, setIsEnabledMultiSelection] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  const toggleSingleSelection = (id: string) => {
    setSelectedId(id === selectedId ? null : id);
  };

  const handleMuliSelection = (id: string) => {
    const multipleSelectedCopy = [...multipleSelected];

    const findIndexOfCurrentId = multipleSelectedCopy.indexOf(id);

    if (findIndexOfCurrentId === -1) {
      multipleSelectedCopy.push(id);
    } else {
      multipleSelectedCopy.splice(multipleSelectedCopy.indexOf(id), 1);
    }

    setMultipleSelected(multipleSelectedCopy);
  };

  return (
    <div className={classes.wrapper}>
      <h2>Accordion</h2>
      <button
        onClick={() => setIsEnabledMultiSelection(!isEnabledMultiSelection)}
      >
        Enable MultiSelection
      </button>
      <div className={classes.accordion}>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              className={classes.title}
              onClick={
                isEnabledMultiSelection
                  ? () => handleMuliSelection(dataItem.id)
                  : () => toggleSingleSelection(dataItem.id)
              }
            >
              <h4>{dataItem.question}</h4>
              <span>{selectedId === dataItem.id ? "-" : "+"}</span>
              {isEnabledMultiSelection
                ? multipleSelected.indexOf(dataItem.id) !== -1 && (
                    <div>{dataItem.answer}</div>
                  )
                : selectedId === dataItem.id && <div>{dataItem.answer}</div>}
            </div>
          ))
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
};

export default Accordion;
