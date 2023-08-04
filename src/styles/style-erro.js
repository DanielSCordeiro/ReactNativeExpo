import styled from 'styled-components/native'
import { cores } from './cores'

export const ContainerErro = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 16px;
`
export const BoxErro = styled.View`
  font-size: 15px;
  background-color: ${cores.erro};
  padding: 10px 20px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`
export const BoxErroTexto = styled.Text`
  color: ${cores.fraco_100};
  text-align: center;
  font-size: 16px;
`
export const ErroInfo = styled.Text`
  color: ${cores.fraco_100};
  text-align: center;
  font-size: 16px;
  line-height: 22px;
  padding-bottom: 20px;
`
