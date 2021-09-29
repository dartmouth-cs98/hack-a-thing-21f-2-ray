import React from 'react';
// import 'aframe';
// import 'aframe-particle-system-component';
// import { Entity, Scene } from 'aframe-react';
// import model from '../../3d/sawtooth.gltf';

const Home = (props) => {
  return (
    <div>Hi</div>
    /*
    <Scene>

      <Entity light={{ type: 'point' }} />
      <Entity geometry={{ primitive: 'box' }} material={{ color: 'red' }} position={{ x: 0, y: 0, z: -5 }} />
      <Entity gltf-model="https://www.raycrist.com/sawtooth.gltf" position={{ x: 0, y: 0, z: -5 }} />
      <Entity text={{ value: 'Hello, WebVR!' }} />

    </Scene>
    */
  );
};

export default Home;

// <Entity geometry={{ primitive: 'box' }} material={{ color: 'red' }} position={{ x: 0, y: 0, z: -5 }} />

// CAMERA: https://github.com/ngokevin/aframe-react-boilerplate/blob/master/src/index.js
/*

      <Entity primitive="a-sky" color="#ECECEC" />
      <Entity primitive="a-camera">
        <Entity primitive="a-cursor"
          animation__click={{
            property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150,
          }}
        />
      </Entity>
*/
