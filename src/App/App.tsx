import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { Model } from './Model';
import { Control } from './Control';

export function App() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault />
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
    </Canvas>
  );
}

export default App;
