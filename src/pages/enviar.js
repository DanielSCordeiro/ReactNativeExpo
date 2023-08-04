import { useState, useEffect } from 'react'
import { Contexto } from '../context'
import { Main } from '../styles/style'
import { Container, BoxNumero, Numero, Texto } from '../styles/style-enviar'
import { ContainerErro, BoxErro, BoxErroTexto, ErroInfo } from '../styles/style-erro'
import { BotaoLink } from '../functions/botaoNavegar'
import { Loading } from '../components/load'

export default function Enviar() {
  const { API_URL, user, cupom } = Contexto()
  const [load, setLoad] = useState(false)
  const [falha, setFalha] = useState(false)
  const [info, setInfo] = useState('')
  const [numero, setNumero] = useState('')

  // enviar dados para backend
  async function Salvar() {
    try {
      // pegar extenção da imagem
      let extencao = cupom.image.split('.').pop()
      // formdata
      let formData = new FormData()
          formData.append('image', {
            uri: cupom.image,
            name: `imagem.${extencao}`,
            type: `image/${extencao}`
          })
          formData.append('t', user.token)
          formData.append('cupom', cupom.cupom)
      // requisição
      let response = await fetch(`${API_URL}/cupom`, {
        method: 'POST',
        cache: 'no-cache',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      let json = await response.json()

      if (json.error) {
        setFalha(true)
        setNumero('FALHA')
      } else {
        setNumero(json.cupom)
      }

      setInfo(json.message)

    } catch (error) {
      setFalha(true)
      setInfo('Não foi possível concluir o cadastro deste cupom. Tente novamente.')
    }

    setLoad(false)
  }

  useEffect(() => {
    Salvar()
  }, [])

  if (load) {
    return <Loading texto={'Salvando a imagem'} />
  }

  if (falha) {
    return (
      <Main>
        <ContainerErro>
          <BoxErro>
            <BoxErroTexto>NÃO CADASTRADO!</BoxErroTexto>
          </BoxErro>
          <ErroInfo>{info}</ErroInfo>
          <BotaoLink page='Fotografar' text='NOVO CADASTRO' />
          <BotaoLink page='Home' text='VOLTAR' />
        </ContainerErro>
      </Main>
    )
  }

  return (
    <Main>
      <Container>
        <BoxNumero>
          <Numero>{numero}</Numero>
        </BoxNumero>
        <Texto>{info}</Texto>
        <BotaoLink page='Fotografar' text='NOVO CADASTRO' />
        <BotaoLink page='Home' text='VOLTAR' />
      </Container>
    </Main>
  )
}