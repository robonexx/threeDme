import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Experience2 } from '../components/Experience2';
import Tech from '../components/tech-animation/tech';
import { AnimationProvider } from '../context/AnimationContext';
import LevaControlComponent from '../components/LevaControlComponent';
import { Intro } from '../components/Intro';
import music from '../assets/audio/music.mp3';
import typingSound from '../assets/audio/typingSound.mp3';

function Home() {
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

  return (
    <AnimationProvider>

      {/* Section for the tag buttons */}
      <section
        style={{
          flex: 1,
          background: 'aqua',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button onClick={() => handleTagClick('stop')}>Stop</button>
          <button onClick={() => handleTagClick('welcome')}>Welcome</button>
          <button onClick={() => handleTagClick('degaming')}>Degaming</button>
          <button onClick={() => handleTagClick('purpose')}>Purpose</button>
          <button onClick={() => handleTagClick('tech')}>Tech</button>
          <button onClick={() => handleTagClick('tools')}>Tools</button>
          <button onClick={() => handleTagClick('mentor')}>Mentor</button>
          <button onClick={() => handleTagClick('conclusion')}>
            Conclusion
          </button>
          <button onClick={() => handleTagClick('reflection')}>
            Reflection
          </button>
          <button onClick={() => handleTagClick('features')}>Features</button>
        </div>
      </section>

      <section style={{ height: '100vh', background: 'pink' }}>
        <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
          <Experience2 selectedScript={selectedScript} />
        </Canvas>
      </section>

      <section style={{ height: '100vh', background: 'aqua' }}>
        <Tech />
        <LevaControlComponent />
      </section>
    </AnimationProvider>
  );
}

export default Home;
