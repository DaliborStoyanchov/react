import { useRef } from "react";

const ScrollToSection = () => {
  const ref = useRef();

  const data = [
    {
      label: "first card",
      style: { width: "70%", height: "500px", background: "red" },
    },
    {
      label: "second card",
      style: { width: "70%", height: "500px", background: "blue" },
    },
    {
      label: "third card",
      style: { width: "70%", height: "500px", background: "green" },
    },
    {
      label: "forth card",
      style: { width: "70%", height: "500px", background: "grey" },
    },
    {
      label: "fifth card",
      style: { width: "70%", height: "500px", background: "brown" },
    },
  ];

  function handleScrollToSection() {
    let position = ref.current.getBoundingClientRect().top;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }

  console.log(ref);

  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button onClick={handleScrollToSection}>
        Click To Scroll to a Section
      </button>
      {data.map((item) => (
        <div
          style={item.style}
          key={item.label}
          ref={item.label === "third card" ? ref : null}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default ScrollToSection;
