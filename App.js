import { StatusBar } from 'expo-status-bar'
import { ContextProvider } from './src/context'
import Routes from './src/routes'

export default function App() {
  return (
    <ContextProvider>
      <Routes />
      <StatusBar style="light" />
    </ContextProvider>
  )
}