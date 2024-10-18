import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { Model } from './Model';
import { Control } from './Control';
import { useState } from 'react';
import { Markers } from './Marker';
import { Vector3 } from 'three';

export function App() {

  const [cameraPosition, setCameraPosition] = useState([0, 0, 5]);


  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={new Vector3(...cameraPosition)} />
      <Control />
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />

      <Model />
      <Markers setCameraPosition={setCameraPosition} />
    </Canvas>
  );
}

export default App;
