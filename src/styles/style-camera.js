import styled from 'styled-components/native'
import { cores } from './cores'

export const Conteudo = styled.View`
  flex: 1;
  position: relative;
`
export const BotaoFoto = styled.TouchableOpacity`
  width: 90px;
  height: 90px;
  background-color: rgba(255,255,255,0.4);
  border-radius: 50%;
  position: absolute;
  bottom: 30px;
  left: 50%;
  margin-left: -45px;
  align-items: center;
  justify-content: center;
`
export const BotaoFotoTexto = styled.View`
  width: 62px;
  height: 62px;
  background-color: rgba(255,255,255,0.4);
  border-radius: 50%;
`
export const BotaoClose = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 40px;
  left: 30px;
  align-items: center;
  justify-content: center;
`
export const BoxInfo = styled.View`
  width: 60px;
  height: 350px;
  position: absolute;
  top: 100px;
  left: 30px;
`
export const BotaoChange = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 40px;
  right: 30px;
  align-items: center;
  justify-content: center;
`