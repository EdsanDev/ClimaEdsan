import { createContext, useContext, useState } from "react";
import { CloudRequest } from "../api/Cloud";

const CloudContext = createContext();

export const useCloud = () => {
  const context = useContext(CloudContext);
  if (!context) {
    throw new Error("useTaks must be used within a TaskProvider");
  }
  return context;
};
export function CloudProvider({ children }) {
  const [datosClima, setDatosClima] = useState(null);
  const [error, setError] = useState(null);

  const SearchCloud = async (name) => {
    setError(null);
    try {
      const res = await CloudRequest(name);
      setDatosClima({
        temp: res.data.main.temp,
        humedity: res.data.main.humidity,
        temp_max: res.data.main.temp_max,
        temp_min: res.data.main.temp_min,
        name: res.data.name,
      });
    } catch (error) {
        setError("No se pudo obtener la información del clima.");
        console.log(error);
    }
  };
  return (
    <CloudContext.Provider
      value={{
        SearchCloud,
        datosClima,
        error,
      }}
    >
      {children}
    </CloudContext.Provider>
  );
}
