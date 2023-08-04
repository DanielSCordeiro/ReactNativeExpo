import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const { Navigator, Screen } = createNativeStackNavigator()

import Home from '../pages/home'
import Fotografar from '../pages/fotografar'
import Foto from '../pages/foto'
import Enviar from '../pages/enviar'
import Pesquisar from '../pages/pesquisar'
import Sair from '../pages/sair'

export default function AuthRoute() {
  return (

    <NavigationContainer>
      <Navigator screenOptions={{headerShown:false}}>
        <Screen name="Home" component={Home} />
        <Screen name="Fotografar" component={Fotografar} />
        <Screen name="Foto" component={Foto} />
        <Screen name="Enviar" component={Enviar} />
        <Screen name="Pesquisar" component={Pesquisar} />
        <Screen name="Sair" component={Sair} />
      </Navigator>
    </NavigationContainer>
  )
}