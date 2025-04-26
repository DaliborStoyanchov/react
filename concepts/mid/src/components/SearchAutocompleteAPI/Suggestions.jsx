const Suggestions = ({ data, handleClick }) => {
  return (
    <ul>
      {data && data.length
        ? data.map((item, idx) => (
            <li key={idx} onClick={handleClick}>
              {item}
            </li>
          ))
        : null}
    </ul>
  );
};

export default Suggestions;
