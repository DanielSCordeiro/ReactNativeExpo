import styled from 'styled-components/native'
import { cores } from './cores'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  gap: 14px;
`
export const BoxNumero = styled.View`
  border: 1px solid ${cores.fraco_100};
  padding: 8px 34px;
  border-radius: 20px;
`
export const Numero = styled.Text`
  color: ${cores.fraco_100};
  text-align: center;
  font-size: 22px;
`
export const TextoFalha = styled.Text`
  color: ${cores.forte_400};
  text-align: center;
  font-size: 16px;
  line-height: 22px;
  padding-bottom: 30px;
`
export const Texto = styled.Text`
  color: ${cores.forte_400};
  text-align: center;
  font-size: 16px;
  line-height: 22px;
  padding-bottom: 30px;
`