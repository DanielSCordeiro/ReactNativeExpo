import styled from 'styled-components/native'
import { cores } from './cores'

export const Botao = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  background-color: ${cores.confirm_100};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`
export const BotaoTexto = styled.Text`
  color: ${cores.forte_900};
  font-size: 16px;
  font-weight: bold;
`