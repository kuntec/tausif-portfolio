"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial } from "@react-three/drei";

function Orb() {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.2}>
      <mesh>
        <sphereGeometry args={[1.25, 128, 128]} />
        <MeshDistortMaterial
          color="#6366f1"
          emissive="#22d3ee"
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.65}
          distort={0.35}
          speed={1.6}
        />
      </mesh>

      {/* Subtle glow shell */}
      <mesh scale={1.12}>
        <sphereGeometry args={[1.25, 128, 128]} />
        <meshBasicMaterial
          color={"#60a5fa"}
          transparent
          opacity={0.12}
          side={THREE.BackSide}
        />
      </mesh>
    </Float>
  );
}

export default function OrbScene() {
  return (
    <div className="relative h-[320px] w-full overflow-hidden rounded-3xl border border-white/12 bg-white/5 backdrop-blur md:h-[420px]">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} intensity={1.2} />
        <pointLight position={[-3, -2, 2]} intensity={0.6} />
        <Orb />
        <Environment preset="city" />
      </Canvas>

      {/* Glass highlight */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
      </div>
    </div>
  );
}
