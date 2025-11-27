import { children, useRef } from "react";
import { useFrame } from "@react-three/fiber";

//   const [mouse, setMouse] = useState({ x: 0, y: 0 });
// onMouseMove={(e) => setMouse({ x: e.clientX - window.innerWidth / 2, y: e.clientY - window.innerHeight / 2 })}

export const ParallaxCover = ({ children, mouse }) => {
    const meshRef = useRef();


    useFrame(() => {
        if (!meshRef.current) return;
        meshRef.current.position.x += (mouse.x / 100 - meshRef.current.position.x) * 0.0002;
        meshRef.current.position.y += (-mouse.y / 100 - meshRef.current.position.y) * 0.0002;
        meshRef.current.rotation.y = mouse.x / 3000;
        meshRef.current.rotation.x = -mouse.y / 3000;

    });

    return (
        <mesh ref={meshRef}>
            {children}
        </mesh>
    );
};
