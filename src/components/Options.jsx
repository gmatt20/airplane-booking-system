function Options( {buttonLabels} ){
  return(
    <ul className="flex gap-5">
      {buttonLabels.map((label, index) => (
        <li key={index}>
          <button>{label}</button>
        </li>
      ))}
    </ul>
  );
}

export default Options;