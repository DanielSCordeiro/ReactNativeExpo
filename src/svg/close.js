import { Svg, Path } from 'react-native-svg'
import { cores } from '../styles/cores'

export function Close() {
  return (
    <Svg
      width='22'
      height='22'
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16217.58 16217.56"
    >
      <Path
        fill={cores.fraco_100}
        d="M14712.66 16217.56c-385.16,0 -770.27,-146.94 -1064.14,-440.77l-5539.71 -5539.73 -5539.71 5539.73c-293.87,293.84 -679.02,440.77 -1064.14,440.77 -385.14,0 -770.31,-146.94 -1064.16,-440.77 -587.71,-587.71 -587.71,-1540.58 0,-2128.29l5539.73 -5539.73 -5539.71 -5539.73c-587.71,-587.71 -587.71,-1540.56 0,-2128.29 587.69,-587.67 1540.55,-587.67 2128.3,0l5539.71 5539.71 5539.7 -5539.7c587.74,-587.69 1540.55,-587.69 2128.29,0 587.69,587.71 587.69,1540.58 0,2128.29l-5539.7 5539.7 5539.71 5539.73c587.67,587.73 587.67,1540.58 0,2128.3 -293.89,293.84 -678.98,440.77 -1064.16,440.77z"
      />
    </Svg>
  )
}