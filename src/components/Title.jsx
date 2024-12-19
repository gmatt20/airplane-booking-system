function Title( {titles} ){
  return(
    <>
      <div className="mb-3">
          <h1 className="font-bold text-2xl">{titles.title}</h1>
          <p>{titles.subtitle}</p>
        </div>
    </>
  );
}

export default Title;