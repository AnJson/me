import React from 'react'
import * as THREE from 'three'

const Sphere = (props: JSX.IntrinsicElements['mesh']) => {
  return (
    <>
      <mesh
        {...props}
      >
        <sphereBufferGeometry args={[1.5, 64, 32]} />
        <meshStandardMaterial color='hotpink' transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
    </>
  )
}

export default Sphere
