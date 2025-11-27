import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, useAnimations } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import * as THREE from "three";



export const Model = ({ url, isAnimated, isRobot = false, startPosition = [0, 0, 0], scale = 1 }) => {
    const gltf = useGLTF(url);
    const { scene, animations } = gltf;
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {

    }, []);

    // Запуск анимации
    useEffect(() => {
        if (isAnimated) {
            const firstAction = actions[Object.keys(actions)[0]];
            if (firstAction) {
                firstAction.play();
                firstAction.timeScale = isRobot ? 1 : 0.2;
            }
        }
    }, [actions, isAnimated, isRobot]);

    return (
        <Suspense fallback={<h1>Загрузка...</h1>} >
            <primitive object={scene} scale={scale} position={startPosition} />
        </Suspense >
    );
};