import React, { useEffect, useState, useRef } from 'react';
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';
import { useFrame, useThree } from '@react-three/fiber';
import { IntroAvatar } from './IntroAvatar';

export const Intro = ({
  playMusic,
  setPlayMusic,
  audioRef,
  typingRef,
  setIsTyping,
}) => {
  const [animation, setAnimation] = useState('Chillin');
  const avatarRef = useRef();
  const { camera } = useThree();

  useControls({
    animation: {
      value: animation,
      onChange: setAnimation,
      options: ['Typing', 'Moonwalk', 'Locking', 'Walking', 'Chillin'],
    },
  });

  useEffect(() => {
    let timeout1, timeout2, timeout3, timeout4, timeout5;

    if (playMusic) {
      // Sequence of animations
      setAnimation('Chillin');

      timeout1 = setTimeout(() => {
        setAnimation('Walking');
      }, 1000);

      timeout2 = setTimeout(() => {
        setAnimation('Moonwalk');
      }, 4000);

      timeout3 = setTimeout(() => {
        setAnimation('Locking');
      }, 5000);

      timeout4 = setTimeout(() => {
        setAnimation('Typing');
        setPlayMusic(false); // Pause music here
        setIsTyping(true); // play typing
        if (audioRef.current) {
          audioRef.current.pause();
        }

        if (typingRef.current) {
          typingRef.current.play();
        }
      }, 15000);
    }

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(timeout5);
    };
  }, [playMusic, setPlayMusic, audioRef]);

  useFrame(() => {
    if (avatarRef.current) {
      // Camera movement logic based on animation state
      switch (animation) {
        case 'Typing':
            camera.position.set(-6, 1, 5);
          camera.lookAt(0, -1, 0); // Look at the character from the side
          break;
        case 'Locking':
          camera.position.set(6, 4, 6); // Example position for locking sequence
          camera.lookAt(0, -1, 0); // Look at the character from a different angle
          break;
        default:
          // Default position
          camera.position.set(0, 3, 10);
          camera.lookAt(0, 0, 0);
          break;
      }
    }
  });

  return (
    <>
      <OrbitControls />
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
        <IntroAvatar ref={avatarRef} animation={animation} />
        {animation === 'Typing' && (
          <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
            <boxGeometry />
            <meshStandardMaterial color='black' />
          </mesh>
        )}
      </group>
    </>
  );
};
