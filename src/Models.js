import * as THREE from 'three'
import { useRef, useState, useMemo } from 'react'
import { easing } from 'maath'
import { Canvas, useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { useGLTF } from '@react-three/drei'
import { PivotControls } from './pivotControls/index'

export default function Models() {
  const gltf_name = 'glass-transformed.glb'
  const { nodes, materials } = useGLTF('/' + gltf_name)
  var indents = []
  let gl_name = Array()
  for (var i = 0; i < 9; i++) {
    if (nodes.Scene.children[i].geometry) {
      gl_name[i] = 'gl' + i
      console.log(gl_name[i])
      indents.push(
        <PivotControls rotation={[0, -Math.PI / 2, 0]} anchor={[1, -1, -1]} scale={75} depthTest={false} fixed lineWidth={2}>
          <mesh receiveShadow castShadow key={gl_name} geometry={nodes.Scene.children[i].geometry} material={materials['draifrawer_u1_v1.001']} />
        </PivotControls>
      )
    }
  }
  return indents
}
