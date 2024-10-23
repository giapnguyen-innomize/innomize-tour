import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { Raycaster, Vector3 } from "three";

type Props = {
    onClick: (position: Vector3) => void
}

export function CenterRaycaster({ onClick }: Props) {
    const { camera, scene } = useThree();
  
    useEffect(() => {
      const handleClick = () => {
        const direction = new Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
        const raycaster = new Raycaster(camera.position, direction);
        const intersects = raycaster.intersectObjects(scene.children, true);
  
        if (intersects.length > 0) {
          onClick(intersects[0].point);
        }
      };
  
      document.addEventListener('click', handleClick);
  
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, [camera, scene, onClick]);
  
    return null;
  }