import { Canvas } from "@react-three/fiber";
import { delay, motion } from "framer-motion";
import { use, useEffect, useState } from "react";
export default function SmartCanvas({
    isFullscreen,
    currentPage,
    children,
    className,
    duration = 0.5,
    zIndex = 1,
    ...props
}) {
    const [shouldChangeModel, setShouldChangeModel] = useState(false)


    const sectionsOption = [{
        cameraPosition: [0, 0, 0],
        cameraRotation: [0, 0, 0]
    },
    {
        cameraPosition: [-4.392164343095643, 2.553103800058283, 1.5987767603486158],
        cameraRotation: [-0.5102071136221651, -0.9, -0.3762548949123571]
    },
    {
        cameraPosition: [0, 2, 5],
        cameraRotation: [0, 0, 0]
    },
    {
        cameraPosition: [0, 2.5, 3],
        cameraRotation: [0, 0, 0]
    }, {
        cameraPosition: [1, 2, 10],
        cameraRotation: [0, 0, 0]
    }, {
        cameraPosition: [0, 0, 0],
        cameraRotation: [0, 0, 0]
    }, {
        cameraPosition: [0, 0, 0],
        cameraRotation: [0, 0, 0]
    },]

    return (
        <motion.div
            key={currentPage}

            style={{
                width: "100vw",
                height: "100vh",
                position: "fixed",
                inset: 0,
                zIndex: 0,
                pointerEvents: "none"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: shouldChangeModel ? 0 : 1 }}
            transition={{ duration, ease: "easeInOut" }}
        >

            <Canvas frameloop={"always"} resize={{ polyfill: ResizeObserver, scroll: false, debounce: 0 }} {...props} camera={{ position: sectionsOption[currentPage].cameraPosition, rotation: sectionsOption[currentPage].cameraRotation, fov: 50 }}>
                {children}
            </Canvas>

        </motion.div >
    );
}
