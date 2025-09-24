
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Awal from "./Pages/Awal";
import Kedua from "./Pages/Kedua";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AdminPage from "./Pages/AdminPage";
function App() {
  

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/undangan" element={<AdminPage />} />
          <Route path="/:nama" element={<Awal />} />
          <Route path="/" element={<Kedua />} />
        </Routes>
        <ToastContainer theme="colored" />
      </BrowserRouter>
    </>
  )
}

export default App
