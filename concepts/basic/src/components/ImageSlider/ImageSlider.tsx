import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
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
        setLoading(false);
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

  if (loading) {
    return <div>Loading data, please wait...</div>;
  }

  if (errorMsg !== null) {
    {
      return <div>Error occurred! {errorMsg}</div>;
    }
  }

  function handleClick() {}

  return (
    <div className={classes.container}>
      <BsArrowLeftCircleFill className="arrow arrow-left" />
      {images && images.length
        ? images.map((imageItem) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className="current-image"
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleClick}
      />
      <span>
        {images && images.length
          ? images.map((_, index) => (
              <button key={index} className="current-indicator"></button>
            ))
          : null}
      </span>
    </div>
  );
}
