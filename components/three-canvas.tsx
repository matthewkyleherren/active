"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import { Suspense, Component, type ReactNode } from "react";
import { BottleModel } from "./bottle-model";

class CanvasErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.log("[v0] Canvas error caught:", error.message);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

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
      <CanvasErrorBoundary>
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
      </CanvasErrorBoundary>
    </div>
  );
}
