function Card( {destinations} ){
  return(
    <>
    <article>
        <div className="flex justify-center gap-5 flex-column flex-wrap">
            {destinations.map((element, index) => (
              <div key={index} className="mb-2 h-56 w-96 min-w-60 max-h-40 p-2 rounded-lg text-white shadow-[inset_0_80px_13px_-15px_rgba(17,15,79,0.5)] drop-shadow-lg grow"
              style={{
                backgroundImage: `url(${element.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              >
                <h1 className="font-extrabold">{element.city}</h1>
                <p className="text-sm">Average price: ${element.price}</p>
              </div>
            ))}
        </div>
      </article>
    </>
  );
}

export default Card;