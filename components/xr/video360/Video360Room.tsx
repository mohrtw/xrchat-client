
import React from 'react'
// @ts-ignore
import { Entity } from 'aframe-react'
import dynamic from 'next/dynamic'
import VideoControls from './VideoControls'
const ShakaPlayerComp = dynamic(() => import('./ShakaPlayerComp'), { ssr: false })

export default class Video360Room extends React.Component {
  render() {
    return (
      <Entity>
        <ShakaPlayerComp/>
        <Entity
          id="videoPlayerContainer"
        ></Entity>
        <Entity
          primitive="a-videosphere"
          class="videosphere"
          src="#video360Shaka"
          loop="false"
        />
        <VideoControls
          videosrc="#video360Shaka"/>
      </Entity>
    )
  }
}
