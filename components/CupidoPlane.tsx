/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: meesjevanhout (https://sketchfab.com/meesjevanhout)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/sopwith-pup-stylized-cupido-c140fa7e825f40dd9dfcfe1a210c0058
Title: Sopwith PUP Stylized - Cupido
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function CupidoPlane(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/cupido_plane.glb') as any;
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions['Take 001'].play()
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.053}>
          <group name="10738963f36241e79a49770f207d886ffbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="polySurface206"
                  position={[-0.967, 13.373, 0.161]}
                  rotation={[0.002, 0, 0.092]}>
                  <mesh
                    name="polySurface206_CupidoTexture_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.polySurface206_CupidoTexture_0.geometry}
                    material={materials.CupidoTexture}
                  />
                  <group
                    name="polySurface245"
                    position={[-0.443, 0.662, 17.797]}
                    rotation={[-0.206, 0, 0]}>
                    <mesh
                      name="polySurface245_CupidoTexture_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface245_CupidoTexture_0.geometry}
                      material={materials.CupidoTexture}
                    />
                  </group>
                  <group
                    name="polySurface241"
                    position={[-0.469, 1.903, 19.841]}
                    rotation={[0, -0.123, 0]}>
                    <mesh
                      name="polySurface241_CupidoTexture_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface241_CupidoTexture_0.geometry}
                      material={materials.CupidoTexture}
                    />
                  </group>
                  <group
                    name="polySurface164"
                    position={[-0.56, 1.263, -19.225]}
                    rotation={[0, 0, 3.075]}>
                    <mesh
                      name="polySurface164_CupidoTexture_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface164_CupidoTexture_0.geometry}
                      material={materials.CupidoTexture}
                    />
                  </group>
                  <group
                    name="polySurface215"
                    position={[-1.07, -12.477, -0.161]}
                    rotation={[0, 0, -0.086]}>
                    <mesh
                      name="polySurface215_CupidoTexture_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface215_CupidoTexture_0.geometry}
                      material={materials.CupidoTexture}
                    />
                  </group>
                  <group
                    name="pPlane1"
                    position={[-0.38, 1.374, -18.941]}
                    rotation={[-1.571, 1.067, 3.118]}
                    scale={31.439}>
                    <mesh
                      name="pPlane1_Spinn_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pPlane1_Spinn_0.geometry}
                      material={materials.Spinn}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/cupido_plane.glb')
