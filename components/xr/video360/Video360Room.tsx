
import React from 'react'
// @ts-ignore
import { Entity } from 'aframe-react'
import AFRAME from 'aframe'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import VideoControls from './VideoControls'
const ShakaPlayerComp = dynamic(() => import('./ShakaPlayerComp'), { ssr: false })

const dashManifestName = 'manifest.mpd'
const hlsPlaylistName = 'master.m3u8'

// choose dash or hls
function getManifestUri(manifestPath: string): string {
  const manifestName = AFRAME.utils.device.isIOS() ? hlsPlaylistName : dashManifestName
  return manifestPath + '/' + manifestName
}

function Video360Room() {
  const router = useRouter()
  const manifest = router.query.manifest as string
  const title = router.query.title as string
  const runtime = router.query.runtime as string
  const credit = router.query.credit as string
  const rating = router.query.rating as string
  const categories = router.query.categories as string
  const tags = router.query.tags as string

  const text = `${title || ''}\n\n${runtime || ''}\n${credit || ''}\n${'rating: ' + rating}\n${categories || ''}\n${tags || ''}
    \n(click to play)`
  return (
    <Entity>
      <ShakaPlayerComp manifestUri={getManifestUri(manifest)}/>
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
        videosrc="#video360Shaka" videotext="#videotext" />
      <Entity id="videotext"
        text={{
          font: 'mozillavr',
          width: 2,
          align: 'center',
          baseline: 'center',
          color: 'black',
          transparent: false,
          value: text
        }}
        position={{ x: 0, y: 1.6, z: -0.8 }}
      />
    </Entity>
  )
}

export default Video360Room
