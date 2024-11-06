import * as THREE from 'three'
import React, { useRef, Suspense, useState, useEffect } from "react";
import { Canvas, Euler, Vector3 } from "@react-three/fiber";
import { Physics } from '@react-three/cannon';
import { Plane } from "./Plane";
import { Banner } from './Banner';
import { CupidoPlane } from './CupidoPlane';
import { motion } from 'framer-motion';

const airObject = {
  'plane': {
    component: Plane,
    scale: 30,
    position: [5, -0.5, 0] as Vector3,
    rotation: [0,Math.PI/2 - 0.7,-0.2] as Euler
  },
  'cupidoPlane':{
    component: CupidoPlane,
    scale: 1,
    position: [5, -1, 0] as Vector3,
    rotation: [0,Math.PI+0.8,-0.2] as Euler
  }
}

function AirObject() {

    const mesh = useRef<THREE.Mesh>(null!);

    const selectedObject = "cupidoPlane";
    const AirObject = airObject[selectedObject].component;

    return (<mesh ref={mesh} position={airObject[selectedObject].position} rotation={airObject[selectedObject].rotation} scale={airObject[selectedObject].scale}>
        <Suspense fallback={null}><AirObject /></Suspense>
    </mesh>)
}

function Model() {

    const [visible, setVisible] = useState(false);

    const item = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1
      }
    }

    useEffect(() => {
      setTimeout(() => {
        setVisible(true);
      }, 4000);
    }, []);

    if(process.env.NODE_ENV === 'development') return null;
  
    const intensity = 0.1;

    return (
        <motion.div animate={visible ? 'visible' : 'hidden'} style={{width: "100%", height: "100%"}} variants={item}>
          <Canvas>
            <ambientLight intensity={0.8}></ambientLight>
            <pointLight intensity={10} color="#f8ff94" position={[5, 2, 0]} />
            <AirObject />
            <Physics gravity={[-12, 0, 0]}>
              <Banner />
            </Physics>
        </Canvas>
        </motion.div>
    )
}

export default Model;
