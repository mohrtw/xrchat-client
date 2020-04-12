/* global */
import React from 'react'
// import AFRAME from 'aframe'

// import '../../../lib/shaka-player.compiled.js'
import shaka from 'shaka-player'

var manifestUri = '/video360/cable_car/output/stream.mpd'// /video360/cabel_car/output/stream.mpd'

function initApp() {
  console.log('initApp')
  // Install built-in polyfills to patch browser incompatibilities.
  shaka.polyfill.installAll()

  // Check to see if the browser supports the basic APIs Shaka needs.
  if (shaka.Player.isBrowserSupported()) {
    console.log('browser supported')
    // Everything looks good!
    initPlayer()
  } else {
    // This browser does not have the minimum set of APIs we need.
    console.error('Browser not supported!')
  }
}

function initPlayer() {
  console.log('initPlayer')
  // Create a Player instance.
  var video: HTMLVideoElement = document.getElementById('video360Shaka') as HTMLVideoElement
  var player = new shaka.Player(video)

  // Attach player to the window to make it easy to access in the JS console.
  // window.player = player;

  // Listen for error events.
  // player.addEventListener('error', onErrorEvent);

  // Try to load a manifest.
  // This is an asynchronous process.
  player.load(manifestUri).then(function() {
    // This runs if the asynchronous load is successful.
    console.log('The video has now been loaded!')
    // if (video) video.play()
    // else console.log('video null')
    // createSphere()
  })// .catch(onError);  // onError is executed if the asynchronous load fails.
}

// function createSphere(): void {
//   console.log('createSphere')
//   const sphereEl = document.createElement('a-videosphere')
//   sphereEl.classList.add('video-player')
//   sphereEl.setAttribute('src', '#video360Shaka')
//   sphereEl.setAttribute('loop', false)

//   const videoContainer = document.querySelector('#videoPlayerContainer')

//   videoContainer.appendChild(sphereEl)

//   // primitive="a-videosphere"
//   // src="#video360Shaka"
//   // loop="false"

//   // setComponent(this.cameraEl, this.camera)

//   // this.el.appendChild(this.cameraEl)
// }

// function onErrorEvent(event: Event || {detail: any} ) {
//   // Extract the shaka.util.Error object from the event.
//   onError(event.detail);
// }

// function onError(error) {
//   // Log the error.
//   console.error('Error code', error.code, 'object', error);
// }

export default class Video360Room extends React.Component {
  componentDidMount() {
    // var sceneEl = AFRAME.scenes[0]
    var sceneEl = document.querySelector('a-scene')
    if (sceneEl?.hasLoaded) initApp()
    else sceneEl?.addEventListener('loaded', initApp)
    // initApp()
  }

  render() {
    return ''
  }
}
