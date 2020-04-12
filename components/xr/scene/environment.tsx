import React from 'react'
// @ts-ignore
import { Entity } from 'aframe-react'
// import Floor from './floor'
import Lights from './lights'
import Skybox from './skybox'

export default class Environment extends React.Component {
  render() {
    return (
      <Entity>
        <a-gltf-model src="#launchpad"
          position="0 0 -50"/>
        {/* <Floor/> */}
        <Lights/>
        <Skybox/>
      </Entity>
    )
  }
}
