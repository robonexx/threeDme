import React, { createContext, useContext, useState } from 'react';

const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const [animationState, setAnimationState] = useState({
    playWelcomeAnimation: false,
    playOtherAnimation: false,
  });

  const toggleWelcomeAnimation = () => {
    setAnimationState((prevState) => ({
      ...prevState,
      playWelcomeAnimation: !prevState.playWelcomeAnimation,
    }));
  };

  const toggleOtherAnimation = () => {
    setAnimationState((prevState) => ({
      ...prevState,
      playOtherAnimation: !prevState.playOtherAnimation,
    }));
  };

  return (
    <AnimationContext.Provider value={{ animationState, toggleWelcomeAnimation, toggleOtherAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = () => useContext(AnimationContext);