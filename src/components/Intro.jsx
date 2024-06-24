import React, { useEffect, useState, useRef } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { IntroAvatar } from './IntroAvatar';
import FadeOverlay from './FadeOverlay'; // Import the FadeOverlay component

export const Intro = ({
  playMusic,
  setPlayMusic,
  audioRef,
  typingRef,
  setIsTyping,
}) => {
  const [animation, setAnimation] = useState('Chillin');
  const [isFading, setIsFading] = useState(false); // State for managing the fade effect
  const avatarRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    let timeout1, timeout2, timeout3;

    if (playMusic) {
      // Sequence of animations
      setAnimation('Chillin');

      timeout1 = setTimeout(() => {
        setAnimation('Locking');
      }, 1000);

      timeout2 = setTimeout(() => {
        setIsFading(true); // Start fade out
        setTimeout(() => {
          setAnimation('Typing');
          setPlayMusic(false); // Pause music here
          setIsTyping(true); // Play typing sound
          if (audioRef.current) {
            audioRef.current.pause();
          }
          if (typingRef.current) {
            typingRef.current.play();
          }
          setIsFading(false); // Start fade in
        }, 500); // Fade duration
      }, 13000); // 12 seconds for Locking + 1 second buffer
    }

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, [playMusic, setPlayMusic, audioRef, typingRef, setIsTyping]);

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
          // Default position for Chillin
          camera.position.set(0, 3, 10);
          camera.lookAt(0, 0, 0);
          break;
      }
    }
  });

  return (
    <>
      <FadeOverlay isVisible={isFading} duration={500} />
      <OrbitControls />
      <Environment preset='warehouse' />
      <group position={[2, -1, 2]}>
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
