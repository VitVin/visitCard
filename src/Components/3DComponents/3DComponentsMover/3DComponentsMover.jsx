import { Children, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";


export function RobotMover({ speed = 1, children }) {
    const robotRef = useRef();
    const [direction, setDirection] = useState(1); // 1 → вправо, -1 → влево

    const LEFT = -10;   // край слева
    const RIGHT = 10;   // край справа

    useFrame((state, delta) => {
        if (!robotRef.current) return;

        // Двигаем робота
        robotRef.current.position.x += direction * speed * delta;

        // Если дошёл до края — меняем направление
        if (robotRef.current.position.x > RIGHT) {
            setDirection(-1);
            robotRef.current.rotation.y = Math.PI; // разворот назад
        }

        if (robotRef.current.position.x < LEFT) {
            setDirection(1);
            robotRef.current.rotation.y = 0; // разворот вперёд
        }
    });

    return (
        <group ref={robotRef} position={[0, 0, 0]}>
            {children}
        </group>
    );
}
