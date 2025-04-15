import { useState } from "react";
import classes from "./Tabs.module.css";

type TabsProps = {
  tabsContent: any;
  onChange: any;
};

const Tabs = ({ tabsContent, onChange }: TabsProps) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleOnClick = (index: number) => {
    console.log("clicked");
    setCurrentTabIndex(index);
    onChange(index);
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.heading}>
        {tabsContent.map((tabItem: any, index: number) => (
          <div
            className={`${classes.tabItem} ${
              currentTabIndex === index ? classes.active : ""
            }`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className={classes.label}>{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className={classes.content}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
