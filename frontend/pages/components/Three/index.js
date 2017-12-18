/*
To make this work, 
change packages.json to 
"next": "^3.2.2",
"react": "~15.6.1",
"react-dom": "~15.6.1",
"react-three-renderer": "^3.2.3",
"three": "^0.88.0",
*/

import { Component } from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';

class Three extends Component {
  constructor(props, context) {
    super(props, context);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(0, 0, 5);

    this.state = {
      cubeRotation: new THREE.Euler(),
    };

    this._onAnimate = () => {
      // we will get this callback every frame

      // pretend cubeRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x + 0.01,
          this.state.cubeRotation.y + 0.02,
          0
        ),
      });
    };
  }

  render() {
    const width = 1000;
    const height = 1000;

    return (
      <React3 mainCamera="camera" width={width} height={height} onAnimate={this._onAnimate} >
        <scene>
          <perspectiveCamera name="camera" fov={75} aspect={width / height} near={0.1} far={1000} position={this.cameraPosition} />
          <mesh rotation={this.state.cubeRotation} >
            <boxGeometry width={1} height={1} depth={1} />
            <meshBasicMaterial renderOrder={1} color={0xFFFFFF} wireframe={true} />
          </mesh>
        </scene>
      </React3>
    )
  }
}

export default Three;
