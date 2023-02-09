import React from 'react'
import * as THREE from 'three'
import SphereGrid from './SphereGrid'

type Props = {
  hasEntered: boolean
}

const Sphere = ({ hasEntered }: Props) => {
  return (
    <group
      scale={8}
      position={[0, 10, 0]}
      dispose={null}
    >
      <mesh>
        <sphereGeometry args={[1.5, 64, 32]} />
        <meshStandardMaterial
          color='#00ff88'
          transparent
          opacity={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
      <SphereGrid />
    </group>
  )
}

export default Sphere
