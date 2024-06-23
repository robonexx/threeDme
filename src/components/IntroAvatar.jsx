import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { useControls } from 'leva';
import React, { useEffect, useRef, forwardRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const IntroAvatar = forwardRef((props, ref) => {
  const { animation } = props;
  const { headFollow, cursorFollow, wireframe } = useControls({
    headFollow: false,
    cursorFollow: true,
    wireframe: false,
  });

  const localRef = useRef();
  const group = ref || localRef;

  const { nodes, materials } = useGLTF('models/rob.glb');

  const { animations: typingAnimation } = useFBX('animations/Typing.fbx');
  const { animations: lockingAnimation } = useFBX('animations/Locking.fbx');
  const { animations: moonwalkAnimation } = useFBX('animations/Moonwalk.fbx');
  const { animations: walkAnimation } = useFBX('animations/Walk.fbx');
  const { animations: chillinAnimation } = useFBX('animations/Chillin.fbx');

  typingAnimation[0].name = 'Typing';
  lockingAnimation[0].name = 'Locking';
  chillinAnimation[0].name = 'Chillin';
  walkAnimation[0].name = 'Walking';
  moonwalkAnimation[0].name = 'Moonwalk';

  const { actions } = useAnimations(
    [typingAnimation[0], walkAnimation[0], chillinAnimation[0], lockingAnimation[0], moonwalkAnimation[0]],
    group
    );
    
    useFrame((state) => {
        if (headFollow) {
          group.current.getObjectByName('Head').lookAt(state.camera.position);
        }
        if (cursorFollow) {
          const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
          group.current.getObjectByName('Head').lookAt(target);
        }
      });

  useEffect(() => {
    actions[animation].reset().fadeIn(0.5).play();
    return () => {
      actions[animation].reset().fadeOut(0.5);
    };
  }, [animation, actions]);

  useEffect(() => {
    Object.values(materials).forEach((material) => {
      material.wireframe = wireframe;
    });
  }, [wireframe, materials]);

  return (
    <group {...props} ref={group} dispose={null}>
      <group>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes.Wolf3D_Glasses.geometry}
          material={materials.Wolf3D_Glasses}
          skeleton={nodes.Wolf3D_Glasses.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          name='EyeLeft'
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name='EyeRight'
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name='Wolf3D_Head'
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name='Wolf3D_Teeth'
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <skinnedMesh
          name='Wolf3D_Beard'
          geometry={nodes.Wolf3D_Beard.geometry}
          material={materials.Wolf3D_Beard}
          skeleton={nodes.Wolf3D_Beard.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Beard.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Beard.morphTargetInfluences}
        />
      </group>
    </group>
  );
});

IntroAvatar.displayName = 'IntroAvatar';

useGLTF.preload('models/rob.glb');
