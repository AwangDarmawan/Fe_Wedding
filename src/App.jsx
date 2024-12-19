
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Awal from "./Pages/Awal";
import Kedua from "./Pages/Kedua";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Awal />} />
          <Route path="/undangan" element={<Kedua />} />
        </Routes>
        <ToastContainer theme="colored" />
      </BrowserRouter>
    </>
  )
}

export default App
