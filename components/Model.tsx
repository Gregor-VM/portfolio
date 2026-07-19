import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";

import { Banner } from "./Banner";
import { CupidoPlane } from "./CupidoPlane";
import styles from "../styles/Model.module.scss";

const AIRCRAFT_POSITION: [number, number, number] = [5, -1, 0];
const AIRCRAFT_ROTATION: [number, number, number] = [
  0,
  Math.PI + 0.8,
  -0.2,
];
const AIRCRAFT_SCALE = 1;

function Aircraft() {
  return (
    <group
      position={AIRCRAFT_POSITION}
      rotation={AIRCRAFT_ROTATION}
      scale={AIRCRAFT_SCALE}
    >
      <Suspense fallback={null}>
        <CupidoPlane />
      </Suspense>
    </group>
  );
}

function TowCables() {
  return (
    <svg
      className={styles.towCables}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M 59 45 C 63 45, 68 48, 72 51" />
      <path d="M 59 96 C 64 79, 68 62, 72 54" />
    </svg>
  );
}

function Model() {
  return (
    <motion.div
      className={styles.scene}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4, duration: 0.4 }}
    >
      <div className={styles.flag}>
        <Banner />
      </div>

      <TowCables />

      <div className={styles.aircraft} aria-hidden="true">
        <Canvas flat>
          <ambientLight intensity={1.6} />
          <directionalLight
            color="#fff7df"
            intensity={20}
            position={[4, 8, 6]}
          />
          <Aircraft />
        </Canvas>
      </div>
    </motion.div>
  );
}

export default Model;
