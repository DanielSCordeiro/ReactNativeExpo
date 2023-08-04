import { useState, useEffect } from 'react'
import { Linking } from 'react-native'
import { Contexto } from '../context'
import { Main } from '../styles/style'
import { Container, NomeUsuario, BoxInfo, Info } from '../styles/style-home'
import { Loading } from '../components/load'
import { Daniel } from '../svg/daniel'
import { ShowdePremios } from '../svg/showdepremios'
import { BotaoLink } from '../functions/botaoNavegar'
import { Botao, BotaoTexto } from '../styles/style-botao'

export default function Home() {
  const { API_URL, user } = Contexto()
  const [load, setLoad] = useState(true)
  const [total, setTotal] = useState({})

  // abrir whastapp
  function OpenWhatsapp() {
    const tel = 'whatsapp://send?phone=5533991279540&text=Gostaria%20de%20atendimento%20para%20o%20cadastro%20de%20cupons.'
    Linking.openURL(tel)
  }

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
      if (json.info) {
        setTotal(json)
      } else {
        setTotal({info: '...'})
      }
    } catch (error) {
      setTotal({info: 'FALHA AO OBTER AS INFORMAÇÕES'})
    }

    setLoad(false)
  }

  useEffect(() => {
    Carregar()
  }, [])

  if (load) {
    return <Loading texto='Aguarde...' />
  }

  return (
    <Main>
      <Container>
        <ShowdePremios />
        <NomeUsuario>Olá, {user.nome}.</NomeUsuario>

        <BotaoLink page='Fotografar' text='CADASTRAR' />
        <BotaoLink page='Pesquisar' text='VERIFICAR CADASTRO' />

        <Botao onPress={OpenWhatsapp}>
          <BotaoTexto>ATENDIMENTO</BotaoTexto>
        </Botao>

        <BotaoLink page='Sair' text='DESCONECTAR' />

        <BoxInfo>
          <Info>{user.evento}</Info>
          <Info>{total.info}</Info>
          {total.user && <Info>{total.user}</Info>}
        </BoxInfo>

        <Daniel />
      </Container>
    </Main>
  )
}