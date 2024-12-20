import Icon from '@mdi/react';
import { mdiSeat } from '@mdi/js';
import { useState } from 'react';
import { useLocation } from 'react-router'

function Seats(){
  const  [seats, setSeats] = useState(() => createSeats());
  let location = useLocation();

  function createSeats(){
    const newSeats = [];
    for(let i = 1; i <= 5; i++){
    for(let j = 65; j <= 70; j++){
      newSeats.push({ id: `${i}${String.fromCharCode(j)}`, status: true,});
    }
  }
    return newSeats;
  }

function seatLogic(seatId) {
  if(location.pathname == "/bookseats"){
    setSeats((prevSeats) =>
    prevSeats.map((seat) => {
      if (seat.id === seatId) {
        if (seat.status === true) {
          console.log(`Booking seat ${seatId}...`);
          return { ...seat, status: false };
        } 
        else {
          console.log(`Cancelling seat ${seatId}...`);
          return { ...seat, status: true };
        }
      } else {
        return seat;
      }
    })
  );
  }

}

  return(
    <div className="flex items-center justify-center">
          <ul className="grid grid-cols-6 place-items-center gap-y-3 gap-x-2 px-44 w-fit">
            {seats.map((seat) => (
              <button onClick={() => seatLogic(seat.id)} className="text-2xl text-center" key={seat.id}><Icon path={mdiSeat} 
              size={3}
              color={seat.status ? "green" : "red"}
              />{seat.id}</button>
            ))}
          </ul>
        </div>
  );
}

export default Seats;