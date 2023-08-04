import { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'
import { manipulateAsync } from 'expo-image-manipulator'
import { decode } from 'js-base64'
import { Contexto } from '../context'
import { BarCodeScanner } from 'expo-barcode-scanner'
import ImageZoom from 'react-native-image-pan-zoom'
import { Main } from '../styles/style'
import { Container, BoxBotoes, Titulo, Texto, BoxFoto, Imagem } from '../styles/style-foto'
import { ContainerErro, BoxErro, BoxErroTexto, ErroInfo } from '../styles/style-erro'
import { BotaoLink } from '../functions/botaoNavegar'
import { Loading } from '../components/load'

export default function Foto() {
  const { user, cupom, setCupom } = Contexto()
  const [load, setLoad] = useState(true)
  const [error, setError] = useState(false)
  const [info, setInfo] = useState('Nenhum código válido foi detectado nesta imagem. Certifique-se de tirar uma foto nítida de um cupom válido, sem cortes.')


  async function ValidarFoto() {
    // ler qrcode
    let results = await BarCodeScanner.scanFromURLAsync(cupom)

    // qrcode não detectado
    if (results.length === 0) {
      setError(true)
      return
    }

    let qrcode = results[0]['data']
    let qr = qrcode.split('.')
    let codigo = decode(qr[0]).split('*')
    let codigoCupom = codigo[0]
    let codigoEvento = codigo[1]

    if (!codigoCupom || !codigoEvento) {
      setInfo('O código da imagem não é válido.\nSe você tiver um cupom válido, entre em contato com o suporte, fornecendo os detalhes do cupom para análise.')
      setError(true)
      return
    }

    if (codigoEvento !== user.base) {
      setInfo(`O cupom ${codigoCupom} que você está tentando usar não é válido para o evento em que você está cadastrando. (Cod. ${codigoEvento})`)
      setError(true)
      return
    }

    // reduzir imagem
    let fotoMenor = await manipulateAsync(
      cupom,
      [
        {resize: {width:360, height:600}},
        {rotate: -90}
      ],
      {compress: 0.5}
    )

    // salvar dados para prosseguir
    setCupom({
      cupom: codigoCupom,
      evento: codigoEvento,
      image: fotoMenor.uri
    })
    setLoad(false)
  }

  useEffect(() => {
    ValidarFoto()
  }, [])

  if (error) {
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

  if (load) {
    return <Loading texto='Analizando a imagem' />
  }

  return (
    <Main>
      <Container>
        <Titulo>Verifique a nitidez da foto</Titulo>
        <Texto>Verifique se as informações do comprador (nome, telefone e número do cupom) não estão cortadas e se a foto não está invertida.</Texto>
        <BoxFoto>
          <ImageZoom
            style={{flex:1, justifyContent:"center", alignItems:"center"}}
            cropWidth={Dimensions.get('window').width}
            cropHeight={Dimensions.get('window').height}
            imageWidth={Dimensions.get('window').width}
            imageHeight={Dimensions.get('window').height}
          >
            <Imagem 
              source={{uri: cupom.image}} 
              resizeMode="contain"
            />
          </ImageZoom>
        </BoxFoto>
        <BoxBotoes>
          <BotaoLink page='Enviar' text='ENVIAR' />
          <BotaoLink page='Fotografar' text='REPETIR' />
        </BoxBotoes>
      </Container>
    </Main>
  )
}