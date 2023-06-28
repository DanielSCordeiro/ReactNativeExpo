import { createContext, useState, useContext } from 'react'

const Context = createContext()

export const ContextProvider = ({children}) => {
  const [conectado, setConectado] = useState(false)
  const [cupom, setCupom] = useState(null)
  const [user, setUser] = useState(null)

  return (
    <Context.Provider value={{
      conectado, setConectado,
      cupom, setCupom,
      user, setUser
    }}>
      {children}
    </Context.Provider>
  )
}

export function Contexto() {
  return useContext(Context)
}