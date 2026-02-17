"use client";

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function BottleModel({
  scrollProgress = 0,
}: {
  scrollProgress: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const gltf = useGLTF("/marzen.glb");
  const scene = gltf.scene;
  console.log("[v0] GLB loaded, scene children:", scene.children.length, "animations:", gltf.animations?.length);

  useFrame(() => {
    if (!groupRef.current) return;
    // Gentle continuous rotation + scroll-driven Y rotation
    groupRef.current.rotation.y = scrollProgress * Math.PI * 4;
    // Slight bob based on scroll
    groupRef.current.position.y = Math.sin(scrollProgress * Math.PI * 2) * 0.1;
  });

  return (
    <group ref={groupRef} dispose={null}>
      <primitive object={scene} scale={8} position={[0, -1.2, 0]} />
    </group>
  );
}

useGLTF.preload("/marzen.glb");
