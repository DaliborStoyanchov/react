import { useEffect, useState } from "react";

type ScrollIndicatorProps = {
  url: string;
};

const ScrollIndicator = ({ url }: ScrollIndicatorProps) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchData(url: string) {
    try {
      setLoading(true);

      const response = await fetch(url);

      const data = await response.json();

      console.log(data);
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return <div>ScrollIndicator</div>;
};

export default ScrollIndicator;
