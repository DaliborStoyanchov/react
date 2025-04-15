import Tabs from "./Tabs";

const RandomComponent = () => {
  return <p>Some Random Content</p>;
};

const TabTest = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is the content for the Tab1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is the content for the Tab2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  const handleChange = (currentTabIndex: number) => {
    console.log(currentTabIndex);
  };

  return <Tabs tabsContent={tabs} onChange={handleChange}></Tabs>;
};

export default TabTest;
