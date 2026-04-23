import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { easing } from "maath";

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    // Dampen the camera position
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    // Only apply rotation on non-mobile devices
    if (!isMobile) {
      // Corrected: Use easing.damp3 for Euler angles
      easing.dampE(groupRef.current.rotation, [-state.pointer.y / 3, -state.pointer.x / 2, 0], 0.25, delta);
    }
  });

  return (
    <group ref={groupRef} scale={isMobile ? 0.9 : 1.1}>
      {children}
    </group>
  );
};

export default HeroCamera;