import { useEffect } from 'react'
import { Platform } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Contexto } from '../context'
import AppRoute from './appRoute'
import AuthRoute from './authRoute'

export default function Routes() {
  const { conectado, setConectado, setUser } = Contexto()

  async function Verificar() {
    let logado
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
      logado = await AsyncStorage.getItem('us')
    } else {
      logado = localStorage.getItem('us') 
    }

    if (logado) {
      setConectado(true)
      setUser(JSON.parse(logado))
    }
  }

  useEffect(() => {
    Verificar()
  }, [])

  return conectado ? <AuthRoute /> : <AppRoute />
}