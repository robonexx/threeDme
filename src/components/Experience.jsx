import React, { useEffect, useState } from 'react';
import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from '@react-three/drei';
import { useControls } from 'leva';
import { Avatar } from './Avatar';

export const Experience = ({ playMusic }) => {
  const [animation, setAnimation] = useState('Chillin');

  useControls({
    animation: {
      value: animation,
      onChange: setAnimation,
      options: [
        'Typing',
        'Falling',
        'Standing',
        'Moonwalk',
        'Locking',
        'Walking',
        'Chillin',
      ],
    },
  });

  useEffect(() => {
    if (playMusic) {
      setAnimation('Locking');
    } else {
      setAnimation('Chillin');
    }
  }, [playMusic]);

  return (
    <>
      <OrbitControls />
     {/*  <Sky /> */}
      <Environment preset='warehouse' />
      <group position-y={-1}>
        <ContactShadows
          opacity={1}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color='#000000'
        />
        <Avatar animation={animation} />
        {animation === 'Typing' && (
          <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
            <boxGeometry />
            <meshStandardMaterial color='black' />
          </mesh>
        )}

        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color='#121212' />
        </mesh>
      </group>
    </>
  );
};
