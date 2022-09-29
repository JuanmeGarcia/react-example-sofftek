import { createContext, FC, useContext, useState } from "react";

const DashBoardContext = createContext({
    isEditable: false,
    toggleEditable: (value: boolean) => {},
})

interface Props {
    children: React.ReactNode;
}

export const DashboardContextProvider: FC<Props> = ({children}):JSX.Element => {
    const [isEditable, setIsEditable] = useState(false)

    const toggleEditable = () => {
        setIsEditable(prevIsEditable => !prevIsEditable)
    }

    return(
        <DashBoardContext.Provider value={{
            isEditable,
            toggleEditable, 
        }}>
            {children}
        </DashBoardContext.Provider>
    )
}

export const useDashboardContext = () => useContext(DashBoardContext)