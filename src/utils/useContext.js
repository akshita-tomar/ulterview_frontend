import React, { createContext, useContext, useState } from 'react'

 const UserContext = createContext()

export const AppProvider  = ({children}) => {

  const [show,setShow]=useState(false)

  return (
  <UserContext.Provider  value={{ show, setShow }}>
   {children}
 </UserContext.Provider>
  )
}

export const useAppContext = () => {
    return useContext(UserContext);
  };

