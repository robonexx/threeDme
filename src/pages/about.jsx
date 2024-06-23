import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Suspense } from 'react';
import { UI } from '../components/UI';
import { ExperienceOffice } from '../components/ExperienceOffice';

const About = () => {
  return (
    <div className='h-2/3 w-2/4'>
      <Canvas
        shadows
        camera={{ position: [5, -1, 5], fov: 48 }}
        className='office'
      >
        <color attach='background' args={['#171720']} />
        <fog attach='fog' args={['#171720', 10, 30]} />
        <Suspense>
          <ExperienceOffice />
        </Suspense>
        <EffectComposer>
          <Bloom mipmapBlur intensity={1.2} />
        </EffectComposer>
      </Canvas>
      <UI />
    </div>
  );
};

export default About;
