import styled from 'styled-components/native'
import { cores } from './cores'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 14px;
`
export const Title = styled.Text`
  color: ${cores.primary_400};
  text-align: center;
  font-size: 16px;
`