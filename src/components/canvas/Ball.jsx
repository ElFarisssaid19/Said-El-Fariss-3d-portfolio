import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  PerspectiveCamera,
  Preload,
  useTexture,
  View,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

// The canvas renders on demand, so ask for a few frames whenever something
// changes; a couple of extra frames let drei's View settle its visibility.
const RENDER_FRAMES = 3;

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const invalidate = useThree((state) => state.invalidate);

  useEffect(() => invalidate(RENDER_FRAMES), [decal, invalidate]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// Each ball is a drei <View>: a DOM box whose 3D content is drawn by the
// single shared <Canvas> below, with its own camera and orbit controls.
const BallView = ({ icon, name }) => {
  const [element, setElement] = useState(null);

  return (
    <div
      ref={setElement}
      className="w-20 h-20 sm:w-28 sm:h-28"
      role="img"
      aria-label={name}
    >
      <View className="w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        <Suspense fallback={<CanvasLoader />}>
          {element && <OrbitControls enableZoom={false} domElement={element} />}
          <Ball imgUrl={icon} />
        </Suspense>
      </View>
    </div>
  );
};

const RenderWhenVisible = ({ target }) => {
  const invalidate = useThree((state) => state.invalidate);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) invalidate(RENDER_FRAMES);
    });
    observer.observe(target.current);
    return () => observer.disconnect();
  }, [invalidate, target]);

  return null;
};

const BallsCanvas = ({ technologies }) => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="relative">
      <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-10">
        {technologies.map((technology) => (
          <BallView
            key={technology.name}
            icon={technology.icon}
            name={technology.name}
          />
        ))}
      </div>

      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        eventSource={containerRef}
        // drei's View treats a box as offscreen once its viewport top is
        // below the canvas height, so the canvas is at least one screen tall
        // (it overflows transparently below the grid).
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "max(100%, 100vh)",
        }}
      >
        <RenderWhenVisible target={containerRef} />
        <View.Port />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallsCanvas;
