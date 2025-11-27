import { motion } from "framer-motion";
import styles from "./WorkExperiencePage.module.css";
import { useState } from "react";

export default function WorkExperiencePage() {
    const [lineDone, setLineDone] = useState(false);

    const jobs = [
        {
            year: "2021 — 2022",
            title: "Intern React Native Developer",
            company: "WizardsDev",
            desc: ""
        },
        {
            year: "2023 — 2025",
            title: "Frontend / Fullstack Developer",
            company: "Freelance",
            desc: "Development of SPA/React applications, desktop and mobile apps, backend with Node.js, API integrations, animation work, 3D (Three.js), and performance optimization."
        },
    ];

    return (
        <section
            className={styles.page}
        >


            <div className={styles.timelineWrapper}>

                {/* АНИМИРУЕМАЯ ЛИНИЯ */}
                <motion.div
                    className={styles.line}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1, }}
                    viewport={{ amount: 0.7, once: false }}
                    transition={{ duration: 1.2, ease: "easeInOut", }}
                    onAnimationComplete={() => setLineDone(true)}
                />

                {/* КАРТОЧКИ — ПОЯВЛЯЮТСЯ ТОЛЬКО ПОСЛЕ ЛИНИИ */}
                <div className={styles.timeline}>
                    {jobs.map((job, i) => (
                        <motion.div
                            key={i}
                            className={styles.entry}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={lineDone ? { opacity: 1, y: 0 } : {}}
                            viewport={{ amount: 0.7, once: false }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                        >
                            <div className={styles.dot}></div>

                            <div className={styles.card}>
                                <div className={styles.year}>{job.year}</div>
                                <h2 className={styles.heading}>{job.title}</h2>
                                <p className={styles.company}>{job.company}</p>
                                <p className={styles.desc}>{job.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
