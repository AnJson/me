import React, { Suspense, useRef, useState } from 'react'
import './App.css'
import { Canvas, ThreeEvent } from '@react-three/fiber'
import {
  Bounds,
  OrbitControls,
  PerspectiveCamera,
  Stars
} from '@react-three/drei'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import LoadingScreen from './components/utils/LoadingScreen/LoadingScreen'
import Floor from './components/Floor/Floor'
import Sphere from './components/Sphere/Sphere'
import MainButton from './components/MainButton/MainButton'

const App = () => {
  const orbitRef = useRef<OrbitControlsImpl>(null)
  const cameraRef = useRef<typeof PerspectiveCamera>(null)
  const [hasEntered, setHasEntered] = useState<boolean>(false)

  const toggleHasEntered = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()

    if (!orbitRef.current) {
      return
    }

    setHasEntered(!hasEntered)
    orbitRef.current.enableZoom = !orbitRef.current.enableZoom
  }

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Canvas>
        <color args={[0, 0, 0]} attach='background' />
        <ambientLight intensity={1} />
        {
          // INSIDE
        }
        {/* <OrbitControls target={[0, 6, 0]} maxPolarAngle={2.5} minPolarAngle={1.5} />
        <PerspectiveCamera
          makeDefault
          fov={60}
          near={0.01}
          far={100}
          position={[0, 0, 1]}
        /> */}

        {
          // OUTSIDE
        }
        <OrbitControls ref={orbitRef} target={[0, 6, 0]} maxPolarAngle={1.45} />
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          fov={60}
          position={[10, 0, 45]}
        />

        <Bounds fit clip observe margin={2}>
          <Sphere hasEntered={hasEntered} />
        </Bounds>
        <Floor position={[0, 0, 0]} />
        <Stars />
      </Canvas>
      <MainButton onClick={(e) => toggleHasEntered(e)} hasEntered={hasEntered} />
    </Suspense>
  )
}

export default App
