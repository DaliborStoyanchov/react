import { useState } from "react";
import styles from "./LoadMore.module.css";

export default function LoadMore() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <h1 className={styles.container}>Load More</h1>
    </>
  );
}
