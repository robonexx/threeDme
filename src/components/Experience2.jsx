import { Environment, OrbitControls, useTexture } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import  { Avatar2 }  from './Avatar2';

export const Experience2 = ({selectedScript}) => {
  const texture = useTexture('textures/office.jpg');
  const viewport = useThree((state) => state.viewport);

  return (
      <>
      <OrbitControls />
      <Environment preset='sunset' />
      <Avatar2 position={[0, -3, 5]} scale={2} selectedScript={selectedScript} />


      <mesh>
        <planeGeometry args={[viewport.width, viewport.height]} />
        <meshBasicMaterial map={texture} />
          </mesh>              
    </>
  );
};