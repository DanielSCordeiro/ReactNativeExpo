import { useState } from 'react'
import { Keyboard, Dimensions } from 'react-native'
import ImageZoom from 'react-native-image-pan-zoom'
import { Contexto } from '../context'
import { Main } from '../styles/style'
import { Container, KeyboardView, Imagem, Input, BoxAlerta, AlertaTexto } from '../styles/style-pesquisar'
import { Botao, BotaoTexto } from '../styles/style-botao'
import { Loading } from '../components/load'
import { BotaoLink } from '../functions/botaoNavegar'
import { ShowdePremios } from '../svg/showdepremios'

export default function Pesquisar() {
  const { IMG_URL, user } = Contexto()
  const [load, setLoad] = useState(false)
  const [foto, setFoto] = useState(false)
  const [info, setInfo] = useState('')
  const [numero, setNumero] = useState('')
  const imageUrl = `${IMG_URL}/${user.base}/${numero}.jpg`

  // nova pesquisa
  function NovaPesquisa() {
    setInfo('')
    setNumero('')
    setFoto(false)
  }

  // navegar
  async function VerificarCadastro() {
    Keyboard.dismiss()
    if (numero.length >= 4) {
      setLoad(true)

      const res = await fetch(imageUrl, { method: 'HEAD' })
      if (res.ok) {
        setFoto(true)
      } else {
        setInfo(`O cupom Nº ${numero} não foi cadastrado.`)
        setNumero('')
      }
    } else {
      setInfo('Informe o número exatamente como escrito no cupom, incluindo zeros à esquerda quando houver.')
      setNumero('')
    }

    setLoad(false)
  }

  if (load) {
    return <Loading texto='Pesquisando...' />
  }
  
  if (foto) {
    return (
      <Main>
        <Container>
          <ShowdePremios />
          <ImageZoom
              style={{flex:1, justifyContent:"center", alignItems:"center"}}
              cropWidth={Dimensions.get('window').width}
              cropHeight={Dimensions.get('window').height}
              imageWidth={Dimensions.get('window').width}
              imageHeight={Dimensions.get('window').height}
            >
            <Imagem 
              source={{uri: imageUrl}} 
              resizeMode="contain"
            />
          </ImageZoom>
          <Botao onPress={NovaPesquisa}>
            <BotaoTexto>PESQUISAR OUTRO</BotaoTexto>
          </Botao>
          <BotaoLink page='Fotografar' text='NOVO CADASTRO' />
          <BotaoLink page='Home' text='VOLTAR' />
        </Container>
      </Main>
    )
  }

  return (
    <Main>
      <Container>
        {info && 
          <BoxAlerta onPress={() => setInfo('')}>
            <AlertaTexto>{info}</AlertaTexto>
          </BoxAlerta>
        }
        <ShowdePremios />
        <KeyboardView>
          <Input
            placeholder='número do cupom'
            onChangeText={t => setNumero(t)}
            maxLength={6}
            keyboardType='numeric'
            value={numero}
            onSubmitEditing={VerificarCadastro}
            secureTextEntry={false}
          />
          <Botao onPress={VerificarCadastro}>
            <BotaoTexto>PESQUISAR</BotaoTexto>
          </Botao>
        </KeyboardView>
        <BotaoLink page='Fotografar' text='NOVO CADASTRO' />
        <BotaoLink page='Home' text='VOLTAR' />
      </Container>
    </Main>
  )
}