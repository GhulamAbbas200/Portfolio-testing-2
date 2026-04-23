import { useGSAP } from '@gsap/react';
import { useTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useCallback, useRef, useEffect } from 'react';

const Rings = ({ position }) => {
  const refList = useRef([]);
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const texture = useTexture('textures/rings.png');

  // Use useEffect for initial positioning
  useEffect(() => {
    if (refList.current.length > 0) {
      refList.current.forEach((r) => {
        r.position.set(position[0], position[1], position[2]);
      });
    }
  }, [position]); // Re-run this effect when the position prop changes

  // useGSAP for the rotation animation
  useGSAP(
    () => {
      // The `useEffect` above ensures the meshes are already positioned
      if (refList.current.length === 0) return;

      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.5,
        })
        .to(
          refList.current.map((r) => r.rotation),
          {
            y: `+=${Math.PI * 2}`,
            x: `-=${Math.PI * 2}`,
            duration: 2.5,
            stagger: {
              each: 0.15,
            },
          },
        );
    },
    {
      dependencies: refList, // The animation should only start once the refs are available
      revertOnUpdate: true, // This ensures the animation is reset correctly if the component re-renders
    },
  );

  return (
    <group scale={0.5}>
      {Array.from({ length: 4 }, (_, index) => (
        <mesh key={index} ref={getRef}>
          <torusGeometry args={[(index + 1) * 0.5, 0.1]}></torusGeometry>
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
};

export default Rings;