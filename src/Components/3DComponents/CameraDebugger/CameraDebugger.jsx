import { OrbitControls } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function CameraDebugger({ enabled = true }) {
    const { camera } = useThree();
    const lastPos = useRef(camera.position.clone());
    const lastRot = useRef(camera.rotation.clone());

    useFrame(() => {
        if (!enabled) return;

        const posChanged = !camera.position.equals(lastPos.current);
        const rotChanged =
            camera.rotation.x !== lastRot.current.x ||
            camera.rotation.y !== lastRot.current.y ||
            camera.rotation.z !== lastRot.current.z;

        if (posChanged || rotChanged) {
            console.log("Camera position:", camera.position.toArray());
            console.log("Camera rotation:", {
                x: camera.rotation.x,
                y: camera.rotation.y,
                z: camera.rotation.z,
            });

            lastPos.current.copy(camera.position);
            lastRot.current.copy(camera.rotation);
        }
    });

    return (<OrbitControls />);
}
