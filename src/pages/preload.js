import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Contexto } from '../context'
import { Loading } from '../components/load'

export default function Preload() {
  const { API_URL, user, setTotal } = Contexto()
  const navigation = useNavigation()

  // carregar informações
  async function Carregar() {
    try {
      let response = await fetch(`${API_URL}/info`, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({t: user.token})
      })
      let json = await response.json()
      setTotal(json)
    } catch (error) {
      setTotal({info: 'FALHA AO OBTER AS INFORMAÇÕES'})
    }
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}]
      })
    }, 250)
  }

  useEffect(() => {
    Carregar()
  }, [])

  return (
    <Loading texto='Aguarde...' />
  )
}