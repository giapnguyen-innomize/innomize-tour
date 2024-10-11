import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';

export function App() {
  const [hovered, setHover] = useState(false);
  const meshRef = useRef(null);

  useEffect(() => {
    setInterval(() => {
      if (meshRef && meshRef.current) {
        meshRef.current.rotation.x += 0.02
      }
    }, 100);
  });

  return (
    <div className={"px-4 bg-red-100"}>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Box
          ref={meshRef}
          position={[-1.2, 0, 0]}
          onPointerOver={(event) => setHover(true)}
          onPointerOut={(event) => setHover(false)}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </Box>
        <Box
          position={[1.2, 0, 0]}
          onPointerOver={(event) => setHover(true)}
          onPointerOut={(event) => setHover(false)}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </Box>
      </Canvas>
      ,
    </div>
  );
}

export default App;
