import React from 'react'
interface Props {
    children: React.ReactNode
}

export const Form: React.FC<Props> = ({children}) => {
    return (
        <form 
            className='form'
        >
            {children}
        </form>
    )
}
