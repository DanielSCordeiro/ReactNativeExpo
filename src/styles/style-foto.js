import styled from 'styled-components/native'
import { cores } from './cores'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
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
export const Titulo = styled.Text`
  color: ${cores.fraco_100};
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  padding: 0 20px 6px 20px;
`
export const Texto = styled.Text`
  color: ${cores.forte_400};
  font-size: 16px;
  text-align: center;
  padding: 0 20px 10px 20px;
`
export const BoxFoto = styled.View`
  flex: 1;
  width: 100%;
`
export const BoxBotoes = styled.View`
  width: 100%;
  padding: 16px 20px 0 20px;
  gap: 16px;
`
export const Imagem = styled.Image`
  width: 100%;
  height: 100%;
`
export const Background = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`
