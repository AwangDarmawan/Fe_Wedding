import  { useEffect, useState } from 'react'
import { addpesan, DeletePesan, getData } from '../Service/Api'
import { toast } from "react-toastify";
// import { useParams } from 'react-router-dom';

function Delapan() {
  // const { nama } = useParams();
  // const messagesContainerRef = useRef(null);
  const [lihatData, setLihatData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    attendance: '',
  });

  // const messagesEndRef = useRef(null); 
 
  const FetchData = async () => {
  try{
   const ResultData = await getData();
   console.log("ww",ResultData)
   setLihatData(ResultData)
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};


useEffect(() => {
  FetchData();
}, []);

// useEffect(() => {
//   if (nama) {
//     setFormData((prev) => ({ ...prev, name: nama }));
//   }
// }, [nama]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    
       if (!formData.name || !formData.message || !formData.attendance) {
        toast.error("Semua data harus diisi!");
        return; 
      }

    try {
      const response = await addpesan(formData);
      console.log(response);  
      FetchData();
      setFormData({ name: '', message: '', attendance: '' });
    } catch (error) {
    
      console.error("Error:", error);
    }
  };

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};




const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini? ");
  if (!confirmDelete) {
    return; 
  }

  try {
    await DeletePesan(id); 
    FetchData(); 
    alert("Data berhasil dihapus!");
  } catch (error) {
    console.error("Error deleting message:", error);
    alert("Terjadi kesalahan saat menghapus data!");
  }
};


  return (
    <>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gold text-center mb-6 font-Montserrat">
          Say Something!
        </h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              *Name
            </label>
            <input
              type="text"
            id="name"
            name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2  outline-none text-black  dark:text-black font-Montserrat"
              placeholder="Your Name"
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700  mb-2">
              *Message
            </label>
            <input
              id="message"
           
            name="message"
              onChange={handleInputChange}
              rows="3"
              value={formData.message}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2  outline-none font-Montserrat dark:text-black " 
              placeholder="Write your message here..."
            ></input>
          </div>

          {/* Attendance Options */}
          <div>
            <label className="block text-sm font-medium text-gray-700  mb-2">
              *Attendance
            </label>
            <div className="flex justify-between">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  checked={formData.attendance === 'yes'}
                  onChange={handleInputChange}
                  className="form-radio text-pink-500"
                />
                <span className="ml-2 text-gray-700">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="attendance"
                  value="maybe"
                 
                checked={formData.attendance === 'maybe'}
                onChange={handleInputChange}
                  className="form-radio text-pink-500"
                />
                <span className="ml-2 text-gray-700">Maybe</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                checked={formData.attendance === 'no'}
                onChange={handleInputChange}
                  className="form-radio text-pink-500"
                />
                <span className="ml-2 text-gray-700">No</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-darkgold text-white px-6 py-2 rounded-lg shadow-md hover:bg-gold transition duration-300 font-Montserrat"
            >
              Send Now!
            </button>
          </div>
        </form>

        {/* Message List */}
      
        <div className="mt-8 ">
          <h3 className="text-lg font-semibold text-gold mb-4">Messages</h3>
          <ul className="space-y-4 max-h-80 overflow-y-auto"  >
            
          {lihatData.map((item) => (
            <li className="flex items-center justify-between bg-pink-50 px-4 py-3 rounded-lg" key={item.id}>
              <div >
                <p className="text-sm font-medium text-gray-700 ">{item.name}</p>
                <p className="text-sm text-gray-500">{item.message}</p>
              </div>
              
            <button
             onClick={() => handleDelete(item.id)}
              className={`text-sm px-3 py-1 rounded-full ${
                item.attendance === "yes"
                  ? "bg-green-100 text-green-700"
                  : item.attendance === "maybe"
                  ? "bg-yellow-100 text-yellow-700"
                  : item.attendance === "no"
                  ? "bg-red-100 text-red-700"
                  : ""
              }`}
            >
              {item.attendance}
            </button>
            {/* <button
                  onClick={() => handleDelete(item.id)} // Memanggil handleDelete dengan ID pesan
                  className="text-red-600 hover:text-red-800 font-medium text-sm"
                >
                  Delete
                </button> */}
            </li>
         ))}
            </ul>
        {/* <div ref={messagesEndRef} /> */}
       </div >
       </div>
    </>
  )
}

export default Delapan
