import module from "./TikTakToe.module.css";

function Square({ value }) {
  return <button className={module.square}>{value}</button>;
}

export function TikTakToe() {
  return (
    <div className={module.container}>
      <div className={module.row}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={module.row}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={module.row}>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

export default TikTakToe;
