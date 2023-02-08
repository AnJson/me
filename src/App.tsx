import React, { Suspense } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls, PerspectiveCamera, Stars
} from '@react-three/drei'
import LoadingScreen from './components/utils/LoadingScreen/LoadingScreen'
import Floor from './components/Floor/Floor'
import Sphere from './components/Sphere/Sphere'

const App = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Canvas>
        <color args={[0, 0, 0]} attach='background' />
        <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
        {
          // INSIDE
        }
        {/* <PerspectiveCamera
          makeDefault
          fov={60}
          near={0.01}
          far={100}
          position={[0, 0, 1]}
        /> */}

        {
          // OUTSIDE
        }
        <PerspectiveCamera
          makeDefault
          fov={60}
          near={0.01}
          far={100}
          position={[10, 0, 45]}
        />

        <ambientLight intensity={0.8} />
        <Sphere scale={8} position={[0, 10, 0]} />
        <Floor position={[0, 0, 0]} />
        <Stars />
      </Canvas>
    </Suspense>
  )
}

export default App
