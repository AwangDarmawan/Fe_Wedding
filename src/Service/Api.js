import axios from "axios";
import { toast } from "react-toastify";
const baseUrl = import.meta.env.VITE_BASE_URL;
console.log("Base URL:", baseUrl);


export const getData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/wedding`);
      console.log("test",response.data)
      return response.data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
  };

  export const addpesan = async (formData) => {
    try {
      // Memastikan nilai attendance valid
      if (!['yes', 'maybe', 'no'].includes(formData.attendance)) {
        toast.error("Attendance value is invalid.");
        return;
      }
  
      const response = await axios.post(`${baseUrl}/wedding`, formData);
      toast.success("berhasil");
      return response.data;
    } catch (error) {
      toast.error("An error occurred while submitting.");
      throw error;
    }
  };

  // export const DeletePesan = async (id) => {
  //   try {
  //     const response = await axios.delete(`${baseUrl}/wedding/${id}`)
  //     toast.success("data berhasil di hapus")
  //     return response.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  
  export const DeletePesan = async (id) => {
    try {
      const response = await axios.delete(`${baseUrl}/wedding/${id}`)
      toast.success("data berhasil di hapus")
      return response.data;
    } catch (error) {
      toast.error("An error occurred while submitting.");
      throw error;
    }
  };