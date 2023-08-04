import styled from 'styled-components/native'
import { cores } from './cores'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 14px;
  position: relative;
`
export const KeyboardView = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios', behavior:'padding' })`
  width: 100%;
  gap: 16px;
  margin: 15px 0 20px 0;
`
export const BoxAlerta = styled.TouchableOpacity`
  width: 100%;
  background-color: ${cores.erro};
  border-radius: 8px;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 9000;
  padding: 10px;
`
export const AlertaTexto = styled.Text`
  text-align: center;
  color: ${cores.fraco_100};
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`
export const Imagem = styled.Image`
  width: 100%;
  height: 100%;
`
export const Input = styled.TextInput.attrs({
  placeholderTextColor: cores.fraco_100
})`
  font-size: 20px;
  color: ${cores.fraco_200};
  text-align: center;
  background-color: ${cores.forte_900};
  border-radius: 8px;
  border: 1px;
  border-color: ${cores.fraco_200};
  height: 48px;
`