import { useEffect, useState } from "react";
import classes from "./ImageSlider.module.css";

type ImageSliderProps = {
  url: string;
  limit: string;
  page: string;
};

export default function ImageSlider({
  url,
  limit = "5",
  page = "1",
}: ImageSliderProps) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl: string) {
    try {
      setLoading(true);
      const res = await fetch(`${getUrl}/list?page=${page}&limit=${limit}`);
      const data = await res.json();

      if (data) {
        setImages(data);
        setLoading(true);
      }
    } catch (error: any) {
      console.error("Error");

      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading data, please wait...</div>;
  }

  if (errorMsg !== null) {
    {
      return <div>Error occurred! {errorMsg}</div>;
    }
  }

  return (
    <div className={classes.container}>
      <h2>Image Slider</h2>
      <p>Lorem ipsum dolor sit.</p>
    </div>
  );
}
