import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const { Navigator, Screen } = createNativeStackNavigator()

import Login from '../pages/login'

export default function AppRoute() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown:false}}>
        <Screen name="Login" component={Login} />
      </Navigator>
    </NavigationContainer>
  )
}