import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Target = (props) => {
    const targetRef = useRef();

    useGSAP(() => {
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    });

    return (
        <group {...props} ref={targetRef} rotation={[0, Math.PI / 4, 0]}>
            {/* Target Board - Concentric Rings */}
            <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.8, 0.8, 0.1, 32]} />
                <meshStandardMaterial color="#ff2424" roughness={0.3} />
            </mesh>
            <mesh position={[0, 0, 0.06]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.55, 0.55, 0.1, 32]} />
                <meshStandardMaterial color="#ffffff" roughness={0.3} />
            </mesh>
            <mesh position={[0, 0, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.3, 0.3, 0.1, 32]} />
                <meshStandardMaterial color="#ff2424" roughness={0.3} />
            </mesh>
            <mesh position={[0, 0, 0.18]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.1, 0.1, 0.1, 32]} />
                <meshStandardMaterial color="#ffd700" roughness={0.1} metalness={0.5} />
            </mesh>

            {/* Stand / Pole */}
            <mesh position={[0, -1.0, 0]}>
                <cylinderGeometry args={[0.04, 0.04, 1.4, 16]} />
                <meshStandardMaterial color="#3a3a39" roughness={0.4} metalness={0.7} />
            </mesh>

            {/* Tripod Stand Legs (Visual representation using basic shapes) */}
            <group position={[0, -1.7, 0]}>
                {/* Leg 1 */}
                <mesh position={[0, 0, 0.2]} rotation={[0.4, 0, 0]}>
                    <cylinderGeometry args={[0.02, 0.02, 0.6, 8]} />
                    <meshStandardMaterial color="#1a1a1a" roughness={0.6} />
                </mesh>
                {/* Leg 2 */}
                <mesh position={[-0.17, 0, -0.1]} rotation={[-0.2, 0, 0.3]}>
                    <cylinderGeometry args={[0.02, 0.02, 0.6, 8]} />
                    <meshStandardMaterial color="#1a1a1a" roughness={0.6} />
                </mesh>
                {/* Leg 3 */}
                <mesh position={[0.17, 0, -0.1]} rotation={[-0.2, 0, -0.3]}>
                    <cylinderGeometry args={[0.02, 0.02, 0.6, 8]} />
                    <meshStandardMaterial color="#1a1a1a" roughness={0.6} />
                </mesh>
            </group>
        </group>
    );
};

export default Target;