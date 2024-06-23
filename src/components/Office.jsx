/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public/models/workbench.glb -o src/components/Office.jsx -k -K -r public 
Author: borsh_and (https://sketchfab.com/borsh_and)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/workbench-0a49e3b3b9624a2bb21eeeb473397873
Title: Workbench
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Office(props) {
  const { nodes, materials } = useGLTF('/models/workbench.glb');
  return (
    <group {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group
          name='Sketchfab_model'
          rotation={[-Math.PI / 2, 0, 4]}
          scale={0.6}
        >
          <group name='Itemsfbx' rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name='RootNode'>
              <group name='Plane' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  name='Plane_Material005_0'
                  geometry={nodes.Plane_Material005_0.geometry}
                  material={materials['Material.005']}
                />
                <mesh
                  name='Plane_Line_art001_0'
                  geometry={nodes.Plane_Line_art001_0.geometry}
                  material={materials['Line_art.001']}
                />
              </group>
              <group
                name='Cube'
                position={[12.593, 174.546, 157.279]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  name='Cube_Material010_0'
                  geometry={nodes.Cube_Material010_0.geometry}
                  material={materials['Material.010']}
                />
                <mesh
                  name='Cube_Line_art004_0'
                  geometry={nodes.Cube_Line_art004_0.geometry}
                  material={materials['Line_art.004']}
                />
              </group>
              <group
                name='Plane001'
                position={[-55.058, 157.356, 88.794]}
                rotation={[-Math.PI / 2, 0, 0.308]}
                scale={100}
              >
                <mesh
                  name='Plane001_Material011_0'
                  geometry={nodes.Plane001_Material011_0.geometry}
                  material={materials['Material.011']}
                />
                <mesh
                  name='Plane001_Line_art006_0'
                  geometry={nodes.Plane001_Line_art006_0.geometry}
                  material={materials['Line_art.006']}
                />
              </group>
              <group
                name='Plane002'
                position={[-58.106, 299.095, 163.622]}
                rotation={[-Math.PI / 2, 0, -0.961]}
                scale={100}
              >
                <mesh
                  name='Plane002_Material012_0'
                  geometry={nodes.Plane002_Material012_0.geometry}
                  material={materials['Material.012']}
                />
                <mesh
                  name='Plane002_Line_art005_0'
                  geometry={nodes.Plane002_Line_art005_0.geometry}
                  material={materials['Line_art.005']}
                />
              </group>
              <group
                name='Circle001'
                position={[-51.353, 156.109, -95.192]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  name='Circle001_Material009_0'
                  geometry={nodes.Circle001_Material009_0.geometry}
                  material={materials['Material.009']}
                />
                <mesh
                  name='Circle001_Line_art003_0'
                  geometry={nodes.Circle001_Line_art003_0.geometry}
                  material={materials['Line_art.003']}
                />
              </group>
              <group
                name='Plane003'
                position={[-53.702, 157.444, 52.681]}
                rotation={[-Math.PI / 2, 0, 0.06]}
                scale={100}
              >
                <mesh
                  name='Plane003_Material008_0'
                  geometry={nodes.Plane003_Material008_0.geometry}
                  material={materials['Material.008']}
                />
                <mesh
                  name='Plane003_Line_art006_0'
                  geometry={nodes.Plane003_Line_art006_0.geometry}
                  material={materials['Line_art.006']}
                />
              </group>
              <group
                name='Plane004'
                position={[-53.014, 155.042, 150.8]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={114.901}
              >
                <mesh
                  name='Plane004_Material006_0'
                  geometry={nodes.Plane004_Material006_0.geometry}
                  material={materials['Material.006']}
                />
                <mesh
                  name='Plane004_Line_art001_0'
                  geometry={nodes.Plane004_Line_art001_0.geometry}
                  material={materials['Line_art.001']}
                />
              </group>
              <group
                name='Plane005'
                position={[-51.177, 282.718, 153.83]}
                rotation={[-Math.PI / 2, 0, 0.227]}
                scale={100}
              >
                <mesh
                  name='Plane005_Material013_0'
                  geometry={nodes.Plane005_Material013_0.geometry}
                  material={materials['Material.013']}
                />
                <mesh
                  name='Plane005_Line_art002_0'
                  geometry={nodes.Plane005_Line_art002_0.geometry}
                  material={materials['Line_art.002']}
                />
              </group>
              <group
                name='Box_-2_'
                position={[-23.406, 0.847, -30.198]}
                rotation={[-Math.PI / 2, 0, -0.469]}
                scale={100}
              >
                <mesh
                  name='Box_-2__Material007_0'
                  geometry={nodes['Box_-2__Material007_0'].geometry}
                  material={materials['Material.007']}
                />
                <mesh
                  name='Box_-2__Line_art005_0'
                  geometry={nodes['Box_-2__Line_art005_0'].geometry}
                  material={materials['Line_art.005']}
                />
              </group>
              <group
                name='Plane006'
                position={[53.024, 160.045, 126.558]}
                rotation={[-3.103, -0.393, 1.586]}
                scale={94.625}
              >
                <mesh
                  name='Plane006_Material014_0'
                  geometry={nodes.Plane006_Material014_0.geometry}
                  material={materials['Material.014']}
                />
                <mesh
                  name='Plane006_Line_art002_0'
                  geometry={nodes.Plane006_Line_art002_0.geometry}
                  material={materials['Line_art.002']}
                />
              </group>
              <group
                name='Plane008'
                position={[30.119, 169.397, -161.503]}
                rotation={[-0.001, 0.906, 1.469]}
                scale={36.672}
              >
                <mesh
                  name='Plane008_Material016_0'
                  geometry={nodes.Plane008_Material016_0.geometry}
                  material={materials['Material.016']}
                />
                <mesh
                  name='Plane008_Line_art002_0'
                  geometry={nodes.Plane008_Line_art002_0.geometry}
                  material={materials['Line_art.002']}
                />
              </group>
              <group
                name='Plane009'
                position={[-31.81, 155.877, -26.636]}
                rotation={[-Math.PI / 2, 0, -0.171]}
                scale={100}
              >
                <mesh
                  name='Plane009_Material017_0'
                  geometry={nodes.Plane009_Material017_0.geometry}
                  material={materials['Material.017']}
                />
                <mesh
                  name='Plane009_Line_art003_0'
                  geometry={nodes.Plane009_Line_art003_0.geometry}
                  material={materials['Line_art.003']}
                />
              </group>
              <group
                name='Plane010'
                position={[30.188, 155.543, 4.446]}
                rotation={[-Math.PI / 2, 0, -0.313]}
                scale={52.756}
              >
                <mesh
                  name='Plane010_Material018_0'
                  geometry={nodes.Plane010_Material018_0.geometry}
                  material={materials['Material.018']}
                />
                <mesh
                  name='Plane010_Line_art002_0'
                  geometry={nodes.Plane010_Line_art002_0.geometry}
                  material={materials['Line_art.002']}
                />
              </group>
              <group
                name='Plane011'
                position={[25.275, 0, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[100, 214.665, 100]}
              >
                <mesh
                  name='Plane011_Material029_0'
                  geometry={nodes.Plane011_Material029_0.geometry}
                  material={materials['Material.029']}
                />
                <mesh
                  name='Plane011_Line_art002_0'
                  geometry={nodes.Plane011_Line_art002_0.geometry}
                  material={materials['Line_art.002']}
                />
              </group>
              <group
                name='Plane012'
                position={[34.812, 155.594, -63.821]}
                rotation={[-Math.PI / 2, 0, -0.131]}
                scale={21.535}
              >
                <mesh
                  name='Plane012_Material019_0'
                  geometry={nodes.Plane012_Material019_0.geometry}
                  material={materials['Material.019']}
                />
                <mesh
                  name='Plane012_Line_art002_0'
                  geometry={nodes.Plane012_Line_art002_0.geometry}
                  material={materials['Line_art.002']}
                />
              </group>
              <group
                name='Plane013'
                position={[-39.724, 157.035, -164.068]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  name='Plane013_Material021_0'
                  geometry={nodes.Plane013_Material021_0.geometry}
                  material={materials['Material.021']}
                />
                <mesh
                  name='Plane013_Line_art002_0'
                  geometry={nodes.Plane013_Line_art002_0.geometry}
                  material={materials['Line_art.002']}
                />
              </group>
              <group
                name='Plane014'
                position={[-44.622, 187.596, -185.876]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={93.793}
              >
                <mesh
                  name='Plane014_Material022_0'
                  geometry={nodes.Plane014_Material022_0.geometry}
                  material={materials['Material.022']}
                />
                <mesh
                  name='Plane014_Line_art002_0'
                  geometry={nodes.Plane014_Line_art002_0.geometry}
                  material={materials['Line_art.002']}
                />
              </group>
              <group
                name='Plane015'
                position={[-40.811, 156.613, -176.776]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={88.682}
              >
                <mesh
                  name='Plane015_Material024_0'
                  geometry={nodes.Plane015_Material024_0.geometry}
                  material={materials['Material.024']}
                />
                <mesh
                  name='Plane015_Line_art002_0'
                  geometry={nodes.Plane015_Line_art002_0.geometry}
                  material={materials['Line_art.002']}
                />
              </group>
              <group
                name='Plane016'
                position={[-35.634, 154.6, -135.257]}
                rotation={[-Math.PI / 2, 0, Math.PI]}
                scale={75.114}
              >
                <mesh
                  name='Plane016_Material023_0'
                  geometry={nodes.Plane016_Material023_0.geometry}
                  material={materials['Material.023']}
                />
                <mesh
                  name='Plane016_Line_art002_0'
                  geometry={nodes.Plane016_Line_art002_0.geometry}
                  material={materials['Line_art.002']}
                />
              </group>
              <group
                name='BezierCurve'
                position={[-71.816, 251.057, -174.897]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={100}
              >
                <mesh
                  name='BezierCurve_Material025_0'
                  geometry={nodes.BezierCurve_Material025_0.geometry}
                  material={materials['Material.025']}
                />
                <mesh
                  name='BezierCurve_Line_art002_0'
                  geometry={nodes.BezierCurve_Line_art002_0.geometry}
                  material={materials['Line_art.002']}
                />
              </group>
              <group
                name='Plane017'
                position={[-52.381, 223.403, -42.107]}
                rotation={[-Math.PI / 2, 0, -0.323]}
                scale={98.685}
              >
                <mesh
                  name='Plane017_Material020_0'
                  geometry={nodes.Plane017_Material020_0.geometry}
                  material={materials['Material.020']}
                />
                <mesh
                  name='Plane017_Line_art002_0'
                  geometry={nodes.Plane017_Line_art002_0.geometry}
                  material={materials['Line_art.002']}
                />
              </group>
              <group
                name='Plane018'
                position={[129.986, 81.77, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={98.281}
              >
                <mesh
                  name='Plane018_Material026_0'
                  geometry={nodes.Plane018_Material026_0.geometry}
                  material={materials['Material.026']}
                />
                <mesh
                  name='Plane018_Line_art004_0'
                  geometry={nodes.Plane018_Line_art004_0.geometry}
                  material={materials['Line_art.004']}
                />
              </group>
              <group
                name='BezierCurve001'
                position={[-44.725, 412.955, -0.075]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={100}
              >
                <mesh
                  name='BezierCurve001_Material027_0'
                  geometry={nodes.BezierCurve001_Material027_0.geometry}
                  material={materials['Material.027']}
                />
                <mesh
                  name='BezierCurve001_Line_art001_0'
                  geometry={nodes.BezierCurve001_Line_art001_0.geometry}
                  material={materials['Line_art.001']}
                />
              </group>
              <group
                name='Circle002'
                position={[-51.394, 186.479, -96.726]}
                rotation={[-Math.PI / 2, 0, -0.559]}
                scale={30.822}
              >
                <mesh
                  name='Circle002_Material028_0'
                  geometry={nodes.Circle002_Material028_0.geometry}
                  material={materials['Material.028']}
                />
                <mesh
                  name='Circle002_Line_art_0'
                  geometry={nodes.Circle002_Line_art_0.geometry}
                  material={materials.Line_art}
                />
              </group>
              <group
                name='Plane019'
                position={[-52.309, 244.771, 136.042]}
                rotation={[-0.037, -0.19, -1.578]}
                scale={87.697}
              >
                <mesh
                  name='Plane019_Material014_0'
                  geometry={nodes.Plane019_Material014_0.geometry}
                  material={materials['Material.014']}
                />
                <mesh
                  name='Plane019_Line_art002_0'
                  geometry={nodes.Plane019_Line_art002_0.geometry}
                  material={materials['Line_art.002']}
                />
              </group>
              <group
                name='Box_-2_001'
                position={[139.508, 0.847, 137.851]}
                rotation={[-Math.PI / 2, 0, -2.461]}
                scale={105.874}
              >
                <mesh
                  name='Box_-2_001_Material007_0'
                  geometry={nodes['Box_-2_001_Material007_0'].geometry}
                  material={materials['Material.007']}
                />
                <mesh
                  name='Box_-2_001_Line_art005_0'
                  geometry={nodes['Box_-2_001_Line_art005_0'].geometry}
                  material={materials['Line_art.005']}
                />
              </group>
              <group
                name='Plane020'
                position={[-34.415, 158.042, 97.55]}
                rotation={[-2.818, 0.713, 1.917]}
                scale={41.395}
              >
                <mesh
                  name='Plane020_Material015_0'
                  geometry={nodes.Plane020_Material015_0.geometry}
                  material={materials['Material.015']}
                />
                <mesh
                  name='Plane020_Line_art001_0'
                  geometry={nodes.Plane020_Line_art001_0.geometry}
                  material={materials['Line_art.001']}
                />
              </group>
              <group
                name='Circle003'
                position={[-46.997, 200.172, 162.926]}
                rotation={[-Math.PI / 2, 0, 0.567]}
                scale={11.499}
              >
                <mesh
                  name='Circle003_Material030_0'
                  geometry={nodes.Circle003_Material030_0.geometry}
                  material={materials['Material.030']}
                />
                <mesh
                  name='Circle003_Line_art001_0'
                  geometry={nodes.Circle003_Line_art001_0.geometry}
                  material={materials['Line_art.001']}
                />
              </group>
              <group
                name='Circle004'
                position={[-18.675, 157.269, 128.673]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={130.55}
              >
                <mesh
                  name='Circle004_Material031_0'
                  geometry={nodes.Circle004_Material031_0.geometry}
                  material={materials['Material.031']}
                />
                <mesh
                  name='Circle004_Line_art003_0'
                  geometry={nodes.Circle004_Line_art003_0.geometry}
                  material={materials['Line_art.003']}
                />
              </group>
              <group
                name='Plane007'
                position={[-29.689, 158.042, 104.633]}
                rotation={[-2.899, -0.027, 2.139]}
                scale={41.395}
              >
                <mesh
                  name='Plane007_Material015_0'
                  geometry={nodes.Plane007_Material015_0.geometry}
                  material={materials['Material.015']}
                />
                <mesh
                  name='Plane007_Line_art001_0'
                  geometry={nodes.Plane007_Line_art001_0.geometry}
                  material={materials['Line_art.001']}
                />
              </group>
              <group
                name='Plane021'
                position={[-38.694, 158.042, 73.622]}
                rotation={[-0.394, 0.894, -0.696]}
                scale={41.395}
              >
                <mesh
                  name='Plane021_Material015_0'
                  geometry={nodes.Plane021_Material015_0.geometry}
                  material={materials['Material.015']}
                />
                <mesh
                  name='Plane021_Line_art001_0'
                  geometry={nodes.Plane021_Line_art001_0.geometry}
                  material={materials['Line_art.001']}
                />
              </group>
              <group
                name='Plane022'
                position={[-31.455, 325.765, 5.717]}
                rotation={[-0.179, 0.965, -1.507]}
                scale={17.042}
              >
                <mesh
                  name='Plane022_Material032_0'
                  geometry={nodes.Plane022_Material032_0.geometry}
                  material={materials['Material.032']}
                />
              </group>
              <group
                name='Plane023'
                position={[-45.492, 325.765, -14.439]}
                rotation={[-3.04, 0.081, 1.479]}
                scale={17.042}
              >
                <mesh
                  name='Plane023_Material032_0'
                  geometry={nodes.Plane023_Material032_0.geometry}
                  material={materials['Material.032']}
                />
              </group>
              <group
                name='Plane025'
                position={[-44.109, 303.481, -3.342]}
                rotation={[-0.328, 1.416, 0.319]}
                scale={32.86}
              >
                <mesh
                  name='Plane025_Material033_0'
                  geometry={nodes.Plane025_Material033_0.geometry}
                  material={materials['Material.033']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/workbench.glb');
