import gsap from "gsap";
import { useEffect, useRef } from "react";
import { motion } from 'framer-motion'
export const AnimatedDiv = () => {
    const boxRef = useRef(null);

    const boxAnimation = () => {
        gsap.from(boxRef.current, {
            opacity: 0,     // плавное появление
            y: 50,          // движение вверх
            duration: 1,    // 1 секунда
            ease: "power2.out"
        });
    };

    return (
        <motion.div
            ref={boxRef}
            initial={{ opacity: 0 }}
            onViewportEnter={() => boxAnimation()}

            style={{
                width: 200,
                height: 200,
                background: "#3498db",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 12,
                color: "#fff",
                fontSize: 20,
                margin: "50px auto"
            }}
        >
            Привет!
        </motion.div >
    );
};
