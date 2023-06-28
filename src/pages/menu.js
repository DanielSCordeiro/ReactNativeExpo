import { Contexto } from '../context'
import { Main } from '../styles/style'
import { Container, Title } from '../styles/style-login'
import { BotaoLink } from '../functions/navegar'
import Daniel from '../svg/daniel'

export default function Menu() {
  const { user } = Contexto()

  return (
    <Main>
      <Container>
        <Daniel />
        <Title>MENU</Title>
        <BotaoLink page='Login' text='IR PARA LOGIN' />
      </Container>
    </Main>
  );
}