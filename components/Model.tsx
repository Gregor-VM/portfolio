import * as THREE from 'three'
import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, usePlane, useBox, useParticle } from '@react-three/cannon';
import {Plane} from "./Plane";
import { Banner } from './Banner';

function ZeppelinComponent () {

    const mesh = useRef<THREE.Mesh>(null!);

    //useFrame(() => {})
   
    return (<mesh ref={mesh} position={[5, -0.5, 0]} rotation={[0,Math.PI/2 - 0.7,-0.2]} scale={30}>
        <Suspense fallback={null}><Plane /></Suspense>
    </mesh>)
}

function Model() {

    //if(process.env.NODE_ENV === 'development') return null;
  
    const intensity = 0.1;

    return (
        <Canvas>
            <ambientLight intensity={0.8}></ambientLight>
            <pointLight intensity={10} color="#f8ff94" position={[5, 2, 0]} />
            <ZeppelinComponent />
            <Physics gravity={[-8, 0, -0.1]}>
              <Banner />
            </Physics>
        </Canvas>
    )
}

export default Model;
