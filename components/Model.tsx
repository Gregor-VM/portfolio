import * as THREE from 'three'
import React, { useRef, Suspense, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {Zeppelin} from "./Zeppelin";
import isDay from '../hooks/isDay';


function ZeppelinComponent () {

    const [repeat, setRepeat] = useState({repeat: (Math.random() * 100), up:false});
    const mesh = useRef<THREE.Mesh>(null!);

    useFrame(() => {
        const change : number = 0.001 * Math.random();

        if(repeat.repeat < 100 && !repeat.up){
            mesh.current.position.y -= change;
            mesh.current.rotation.x -= change;
            mesh.current.rotation.y -= change / 2;
            setRepeat(prev => ({repeat: (prev.repeat + 1), up: false}));
        } else if(repeat.repeat < 100 && repeat.up) {
            mesh.current.position.y += change;
            mesh.current.rotation.x += change;
            mesh.current.rotation.y += change / 2;
            setRepeat(prev => ({repeat: (prev.repeat + 1), up: true}));
        } else {
            setRepeat(prev => ({repeat: 0, up: !prev.up}));
        }
    });
    
    return (<mesh ref={mesh} position={[0, -1.5, 0]} rotation={[4.65,0,0]} scale={0.006}>
        <Suspense fallback={null}><Zeppelin /></Suspense>
    </mesh>)
}

function Model() {

    const [movement, setMovement] = useState({x: 0, y: 0});

    const day = isDay();

    const intensity = useMemo(() => {
      return day ? 0.1 : 0.05
    }, []);

    const mouseMove : React.MouseEventHandler<HTMLDivElement> = e => {
      //const normalize = (x: number, min: number, max: number) => ((x - min) / (max - min));
      const normalizeWithNegatives = (x: number, min: number, max: number) => ( 2 * ((x-min) / (max - min)) - 1 );

      const x  = 5 * normalizeWithNegatives(e.clientX - e.currentTarget.offsetLeft, 0, e.currentTarget.offsetWidth);
      const y = -5 * normalizeWithNegatives(e.clientY - e.currentTarget.offsetTop, 0, e.currentTarget.offsetHeight);

      setMovement(prev => ({...prev, x, y}));
    }

    const centerMouse : React.MouseEventHandler<HTMLDivElement> = e => {

      const interval = setInterval(() => {
        setMovement(prev => ({...prev, x: prev.x / 10, y: prev.y / 10}));
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
      }, 800);

    }

    return (
        <Canvas onMouseMove={mouseMove} onMouseLeave={centerMouse}>
            <pointLight intensity={intensity * 10} position={[movement.x, movement.y, 2.5]} />
            <pointLight intensity={intensity * 5} position={[0,0, -10]} />
            <pointLight intensity={intensity * 4} position={[5,0,5]} />
            <pointLight intensity={intensity * 4} position={[-5,0,5]} />
              <ZeppelinComponent />
        </Canvas>
    )
}

export default Model;




/*
function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh : {current: {rotation: {x: number}}} = useRef();
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => (mesh.current.rotation.x += 0.01))
  
    return (
      <mesh
        {...props}
        ref={mesh}>
        <Suspense fallback={null}>
            <Zeppelin scale={0.1} args={[1, 2, 3]} />
        </Suspense>
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  }*/

/*

function Model() {


    /*return (<Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, -100]} />
    </Canvas>);*/

    /*
  return (
    <Canvas
      camera={{ position: [2, 0, -600] }}
      style={{
        backgroundColor: "#111a21",
      }}
    >
      <ambientLight intensity={1} position={[2, 10, 12.25]} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Zeppelin up scale={0.5} position={[0.025, -0.9, 0]} />
      </Suspense>
    </Canvas>
  );
}

export default Model*/
