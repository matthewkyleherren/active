"use client";

import { useRef, useState, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";

export function BottleModel({
  scrollProgress = 0,
}: {
  scrollProgress: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const [scene, setScene] = useState<THREE.Group | null>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    console.log("[v0] Starting GLB load from /marzen.glb");
    loader.load(
      "/marzen.glb",
      (gltf) => {
        console.log("[v0] GLB loaded successfully, children:", gltf.scene.children.length);
        setScene(gltf.scene);
      },
      (progress) => {
        console.log("[v0] GLB loading progress:", Math.round((progress.loaded / (progress.total || 1)) * 100) + "%");
      },
      (error) => {
        console.log("[v0] GLB load error:", error);
      }
    );
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = scrollProgress * Math.PI * 4;
    groupRef.current.position.y = Math.sin(scrollProgress * Math.PI * 2) * 0.1;
  });

  if (!scene) return null;

  return (
    <group ref={groupRef} dispose={null}>
      <primitive object={scene} scale={8} position={[0, -1.2, 0]} />
    </group>
  );
}
