import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

export default function ExperienceCard3D() {
    return (
        <div style={{ width: "100%", height: "200px" }}>
            <Canvas camera={{ position: [0, 0, 4], fov: 35 }}>
                <color attach="background" args={["#030b17"]} />
                <ambientLight intensity={0.8} />
                <Float speed={2} floatIntensity={1.5} rotationIntensity={1.5}>
                    <mesh>
                        <torusKnotGeometry args={[1, 0.3, 256, 32]} />
                        <meshStandardMaterial
                            emissive="#1ab2ff"
                            emissiveIntensity={2.5}
                            metalness={0.8}
                            roughness={0.2}
                        />
                    </mesh>
                </Float>
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    );
}
