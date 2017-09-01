import 'aframe'
import 'aframe-animation-component'
import 'aframe-particle-system-component'
import { h, render } from 'preact'
import Main from './main'

document.addEventListener('DOMContentLoaded', () => {
  render(<Main />, document.querySelector('#app'))
})
