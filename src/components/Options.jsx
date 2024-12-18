function Options( {buttonLabels} ){
  return(
    <ul className="flex gap-5 items-center">
      {buttonLabels.map((label, index) => (
        <li key={index}>
          <button className="px-4 py-2 bg-sky-800 rounded-xl">{label}</button>
        </li>
      ))}
    </ul>
  );
}

export default Options;