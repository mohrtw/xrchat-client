
import React from 'react'
import 'aframe'
import 'aframe-particle-system-component'
import 'babel-polyfill'
// TODO : Add types for aframe-react
//@ts-ignore
import { Entity, Scene } from 'aframe-react'

export default class LocalScene extends React.Component {

    state = {
        color: ''
    }

    constructor(props: any) {
        super(props);
        this.state = { color: 'red' };
    }

    changeColor() {
        const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
        this.setState({
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    render() {
        return (
            <Scene renderer="antialias: true"
                environment={{
                    preset: 'starry',
                    seed: 2,
                    lightPosition: { x: 0.0, y: 0.03, z: -0.5 },
                    fog: 0.8,
                    ground: 'canyon',
                    groundYScale: 6.31,
                    groundTexture: 'walkernoise',
                    groundColor: '#8a7f8a',
                    grid: 'none'
                }}>
                <a-assets>
                    <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg" />
                </a-assets>
                <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100" />

                <Entity id="box"
                    geometry={{ primitive: 'box' }}
                    material={{ color: this.state.color, opacity: 0.6 }}
                    animation__rotate={{ property: 'rotation', dur: 2000, loop: true, to: '360 360 360' }}
                    animation__scale={{ property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1' }}
                    position={{ x: 0, y: 1, z: -3 }}
                    events={{ click: this.changeColor.bind(this) }}>
                    <Entity animation__scale={{ property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '2 2 2' }}
                        geometry={{ primitive: 'box', depth: 0.2, height: 0.2, width: 0.2 }}
                        material={{ color: '#24CAFF' }} />
                </Entity>

                <Entity primitive="a-camera">
                    <Entity primitive="a-cursor" animation__click={{ property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150 }} />
                </Entity>

            </Scene>
        )
    }
}
