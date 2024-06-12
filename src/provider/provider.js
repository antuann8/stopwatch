// import { createContext, useState } from "react";

// export const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const [hours, setHours] = useState("00");
//   const [minutes, setMinutes] = useState("00");
//   const [seconds, setSeconds] = useState("00");
//   const [isClicked, setIsClicked] = useState(false);

//   return (
//     <AppContext.Provider
//       value={{
//         hours,
//         setHours,
//         minutes,
//         setMinutes,
//         seconds,
//         setSeconds,
//         isClicked,
//         setIsClicked,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

import { createContext, useState } from "react";
import App from "../App";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  return (
    <AppContext.Provider
      value={{
        isRunning,
        setIsRunning,
        seconds,
        setSeconds,
        minutes,
        setMinutes,
        hours,
        setHours,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
