"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import { Suspense } from "react";
import { BottleModel } from "./bottle-model";

export function ThreeCanvas({
  scrollProgress = 0,
}: {
  scrollProgress: number;
}) {
  return (
    <div
      className="fixed inset-0 z-10 pointer-events-none"
      style={{ width: "100vw", height: "100svh" }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 35 }}
        gl={{ alpha: true, antialias: true }}
        style={{ pointerEvents: "none" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <directionalLight position={[-3, 3, -3]} intensity={0.4} />
          <BottleModel scrollProgress={scrollProgress} />
          <ContactShadows
            position={[0, -1.2, 0]}
            opacity={0.4}
            scale={6}
            blur={2.5}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
