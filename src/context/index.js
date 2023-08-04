import { createContext, useState, useContext } from 'react'

const Context = createContext()

export const ContextProvider = ({children}) => {
  const [conectado, setConectado] = useState(false)
  const [user, setUser] = useState({})
  const [cupom, setCupom] = useState(null)
  const API_URL = 'https://danielcordeiro.com.br/app'
  const IMG_URL = 'https://danielcordeiro.com.br/cupons'

  return (
    <Context.Provider value={{
      conectado, setConectado,
      cupom, setCupom,
      user, setUser,
      IMG_URL,
      API_URL
    }}>
      {children}
    </Context.Provider>
  )
}

export function Contexto() {
  return useContext(Context)
}