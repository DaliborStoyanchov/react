import { useState } from "react";

import classes from "./Accordion.module.css";
import { data } from "./data.ts";

const Accordion = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const toggleSingleSelection = (id: string) => {
    setSelected(id === selected ? null : id);
  };

  return (
    <div className={classes.wrapper}>
      <h2>Accordion</h2>
      <div className={classes.accordion}>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              className={classes.title}
              onClick={() => toggleSingleSelection(dataItem.id)}
            >
              <h4>{dataItem.question}</h4>
              <span>{selected === dataItem.id ? "-" : "+"}</span>
              {selected === dataItem.id && <div>{dataItem.answer}</div>}
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
