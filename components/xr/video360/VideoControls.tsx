
import React from 'react'
import './VideoControls.scss'

export default class Video360Room extends React.Component {
  props: propTypes

  constructor(props: propTypes) {
    super(props)

    this.props = props
  }

  playPauseHandler() {
    console.log('playPauseHandler')
    var video = document.querySelector(this.props.videosrc)
    if (video && video !== undefined) {
      video.play()
      const controller = document.querySelector('#videoplayercontrols')
      controller.parentElement?.removeChild(controller)
    } else console.log('this.video is undefined')
  }

  render() {
    return (
      <div onClick={this.playPauseHandler.bind(this)}
        id="videoplayercontrols"
        className="videoplayercontrols active">
          Test
      </div>
    )
  }
}

type propTypes = {
  videosrc: string
}
