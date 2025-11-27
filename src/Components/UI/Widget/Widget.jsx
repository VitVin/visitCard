import { motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";
import styles from "./Widget.module.css";


export function Widget({ data, currentPage }) {
    const [restartKey, setRestartKey] = useState(0);
    const [currentData, setCurrentData] = useState(0);
    const [shouldAnimateClose, setShouldAnimateClose] = useState(false);


    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // время между строками (не 3 сек!)
            }
        }
    };

    useEffect(() => {

        setTimeout(() => { restartAnimation(); setCurrentData(currentPage); setShouldAnimateClose(false); }, 1000);
        setShouldAnimateClose(true);
    }, [currentPage])

    const itemVariants = {
        hidden: { opacity: 0, width: 0 },
        visible: { opacity: 1, width: "fit-content" }
    };

    const restartAnimation = () => {
        setRestartKey((prev) => prev + 1); // перерисовываем компонент
        console.log(data[currentData]);
    };


    return (<>
        {data[currentData]?.text ? <>
            <motion.div
                key={restartKey}
                className={styles.widget}
                variants={container}
                initial="hidden"
                animate={shouldAnimateClose ? "hidden" : "visible"}
                onClick={restartAnimation}
            >
                {
                    data[currentData]?.text?.map((item, index) => (
                        <motion.p
                            key={index}
                            className={styles.value}
                            variants={itemVariants}
                            transition={{ duration: 1.2, ease: "linear" }}
                        >
                            {item.label}
                        </motion.p>
                    ))
                }



            </motion.div >

            <motion.img
                className={styles.picture}
                src={data[currentData]?.picture}


                initial={{ opacity: 0, x: 50 }}
                animate={
                    shouldAnimateClose
                        ? { opacity: 0, x: 50 }
                        : { opacity: 1, x: 0 }
                }
                transition={{ duration: 1 }}
            />
        </> : <></>
        }
    </>
    );
}
