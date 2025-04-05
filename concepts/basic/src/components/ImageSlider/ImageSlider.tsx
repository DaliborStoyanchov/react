import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import styles from "./ImageSlider.module.css";

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

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className={styles.container}>
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className={`${styles.arrow} ${styles.arrowLeft}`}
      />
      {images && images.length
        ? images.map((imageItem, idx) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === idx
                  ? styles.currentImage
                  : `${styles.currentImage} ${styles.hideCurrentImage}`
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className={`${styles.arrow} ${styles.arrowRight}`}
      />
      <span className={styles.circleIndicators}>
        {images && images.length
          ? images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={
                  currentSlide === idx
                    ? styles.currentIndicator
                    : `${styles.currentIndicator} ${styles.inactiveIndicator}`
                }
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
