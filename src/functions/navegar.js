import { useNavigation } from '@react-navigation/native'
import { Botao, BotaoTexto } from '../styles/style-navegar'

export function BotaoLink({page, text}) {
  const navigation = useNavigation()

  return (
    <Botao onPress={() => {
      navigation.reset({
        index: 0,
        routes: [{name: page}]
      })
    }}>
      <BotaoTexto>{text}</BotaoTexto>
    </Botao>
  )
}