import React from "react";
import { createContext, useContext, useState } from "react";
import Alert from "../../components/overlays/Alert";
import { type AlertContextType, type AlertType } from "../../types/global";

const AlertContext = createContext<AlertContextType | null>(null)

export const useAlert = () => {
    const context = useContext(AlertContext);
    if (!context) throw new Error("useAlert must be used within a AlertProvider");
    return context
}


export const AlertContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [alert, setAlert] = useState<{ message: string, type: AlertType } | null>(null)
    const showAlert = (message: string, type: AlertType) => setAlert({ message, type })



    return (
        <AlertContext.Provider value={{ showAlert }}>
            {children}
            {alert && (
                <Alert
                    state={alert.type}
                    message={alert.message}
                    setHandler={setAlert}
                    position="top-center"
                />
            )}
        </AlertContext.Provider>
    )
}