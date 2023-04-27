import * as THREE from "three";
import { Suspense, useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";

import styled from "styled-components";


import EarthDay from "../../../threejs/textures/earth/8k_earth_daymap.jpg";
import EarthNormal from "../../../threejs/textures/earth/8k_earth_normal_map.jpg";
import EarthSpecular from "../../../threejs/textures/earth/8k_earth_specular_map.jpg";
import EarthClouds from "../../../threejs/textures/earth/8k_earth_clouds.jpg";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export function Earth() {

  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDay, EarthNormal, EarthSpecular, EarthClouds]);

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 10;
    cloudsRef.current.rotation.y = elapsedTime / 10;
  });

  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      <pointLight color="#f6f3ea" position={[-1, 0, 5]} intensity={2} />
      <Stars
        radius={200}
        depth={60}
        count={10000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={cloudsRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        {/* <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        /> */}
      </mesh>
    </>
  );
}


export default function World() {

  return (
    <CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}