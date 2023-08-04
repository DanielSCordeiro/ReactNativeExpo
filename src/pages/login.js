import { useState } from 'react'
import { Keyboard, Linking, Platform } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { Contexto } from '../context'
import { Main } from '../styles/style'
import { Container, KeyboardView, Input } from '../styles/style-login'
import { ContainerInfo, BoxInfo, InfoTitulo, InfoTexto } from '../styles/style-info'
import { Botao, BotaoTexto } from '../styles/style-botao'
import { Loading } from '../components/load'
import { Daniel } from '../svg/daniel'
import { ShowdePremios } from '../svg/showdepremios'

export default function Login() {
  const navigation = useNavigation()
  const { API_URL, setUser, setConectado } = Contexto()
  const [load, setLoad] = useState(false)
  const [erro, setErro] = useState('')
  const [credencial, setCredencial] = useState('')

  // abrir whastapp
  function OpenWhatsapp() {
    const tel = 'whatsapp://send?phone=5533991279540&text=Gostaria%20de%20atendimento%20para%20o%20cadastro%20de%20cupons.'
    Linking.openURL(tel)
  }

  // validar credencial
  async function ValidarCredencial() {
    Keyboard.dismiss()
    setLoad(true)
    if (credencial.length === 6) {
      // validar a credencial
      try {
        let response = await fetch(`${API_URL}/login`, {
          method: 'POST',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({codigo: credencial})
        })
        let json = await response.json()

        if (json.error) {
          setErro(json.message)
        } else {

          // salvar token local
          if (Platform.OS === 'android' || Platform.OS === 'ios') {
            await AsyncStorage.setItem('us', JSON.stringify(json.user))
          } else {
            localStorage.setItem('us', JSON.stringify(json.user))
          }

          setUser(json.user)
          setConectado(true)
        }
  
      } catch (error) {
        setErro('Não foi possível se conectar ao servidor para validar sua credencial. Tente novamente.')
      }
    }

    setLoad(false)
    setCredencial('')
  }

  if (load) {
    return <Loading texto='Validando sua credencial...' />
  }

  if (erro) {
    return (
      <Main>
        <ContainerInfo>
          <BoxInfo>
            <InfoTitulo>Acesso Restrito</InfoTitulo>
            <InfoTexto>{erro}</InfoTexto>
          </BoxInfo>
          <Botao onPress={() => setErro('')}>
            <BotaoTexto>VOLTAR</BotaoTexto>
          </Botao>
        </ContainerInfo>
      </Main>
    )
  }

  return (
    <Main>
      <Container>
        <ShowdePremios />
        <KeyboardView>
          <Input
            placeholder='Informe sua Credencial'
            onChangeText={t => setCredencial(t)}
            maxLength={6}
            keyboardType='numeric'
            value={credencial}
            onSubmitEditing={ValidarCredencial}
            secureTextEntry={false}
          />
          <Botao onPress={ValidarCredencial}>
            <BotaoTexto>VALIDAR</BotaoTexto>
          </Botao>
          <Botao onPress={OpenWhatsapp}>
            <BotaoTexto>ATENDIMENTO</BotaoTexto>
          </Botao>
        </KeyboardView>
        <Daniel />
      </Container>
    </Main>
  )
}