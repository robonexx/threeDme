import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Suspense } from 'react';
import { UI } from '../components/UI';
import { ExperienceOffice } from '../components/ExperienceOffice';
import { Intro } from '../components/Intro';
import music from '../assets/audio/music.mp3';
import typingSound from '../assets/audio/typingSound.mp3';

const About = () => {
  const [selectedScript, setSelectedScript] = useState('');
  const [playMusic, setPlayMusic] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const audioRef = useRef(new Audio(music)); // Create a new Audio instance
  const typingRef = useRef(new Audio(typingSound)); // Create a new Audio instance

  // Function to handle tag click
  const handleTagClick = (script) => {
    setSelectedScript(script);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    setPlayMusic((prev) => !prev);

    if (!playMusic) {
      audioRef.current.play();
      typingRef.current.pause();
    } else {
      audioRef.current.pause();
    }
  };

const handleVisit = () => {
  localStorage.setItem('visitedBefore', 'true');
  window.location.href = '/';
};
  return (
    <div className='h-screen w-screen'>
      <Canvas
        shadows
        camera={{ position: [5, -1, 5], fov: 48 }}
        className='office'
      >
        <color attach='background' args={['#171720']} />
        <fog attach='fog' args={['#171720', 10, 30]} />
        <Suspense>
          <ExperienceOffice />
          <Intro
            playMusic={playMusic}
            setPlayMusic={setPlayMusic}
            audioRef={audioRef}
            typingRef={typingRef}
            isTyping={isTyping}
            setIsTyping={setIsTyping}
          />
        </Suspense>
        <EffectComposer>
          <Bloom mipmapBlur intensity={1.2} />
        </EffectComposer>
      </Canvas>
      <UI handleClick={handleClick} />
    </div>
  );
};

export default About;
