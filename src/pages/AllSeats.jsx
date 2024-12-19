import Header from "../components/Header";
import Icon from '@mdi/react';
import { mdiSeat } from '@mdi/js';

function AllSeats(){
  let seats = [];

  for(let i = 1; i <= 5; i++){
    for(let j = 65; j <= 70; j++){
      let seat = { id: `${i}${String.fromCharCode(j)}`, status: true,};
      seats.push(seat);
    }
  }

  return(
    <>
      <Header></Header>
      <div className="p-5">
        <h1>View All Seats</h1>
        <ul className="grid grid-cols-6 place-items-center gap-x-3 px-44">
          {seats.map((seat) => (
            <li className="flex w-fit" key={seat.id}><Icon path={mdiSeat} 
            size={1}
            color={seat.status ? "green" : "red"}
            />{seat.id}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AllSeats;