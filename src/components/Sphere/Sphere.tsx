import React from 'react'
import * as THREE from 'three'
import SphereGrid from './SphereGrid'

const Sphere = (props: JSX.IntrinsicElements['group']) => {
  return (
    <group {...props} dispose={null}>
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
