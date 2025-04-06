import { useState } from "react";
import MenuList from "./MenuList";

export default function MenuItem({ item }: any) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState<
    Record<string, boolean>
  >({});

  function handleToggleChildren(label: string) {
    setDisplayCurrentChildren((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  }

  console.log(displayCurrentChildren);

  return (
    <>
      <li>
        <div style={{ display: "flex", gap: "20px" }}>
          <p>{item.label}</p>
          {item && item.children && item.children.length ? (
            <span
              style={{ cursor: "pointer" }}
              onClick={() => handleToggleChildren(item.label)}
            >
              {displayCurrentChildren[item.label] ? "-" : "+"}
            </span>
          ) : null}
        </div>

        {item &&
        item.children &&
        item.children.length > 0 &&
        displayCurrentChildren[item.label] ? (
          <MenuList items={item.children} />
        ) : null}
      </li>
    </>
  );
}
