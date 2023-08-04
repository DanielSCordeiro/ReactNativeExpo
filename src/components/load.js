import { ActivityIndicator } from 'react-native'
import { Main } from '../styles/style'
import { Container } from '../styles/style-login'
import { LoadInfo } from '../styles/style-load'
import { cores } from '../styles/cores'

export function Loading({texto}) {

  return (
    <Main>
      <Container>
        <ActivityIndicator size="large" color={cores.fraco_200} />
        {texto && <LoadInfo>{texto}</LoadInfo>}
      </Container>
    </Main>
  )
}