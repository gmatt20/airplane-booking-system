import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AllSeats from "./pages/AllSeats.jsx";
import ChangeSeats from "./pages/ChangeSeat.jsx";
import CancelSeats from "./pages/CancelSeat.jsx";
import BookSeats from "./pages/BookSeat.jsx";
import AvailableSeats from "./pages/AvailableSeats.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/allseats" element={<AllSeats />}></Route>
        <Route path="/changeseats" element={<ChangeSeats />}></Route>
        <Route path="/cancelseats" element={<CancelSeats />}></Route>
        <Route path="/bookseats" element={<BookSeats />}></Route>
        <Route path="/availableseats" element={<AvailableSeats />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
