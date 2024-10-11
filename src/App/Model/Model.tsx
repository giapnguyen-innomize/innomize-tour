import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const Model = () => {
  const gltf = useLoader(GLTFLoader, '/models/scan.gltf');
  return <primitive object={gltf.scene} />;
};
