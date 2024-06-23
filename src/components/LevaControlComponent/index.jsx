import React from 'react';
import { useControls } from 'leva';
import { useAnimationContext } from '../../context/AnimationContext';

const LevaControlComponent = () => {
  const { toggleWelcomeAnimation } = useAnimationContext();

  useControls({
    'Play Welcome Animation': {
      value: false,
      onChange: (value) => {
        if (value) {
          toggleWelcomeAnimation();
        }
      },
    },
  });

  return null;
};

export default LevaControlComponent;