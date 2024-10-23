import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { Model } from './Model';
import { Control } from './Control';
import { useState, useCallback } from 'react';
import { Markers } from './Marker';
import { Vector3 } from 'three';
import { Crosshair } from './Crosshair';
import { CenterRaycaster } from './CenterRaycaster';


export function App() {
  const [cameraPosition, setCameraPosition] = useState([0, 0, 0]);

  const handleCenterClick = useCallback((newPosition: Vector3) => {
    setCameraPosition([newPosition.x, newPosition.y, newPosition.z])
  }, []);

  return (
    <>
      <Canvas>
        <PerspectiveCamera makeDefault position={new Vector3(...cameraPosition)} />
        <Control />
        <ambientLight intensity={Math.PI / 2} />
        <Model />
        <Markers  />
        <CenterRaycaster onClick={handleCenterClick} />
      </Canvas>
      <Crosshair />
    </>
  );
}

export default App;
