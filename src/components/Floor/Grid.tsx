import React, { useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { RepeatWrapping, TextureLoader } from 'three'

type Props = {
  sizeX: number
  sizeY: number
}

const Grid = ({ sizeX, sizeY }: Props) => {
  const diffuse = useLoader(TextureLoader, `${process.env.PUBLIC_URL}textures/grid.png`)

  useEffect(() => {
    diffuse.wrapS = RepeatWrapping
    diffuse.wrapT = RepeatWrapping
    diffuse.anisotropy = 4
    diffuse.repeat.set(30, 30)
    diffuse.offset.set(0, 0)
  }, [diffuse])

  return (
    <>
      <mesh rotation-x={-Math.PI * 0.5} position={[0, 0.1, 0]}>
        <planeGeometry args={[sizeX, sizeY]} />
        <meshBasicMaterial
          color={[1, 1, 1]}
          opacity={0.35}
          map={diffuse}
          alphaMap={diffuse}
          transparent
        />
      </mesh>
    </>
  )
}

export default Grid
