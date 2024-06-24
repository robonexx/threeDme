import React, { useState, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FadeOverlay = ({ isVisible, duration = 500 }) => {
  const materialRef = useRef();

  useEffect(() => {
    let timeout;
    if (isVisible) {
      materialRef.current.opacity = 1;
    } else {
      timeout = setTimeout(() => {
        materialRef.current.opacity = 0;
      }, duration);
    }
    return () => clearTimeout(timeout);
  }, [isVisible, duration]);

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.opacity += (isVisible ? 1 : -1) * delta * (1 / (duration / 1000));
      materialRef.current.opacity = THREE.MathUtils.clamp(materialRef.current.opacity, 0, 1);
    }
  });

  return (
    <mesh position={[0, 0, 2]} scale={[10, 10, 1]}>
      <planeGeometry attach="geometry" args={[2, 2]} />
      <meshBasicMaterial ref={materialRef} attach="material" color="black" transparent />
    </mesh>
  );
};

export default FadeOverlay;
