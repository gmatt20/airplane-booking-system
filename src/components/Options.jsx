import { Link, useLocation } from "react-router-dom";

function Options( {buttonLabels} ){
  const location = useLocation();

  console.log(location);
  
  return(
    <>
      <ul className="flex gap-1 items-center flex-wrap">
          {buttonLabels.map((label, index) => (
            <li key={index}>
              <Link to={label.link}>
                <button className={`px-4 py-2 rounded-xl hover:cursor-pointer w-36 h-10 ${
                  location.pathname === label.link ? "bg-opacity text-white outline" : "hover:bg-opacity"
                }`}>{label.label}</button>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Options;