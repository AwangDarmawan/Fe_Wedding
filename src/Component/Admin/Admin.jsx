
// import { useState } from "react";
// import { useTheme } from "../Contextmode/UseTheme";
// import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

// const Admin = () => {
//   const { darkMode, toggleDarkMode } = useTheme();
//   const [name, setName] = useState("");
//   const [submittedName, setSubmittedName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedName(name.trim());
//   };

//   const invitationLink = submittedName
//     ? `https://pernikahan-digital.vercel.app/${submittedName.toLowerCase()}`
//     : "";

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-900 p-6">
//       {/* Toggle Dark Mode */}
//       <button
//         onClick={toggleDarkMode}
//         className="relative inline-flex items-center cursor-pointer rounded-full w-12 h-6 bg-gray-300 dark:bg-gray-700 transition-all duration-300"
//       >
//         {/* Ikon Matahari dan Bulan */}
//         <span
//           className={`absolute text-lg left-1 transition-transform duration-300 ease-in-out transform ${
//             darkMode ? "" : ""
//           }`}
//         >
//           ☀️
//         </span>
//         <span
//           className={`absolute text-sm right-1 transition-transform duration-300 ease-in-out transform ${
//             darkMode ? "" : ""
//           }`}
//         >
//           🌙
//         </span>

//         <span className="sr-only">Toggle Dark Mode</span>

//         {/* Bulb */}
//         <span
//           className={`w-6 h-6 bg-white rounded-full transition-transform duration-300 ease-in-out transform ${
//             darkMode ? "translate-x-6" : "translate-x-1"
//           }`}
//         ></span>
//       </button>

//       {/* Card Form */}
//       <div className="max-w-3xl w-full bg-white shadow-md rounded-xl p-6 mt-6 dark:bg-gray-800">
//         <h2 className="text-2xl font-bold text-gold text-center mb-6 font-Montserrat">
//           Add Invitations
//         </h2>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300"
//             >
//               *Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none text-black dark:text-black font-Montserrat"
//               placeholder="Your Name"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gold text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition font-semibold"
//           >
//             Submit
//           </button>
//         </form>
//       </div>

//       {/* Hasil Pesan Undangan */}
//       {submittedName && (
//         <div className="max-w-3xl w-full mt-6 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md">
//           <p className="mb-4 whitespace-pre-line leading-relaxed text-gray-800 dark:text-gray-100 font-Montserrat">
//             Kepada Yth.  
//             Bapak/Ibu/Saudara/i <strong>{submittedName}</strong>  

//             {"\n\n"}Assalamualaikum Warahmatullahi Wabarakatuh{"\n\n"}
//             Tanpa mengurangi rasa hormat, perkenankan kami mengundang
//             Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara
//             pernikahan kami.

//             {"\n\n"}Berikut link undangan kami, untuk info lengkap dari acara,
//             bisa kunjungi :{" "}
//             <a
//               href={invitationLink}
//               className="text-blue-600 underline"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {invitationLink}
//             </a>

//             {"\n\n"}Merupakan suatu kebahagiaan bagi kami apabila
//             Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

//             {"\n\n"}Acara akan diselenggarakan pada:{"\n"}
//             🗓️ Hari/Tanggal : Minggu, 12 Januari 2025{"\n"}
//             ⏰ Waktu        : 09.00 WIB – selesai{"\n"}
//             📍 Tempat       : Kp. Halimun RT 003 RW 004, Desa Warudoyong,  
//             Kecamatan Cikalongkulon

//             {"\n\n"}Wassalamualaikum Warahmatullahi Wabarakatuh{"\n\n"}
//             Terima Kasih{"\n\n"}
//             Hormat kami,{"\n"}REJA & EVI
//           </p>
//           {/* Tombol Share Hanya Ikon */}
//         <div className="flex gap-4">
//           {/* WhatsApp */}
//           <a
//             href={`https://api.whatsapp.com/send?text=Halo,%20lihat%20undangan%20pernikahan%20kami:%20${invitationLink}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-all duration-300"
//           >
//             <FaWhatsapp className="text-white text-2xl" />
//           </a>

//           {/* Facebook */}
//           <a
//             href={`https://www.facebook.com/sharer/sharer.php?u=${invitationLink}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg transition-all duration-300"
//           >
//             <FaFacebook className="text-white text-2xl" />
//           </a>

//           {/* Twitter */}
//           <a
//             href={`https://twitter.com/intent/tweet?text=Lihat%20undangan%20pernikahan%20kami%20${invitationLink}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-400 hover:bg-blue-500 shadow-lg transition-all duration-300"
//           >
//             <FaTwitter className="text-white text-2xl" />
//           </a>

//           {/* Instagram */}
//           <a
//             href={`https://www.instagram.com/`} 
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-600 shadow-lg transition-all duration-300"
//           >
//             <FaInstagram className="text-white text-2xl" />
//           </a>
//         </div>


                                                                 
//         </div>
//       )}
//     </div>
//   );
// };

// export default Admin;
import { useState } from "react";
import { useTheme } from "../Contextmode/UseTheme";
import Form from "./Form";
import Preview from "./Preview";
import { generateInvitationLink, generateShareText } from "./Share";

const Admin = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name.trim());
  };

  const invitationLink = generateInvitationLink(submittedName);
  const shareText = generateShareText(submittedName, invitationLink);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-900 p-6">
      {/* Toggle Dark Mode */}
      <button
        onClick={toggleDarkMode}
        className="relative inline-flex items-center cursor-pointer rounded-full w-12 h-6 bg-gray-300 dark:bg-gray-700 transition-all duration-300"
      >
        <span className="absolute text-lg left-1 transition-transform duration-300 ease-in-out transform">
          ☀️
        </span>
        <span className="absolute text-sm right-1 transition-transform duration-300 ease-in-out transform">
          🌙
        </span>
        <span className="sr-only">Toggle Dark Mode</span>
        <span
          className={`w-6 h-6 bg-white rounded-full transition-transform duration-300 ease-in-out transform ${
            darkMode ? "translate-x-6" : "translate-x-1"
          }`}
        ></span>
      </button>

      {/* Form */}
      <Form name={name} setName={setName} handleSubmit={handleSubmit} />

      {/* Preview */}
      {submittedName && (
        <Preview
          submittedName={submittedName}
          invitationLink={invitationLink}
          shareText={shareText}
        />
      )}
    </div>
  );
};

export default Admin;
