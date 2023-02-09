import React, { useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { RepeatWrapping, TextureLoader } from 'three'

const SphereGrid = () => {
  const diffuse = useLoader(TextureLoader, `${process.env.PUBLIC_URL}textures/grid.png`)

  useEffect(() => {
    diffuse.wrapS = RepeatWrapping
    diffuse.wrapT = RepeatWrapping
    diffuse.anisotropy = 4
    diffuse.repeat.set(200, 100)
    diffuse.offset.set(0, 0)
  }, [diffuse])

  return (
    <>
      <mesh scale={1}>
        <sphereGeometry args={[1.5, 64, 32]} />
        <meshBasicMaterial
          opacity={0.7}
          color='#006644'
          map={diffuse}
          alphaMap={diffuse}
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  )
}

export default SphereGrid
