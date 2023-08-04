import styled from 'styled-components/native'
import { cores } from './cores'

export const ContainerInfo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 20px;
`
export const BoxInfo = styled.View`
  padding-bottom: 20px;
  gap: 8px;
`
export const InfoTitulo = styled.Text`
  color: ${cores.fraco_100};
  font-size: 16px;
  text-align: center;
  font-weight: bold;
`
export const InfoTexto = styled.Text`
  color: ${cores.forte_400};
  font-size: 16px;
  text-align: center;
`