import React from 'react';
import { useAnimationContext } from '../../context/AnimationContext';
import './tech.css';

const Tech = () => {
  const { animationState } = useAnimationContext();

  return (
    <div
      className={`tech ${
        animationState.playWelcomeAnimation ? 'play' : ''
      }`}
    ></div>
  );
};

export default Tech;
