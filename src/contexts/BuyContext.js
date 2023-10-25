import { createContext } from "react";
import useTimer from "../hooks/useTimer";
export const BuyContext = createContext();

const TIME_EXPIRE_BUY = 30;

export const BuyProvider = ({ children }) => {
    const timer = useTimer(TIME_EXPIRE_BUY)

    return (
        <BuyContext.Provider value={(timer)}>
            {children}
        </BuyContext.Provider>
    )
}
