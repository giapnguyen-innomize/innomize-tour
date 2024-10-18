import { useState } from 'react';
import { Vector3 } from 'three';

interface MarkerProps {
  position: [number, number, number];
  onClick: () => void;
}

function Marker({ position, onClick }: MarkerProps) {
  return (
    <mesh position={position} onClick={onClick}>
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
}

interface MarkersProps {
  setCameraPosition: (position: [number, number, number]) => void;
}

export function Markers({ setCameraPosition }: MarkersProps) {
  const markerPositions: [number, number, number][] = [
    [1, 1, 1],
    [-1, 0.5, 2],
    [0, -1, 3],
  ];

  const handleMarkerClick = (position: [number, number, number]) => {
    const offset = new Vector3(0, 0, 2);
    const newPosition = new Vector3(...position).add(offset);
    setCameraPosition(newPosition.toArray() as [number, number, number]);
  };

  return (
    <>
      {markerPositions.map((position, index) => (
        <Marker
          key={index}
          position={position}
          onClick={() => handleMarkerClick(position)}
        />
      ))}
    </>
  );
}