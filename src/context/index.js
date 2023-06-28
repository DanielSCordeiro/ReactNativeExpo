import { createContext, useState, useContext } from 'react'

const Context = createContext()

export const ContextProvider = ({children}) => {
  const [conectado, setConectado] = useState(false)
  const [page, setPage] = useState('Scan')
  const [cupom, setCupom] = useState('')
  const [user, setUser] = useState('')

  return (
    <Context.Provider value={{
      conectado, setConectado,
      page, setPage,
      user, setUser,
      cupom, setCupom
    }}>
      {children}
    </Context.Provider>
  )
}

export function Contexto() {
  return useContext(Context)
}