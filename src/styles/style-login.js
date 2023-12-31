import styled from 'styled-components/native'
import { cores } from './cores'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 14px;
`
export const KeyboardView = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios', behavior:'padding' })`
  width: 100%;
  gap: 16px;
  margin: 15px 0 20px 0;
`
export const Label = styled.Text`
  color: ${cores.fraco_200};
  text-align: center;
  font-size: 18px;
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