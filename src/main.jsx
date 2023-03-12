import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import './index.css'

import Experience from './Experience'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Canvas
      camera={{
        fov: 50,

        near: 0.1,
        far: 100,//defualt 10
        position: [8, 16, 10]

      }}
      shadows={true}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        //outputEncoding: THREE.LinearEncoding
      }}
    >
      <Experience />
    </Canvas>
  </>
)
