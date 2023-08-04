import { useState, useRef, useEffect } from 'react'
import { Contexto } from '../context'
import { Camera, CameraType } from 'expo-camera'
import { useNavigation } from '@react-navigation/native'
import { Conteudo, BotaoFoto, BotaoFotoTexto, BotaoClose, BotaoChange, BoxInfo } from '../styles/style-camera'
import { Close } from '../svg/close'
import { Rotate } from '../svg/rotate'
import { InfoCamera } from '../svg/infocamera'
import { Loading } from '../components/load'

export default function Fotografar() {
  const { setCupom } = Contexto()
  const navigation = useNavigation()
  const cameraRef = useRef(null)
  const [load, setLoad] = useState(false)
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(CameraType.back)

  // permissão apra usar a câmera
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted')
    })()
  }, [])

  useEffect(() => {
    setCupom(null)
  }, [])

  // navegar
  function Navegar(page) {
    setLoad(true)
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: page}]
      })
    }, 250)
  }

  // trocar camera
  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back))
  }

  // foto
  async function takePicture() {
    if (cameraRef.current) {
      const options = {
        quality: 1,
        skipProcessing: true
      }
      const { uri } = await cameraRef.current.takePictureAsync(options)
      if (uri) {
        setCupom(uri)
        Navegar('Foto')
      }
    }
  }

  if (load) {
    return <Loading />
  }

  return (
    <Camera
      style={{flex:1}}
      autoFocus={Camera.Constants.AutoFocus.on}
      type={type}
      ref={cameraRef}
    >
      <Conteudo>
        <BotaoClose onPress={() => Navegar('Home')}>
          <Close />
        </BotaoClose>
        <BoxInfo>
          <InfoCamera />
        </BoxInfo>
        <BotaoChange onPress={toggleCameraType}>
          <Rotate />
        </BotaoChange>
        <BotaoFoto onPress={takePicture}>
          <BotaoFotoTexto />
        </BotaoFoto>
      </Conteudo>
    </Camera>
  )
}