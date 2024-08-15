import { useRef, createRef, useEffect, useMemo, useState, RefObject, MutableRefObject, memo, forwardRef } from "react";
import { useParticle, usePlane, useDistanceConstraint, PublicApi, Triplet } from "@react-three/cannon";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { DoubleSide, Mesh, Object3D, Side, TextureLoader } from "three";
import { Line } from "@react-three/drei";

type ParticleObj = {
  particle: MutableRefObject<Object3D>
  api: PublicApi
}

interface ParticleProps {
  mass: number;
  position: Triplet;
}

const Nx = 20;
const Ny = 10;
const clothSize = 7;
const dist = clothSize / Nx;
const planeOffset = [-2, -2];

const Particle = memo(
  forwardRef<{
    particle: MutableRefObject<Object3D>;
    api: PublicApi;
  }, ParticleProps>(({ mass, position }, ref) => {
    let [particle, api] = useParticle<Mesh>(() => ({
      mass,
      position: [position[0] + planeOffset[0], position[1] + planeOffset[1], position[2]],
      collisionResponse: false
    }))

    if (ref && particle.current && typeof ref === 'object') {
      ref.current = { particle, api };
    }

    const pointerMove = (e: any) => {
      api.velocity.set(0, 0, 5)
    }

    return (
      <mesh onPointerMove={pointerMove} ref={particle}>
        <sphereGeometry args={[0.07]} />
        <meshStandardMaterial color={'green'} visible={false} />
      </mesh>
    )
  })
)

interface StickProps {
  p1: RefObject<ParticleObj>;
  p2: RefObject<ParticleObj>;
  distance: number;
}

const StickParticles = memo<StickProps>(({ p1, p2, distance }) => {
  useDistanceConstraint(p1.current.particle, p2.current.particle, {
    distance
  })

  return null
})

export function Banner(props: any) {

  const texture = useLoader(TextureLoader, 'rekapp.jpeg')

  const [particlesReady, setParticlesReady] = useState(false);
  const [positions, setPositions] = useState({});
  const particles = useRef(Array.from({ length: Nx+1}, () => Array.from<RefObject<ParticleObj>, RefObject<ParticleObj>>({ length: Ny+1}, createRef)))
  const [ref] = usePlane(() => ({ rotation: [0, 0, 0], position: [0, 0, 0], ...props }))

  const line1Start = useMemo(() =>
    [5, -0.5, -1.5]
  , []);

  const line1End = useMemo(() => {
    if(particlesReady && positions){
      const pointPos = positions[Nx + '-' + Ny];
      if(pointPos) return [pointPos[0], pointPos[1], 0]
    }
  }
  , [positions, particlesReady]);

  /*const line2End = useMemo(() => {
    if(particlesReady && positions){
      const pointPos = positions[Nx + '-' + 0];
      if(pointPos) return [pointPos[0] - 2, pointPos[1] - 2, 0]
    }
  }, [positions, particlesReady]);*/

  const points = useMemo(() =>
    (new THREE.EllipseCurve(8.3, -8, 8, 8, -Math.PI/0.85, Math.PI/1.7, true, 0).getPoints(100)).map(e => [...e.toArray(), 0])
  , [])


  useEffect(() => {
    if(particles.current) setParticlesReady(true);
  }, [particles]);

  useEffect(() => {

    const subscriptions = [];

    if(particlesReady){

      for(let i=0;i<Nx+1;i++){
        for(let j=0;j<Ny+1;j++){
          subscriptions.push( particles.current[i][j].current.api.position.subscribe((value) => {
            setPositions(prev => ({...prev, [i + '-' + j]: value}))
          }) );
        }
      }

    }

    return () => {
      subscriptions.forEach(callback => {
        if(callback) callback();
      })
    }

  }, [particlesReady])

  useFrame(() => {
    if (particles.current[0][0]) {
      const geom = (ref.current as any).geometry;

      for(let i=0;i<Nx+1;i++){
        for (let j=0;j<Ny+1;j++){
          const index = j * (Nx + 1) + i;
          const positionAttribute = geom.attributes.position;
          if(particlesReady && positions){
            const position = positions[i + '-' + (Ny - j)]
            if(position) positionAttribute.setXYZ(index, position[0], position[1], position[2]);
          }
        }
      }

      geom.attributes.position.needsUpdate = true;
      geom.computeVertexNormals();
    }
  });

  return (
    <>
    {particles.current.map((x, xi) =>
      x.map((y, yi) => (
        <Particle
          ref={y}
          mass={((xi === Nx && yi === Ny)||(xi === Nx && yi === 0)) ? 0 : 1}
          key={xi + '-' + yi}
          position={[(xi - Nx * 0.5) * dist, (yi - Ny * 0.5) * dist, 0]}
        />
      ))
    )}

    {particlesReady && (particles.current.map((x, xi) =>
      x.map((_, yi) => {
          return (
            <>
              {(xi < Nx) && <StickParticles key={xi + '>' + yi} p1={particles.current[xi][yi]} p2={particles.current[xi + 1][yi]} distance={dist} />}
              {(yi < Ny) && <StickParticles key={xi + '->' + yi} p1={particles.current[xi][yi]} p2={particles.current[xi][yi + 1]} distance={dist} />}
            </>
          )
      })
    ))}

    <Line points={[line1Start, line1End] as any} linewidth={0.5} color="#000000" opacity={0.1} lineWidth={20} />
    <Line points={points as any} linewidth={0.5} color="#000000" opacity={0.1} lineWidth={20} />

    <mesh ref={ref as any}>
      <planeGeometry args={[clothSize, clothSize / 2, Nx, Ny]} />
      <meshPhongMaterial side={DoubleSide} map={texture} wireframe={false}  />
    </mesh>
    </>
  )
}
