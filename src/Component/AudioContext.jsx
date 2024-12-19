// import React, { createContext, useContext, useRef, useState } from "react";
// import musik from '../assets/Img/audio/pernikahan.mp3'

// const AudioContext = createContext();

// export const AudioProvider = ({ children }) => {
//   const audioRef = useRef();
//   const [isPlaying, setIsPlaying] = useState(false); // Status audio
//   const [currentTime, setCurrentTime] = useState(0); // Posisi audio

//   const playAudio = () => {
//     if (audioRef.current) {
//       audioRef.current.currentTime = currentTime; // Lanjutkan dari posisi terakhir
//       audioRef.current.play();
//       setIsPlaying(true);
//     }
//   };

//   const pauseAudio = () => {
//     if (audioRef.current) {
//       setCurrentTime(audioRef.current.currentTime); // Simpan posisi terakhir
//       audioRef.current.pause();
//       setIsPlaying(false);
//     }
//   };

//   return (
//     <AudioContext.Provider
//       value={{ audioRef, isPlaying, playAudio, pauseAudio }}
//     >
//       <audio ref={audioRef} src={musik} loop hidden />
//       {children}
//     </AudioContext.Provider>
//   );
// };

// export const useAudio = () => useContext(AudioContext);
