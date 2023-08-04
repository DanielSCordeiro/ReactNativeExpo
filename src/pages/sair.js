import { useState } from 'react'
import { Platform } from 'react-native'
import { Contexto } from '../context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Main } from '../styles/style'
import { ContainerInfo, BoxInfo, InfoTitulo, InfoTexto } from '../styles/style-info'
import { BotaoLink } from '../functions/botaoNavegar'
import { Botao, BotaoTexto } from '../styles/style-botao'
import { Loading } from '../components/load'

export default function Sair() {
  const { setUser, setConectado } = Contexto()
  const [load, setLoad] = useState(false)

  // desconectar usuário
  async function Desconectar() {
    setLoad(true)

    // remover token local
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
      await AsyncStorage.removeItem('us')
    } else {
      localStorage.removeItem('us')
    }

    setUser({})
    setTimeout(() => {
      setConectado(false)
    }, 250)
  }

  if (load) {
    return <Loading texto='Desconectando...' />
  }

  return (
    <Main>
      <ContainerInfo>
        <BoxInfo>
          <InfoTitulo>Deseja continuar?</InfoTitulo>
          <InfoTexto>Ao desconectar você deverá informar sua credencial para um novo acesso.</InfoTexto>
        </BoxInfo>
        <Botao onPress={Desconectar}>
          <BotaoTexto>DESCONECTAR</BotaoTexto>
        </Botao>
        <BotaoLink page='Home' text='CANCELAR' />
      </ContainerInfo>
    </Main>
  )
}