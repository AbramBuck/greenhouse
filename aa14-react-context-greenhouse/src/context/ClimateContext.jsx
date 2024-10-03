import { createContext, useState } from 'react';

export const ClimateContext = createContext();

export default function ClimateProvider({ children }) {
    const [temperature, setTemperature] = useState(50); // Initial temperature
    const [humidity, setHumidity] = useState(40); // Initial humidity


    return (
      <ClimateContext.Provider value={{ temperature, setTemperature, humidity, setHumidity }}>
        {children}
      </ClimateContext.Provider>
    );
  }
  