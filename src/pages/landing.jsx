import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Experience2 } from '../components/Experience2';
import Tech from '../components/tech-animation/tech';
import { AnimationProvider } from '../context/AnimationContext';
import LevaControlComponent from '../components/LevaControlComponent';
import { Intro } from '../components/Intro';
import music from '../assets/audio/music.mp3';
import typingSound from '../assets/audio/typingSound.mp3';

const Landing = () => {
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
    <div
      style={{
              height: '100vh',
          width: '100%',
        background: 'blue',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
       <AnimationProvider>
      <section style={{ height: '100vh',  width: '100%', background: 'black' }}>
        <button onClick={handleClick}>Let Go!</button>
        <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
          <Intro
            playMusic={playMusic}
            setPlayMusic={setPlayMusic}
            audioRef={audioRef}
            typingRef={typingRef}
            isTyping={isTyping}
            setIsTyping={setIsTyping}
          />
                  </Canvas>
                  <button style={{position: 'absolute', left: '5vw', top: '40vh'}} onClick={handleVisit}>Visit Home</button>
      </section>
    
    </AnimationProvider>
     
    </div>
  );
};

export default Landing;

/* 

"Workbench" (https://skfb.ly/o9ytH) by Bársh is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
*/


