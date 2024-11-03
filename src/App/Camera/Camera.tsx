import { PerspectiveCamera } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { PerspectiveCamera as PerspectiveCameraType } from 'three';

import { Coord } from '../typings';
import gsap from 'gsap';

type Props = {
  position: Coord;
};

const INIT: Coord = [0, 0, 0];

export const Camera = ({ position }: Props) => {
  const { camera, controls, scene } = useThree();

  useEffect(() => {
    cameraAnimationLinear({
      camera: camera as PerspectiveCameraType,
      controls,
      position,
    });
  }, [camera, controls, scene, position]);

  useEffect(() => {
    const [x, y, z] = INIT;
    camera.position.set(x, y, z); // Set initial position
  }, [camera]);

  return <PerspectiveCamera makeDefault fov={40} near={0.2} far={2000} />;
};

const cameraAnimationLinear = ({
  duration = 1.2,
  camera,
  controls,
  position,
  onComplete = () => null,
}: {
  duration?: number;
  camera: PerspectiveCameraType;
  controls: any;
  position: Coord;
  onComplete?: () => void;
}) => {
  if (camera && position) {
    const [px, py, pz] = position;
    gsap.to(camera.position, {
      x: px,
      y: py,
      z: pz,
      duration,
      ease: 'sine.out',
    });
  }
};

