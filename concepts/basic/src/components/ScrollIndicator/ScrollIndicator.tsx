import { useEffect, useState } from "react";

import classes from "./ScrollIndicator.module.css";

type ScrollIndicatorProps = {
  url: string;
};

const ScrollIndicator = ({ url }: ScrollIndicatorProps) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(url: string) {
    try {
      setLoading(true);

      const response = await fetch(url);

      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);

        setLoading(false);
      }
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.message);
    }
  }

  function handleScrollPercentage() {
    const scrollLength =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrollLength / height) * 100);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  if (errorMessage) {
    return <div>Error!, {errorMessage}</div>;
  }

  if (loading) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <div className={classes.topContainer}>
        <h1>Custom Scroll Indicator</h1>
        <div className={classes.scrollProgressTrackingContainer}>
          <div
            className={classes.currentProgressBar}
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className={classes.dataContainer}>
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;
