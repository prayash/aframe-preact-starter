/**
 * @fileoverview 
 * This is our main A-Frame application.
 * It defines the main A-Frame Scene which gets mounted root div.
 */

import { h, Component } from 'preact'
import { Entity, Scene } from 'aframe-react'

const COLORS = ['#D92B6A', '#9564F2', '#FFCF59']

class Main extends Component {
  constructor() {
    super()
    this.state = { color: 'red' }
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue']
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    })
  }

  render() {
    return (
      <Scene>
        <a-assets>
          <img crossOrigin id="groundTexture" src="img/floor.jpg" />
          <img crossOrigin id="skyTexture" src="img/sky.jpg" />
        </a-assets>

        <Entity
          primitive="a-plane"
          src="#groundTexture"
          rotation="-90 0 0"
          height="100"
          width="100"
        />
        <Entity primitive="a-light" type="ambient" color="#445451" />
        <Entity
          primitive="a-light"
          type="point"
          intensity="2"
          position="2 4 4"
        />
        <Entity
          primitive="a-sky"
          height="2048"
          radius="30"
          src="#skyTexture"
          theta-length="90"
          width="2048"
        />
        <Entity particle-system={{ preset: 'snow', particleCount: 2000 }} />
        <Entity
          text={{ value: 'Hello, A-Frame Preact!', align: 'center' }}
          position={{ x: 0, y: 2, z: -1 }}
        />

        <Entity
          id="box"
          geometry={{ primitive: 'box' }}
          material={{ color: this.state.color, opacity: 0.6 }}
          animation__rotate={{
            property: 'rotation',
            dur: 2000,
            loop: true,
            to: '360 360 360'
          }}
          animation__scale={{
            property: 'scale',
            dir: 'alternate',
            dur: 100,
            loop: true,
            to: '1.1 1.1 1.1'
          }}
          position={{ x: 0, y: 1, z: -3 }}
          events={{ click: this.changeColor.bind(this) }}
        >
          <Entity
            animation__scale={{
              property: 'scale',
              dir: 'alternate',
              dur: 100,
              loop: true,
              to: '2 2 2'
            }}
            geometry={{ primitive: 'box', depth: 0.2, height: 0.2, width: 0.2 }}
            material={{ color: '#24CAFF' }}
          />
        </Entity>

        <Entity primitive="a-camera">
          <Entity
            primitive="a-cursor"
            animation__click={{
              property: 'scale',
              startEvents: 'click',
              from: '0.1 0.1 0.1',
              to: '1 1 1',
              dur: 150
            }}
          />
        </Entity>
      </Scene>
    )
  }
}

export default Main
