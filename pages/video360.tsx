import Layout from '../components/ui/Layout'
import Scene from '../components/xr/scene/scene-video'
import React from 'react'

export default class IndexPage extends React.Component {
  render () {
    return (
      <Layout pageTitle="Videos">
        <Scene />
      </Layout>
    )
  }
}
