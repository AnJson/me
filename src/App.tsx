import React, { Suspense } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls, PerspectiveCamera, Sphere, Stars
} from '@react-three/drei'
import LoadingScreen from './components/utils/LoadingScreen/LoadingScreen'
import Floor from './components/Floor/Floor'

const App = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Canvas>
        <color args={[0, 0, 0]} attach='background' />
        <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
        <PerspectiveCamera
          makeDefault
          fov={60}
          position={[10, 0, 45]}
        />

        <ambientLight intensity={0.1} />
        <Sphere scale={8} position={[0, 10, 0]} />
        <Floor position={[0, 0, 0]} />
        <Stars />
      </Canvas>
    </Suspense>
  )
}

export default App
