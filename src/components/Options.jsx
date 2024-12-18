import { Outlet, Link } from "react-router-dom";

function Options( {buttonLabels} ){
  return(
    <>
      <ul className="flex gap-5 items-center">
          {buttonLabels.map((label, index) => (
            <li key={index}>
              <Link to={label.link}>
                <button className="px-4 py-2 bg-sky-800 rounded-xl hover:cursor-pointer">{label.label}</button>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Options;