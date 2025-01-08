/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState } from "react";


export const MedicineContext = createContext();

export function MedicineProvider({ children }) {
  const [medicine, setMedicine] = useState({
    medicine: "",
    results: [],
  });

  return (
    <MedicineContext.Provider value={{
      medicine,
      setMedicine,
    }}>
      {children}
    </MedicineContext.Provider>
  );
}