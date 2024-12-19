import Icon from '@mdi/react';
import { mdiSeat } from '@mdi/js';

function Seats(){
  let seats = [];

  for(let i = 1; i <= 5; i++){
    for(let j = 65; j <= 70; j++){
      let seat = { id: `${i}${String.fromCharCode(j)}`, status: true,};
      seats.push(seat);
    }
  }

  return(
    <div className="flex items-center justify-center">
          <ul className="grid grid-cols-6 place-items-center gap-y-3 gap-x-2 px-44 w-fit">
            {seats.map((seat) => (
              <li className="text-2xl text-center" key={seat.id}><Icon path={mdiSeat} 
              size={3}
              color={seat.status ? "green" : "red"}
              />{seat.id}</li>
            ))}
          </ul>
        </div>
  );
}

export default Seats;