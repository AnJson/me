import { useBounds } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import SphereGrid from './SphereGrid'

type Props = {
  hasEntered: boolean
}

const Sphere = ({ hasEntered }: Props) => {
  const pinkSphereRef = useRef(null)
  const boundsApi = useBounds()

  // NOTE: Testing bounds.
  useEffect(() => {
    if (hasEntered && pinkSphereRef.current) {
      boundsApi.refresh(pinkSphereRef.current).fit()
    } else if (!hasEntered && pinkSphereRef.current) {
      boundsApi.refresh().fit()
    }
  }, [boundsApi, hasEntered])

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

      {/*  TODO:  CREATE A CLICKABLE GROUP HERE TO SIMULATE CONTROLPANEL    */}

      <mesh
        ref={pinkSphereRef}
        scale={0.2}
        position={[0, 0, -1.4]}
      >
        <sphereGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color='hotpink' />
      </mesh>
    </group>
  )
}

export default Sphere
