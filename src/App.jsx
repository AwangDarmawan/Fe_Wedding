
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Awal from "./Pages/Awal";
import Kedua from "./Pages/Kedua";
function App() {
  

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Awal />} />
          <Route path="/undangan" element={<Kedua />} />
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
