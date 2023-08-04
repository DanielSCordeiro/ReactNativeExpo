import styled from 'styled-components/native'
import { cores } from './cores'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 20px;
`
export const BoxTexto = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 5px;
`
export const Titulo = styled.Text`
  color: ${cores.fraco_100};
  font-size: 16px;
  text-align: center;
`
export const NomeUsuario = styled.Text`
  color: ${cores.fraco_100};
  font-size: 16px;
  text-align: center;
`
export const BoxInfo = styled.View`
  align-items: center;
  gap: 5px;
`
export const Info = styled.Text`
  color: #FFF;
  font-size: 12px;
  line-height: 14px;
`