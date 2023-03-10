import React, { useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { MeshReflectorMaterial } from '@react-three/drei'
import { LinearEncoding, RepeatWrapping, TextureLoader } from 'three'
import Grid from './Grid'

const sizeX = 80
const sizeY = 80

const Floor = (props: JSX.IntrinsicElements['group']) => {
  // thanks to https://polyhaven.com/a/rough_plasterbrick_05 !
  const [roughness, normal] = useLoader(TextureLoader, [
    `${process.env.PUBLIC_URL}textures/floor_rough.jpg`,
    `${process.env.PUBLIC_URL}textures/floor_normal.jpg`
  ])

  useEffect(() => {
    [normal, roughness].forEach((t) => {
      t.wrapS = RepeatWrapping
      t.wrapT = RepeatWrapping
      t.repeat.set(5, 5)
      t.offset.set(0, 0)
      t.encoding = LinearEncoding
    })
  }, [normal, roughness])

  return (
    <group {...props} dispose={null}>
      <Grid sizeX={sizeX} sizeY={sizeY} />
      <mesh rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[sizeX, sizeY]} />
        <MeshReflectorMaterial
          envMapIntensity={0}
          normalMap={normal}
          roughnessMap={roughness}
          dithering
          color={[0.015, 0.015, 0.015]}
          roughness={0.7}
          blur={[1000, 400]}
          mixBlur={30}
          mixStrength={80}
          mixContrast={1}
          resolution={1024}
          mirror={0}
          depthScale={0.01}
          minDepthThreshold={0.9}
          maxDepthThreshold={1}
          depthToBlurRatioBias={0.25}
          reflectorOffset={0.2}
        />
      </mesh>
    </group>
  )
}

export default Floor
