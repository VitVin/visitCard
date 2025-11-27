import { motion } from "framer-motion";
import styles from "./CoursesPage.module.css";
import { s } from "framer-motion/client";

export default function CoursesPage() {
    const courses = [
        {
            year: "2013",
            title: "English (B1)",
            place: "Language school Streamline",

        },

        {
            year: "2022",
            title: "Hackathon",
            place: "DevEducation",

        },
        {
            year: "2022",
            title: "The professional Scrum foundations",
            place: "DevEducation",

        },
        {
            year: "2024",
            title: "Deutsch (B1)",
            place: "Kreisvolkshochschule",

        },
    ];

    return (
        <section className={styles.page}>


            <div className={styles.grid}>
                {courses.map((item, idx) => (
                    <motion.div
                        key={idx}
                        className={styles.entry}
                        initial={{ opacity: 0, y: 100, scale: 1.1 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ amount: 0.1, once: false }}
                        transition={{ duration: 0.8, delay: idx * 0.2 }}
                    >
                        <div className={styles.card}>
                            <h2 className={styles.heading}>{item.title}</h2>
                            <p className={styles.place}>{item.place}</p>
                            <p className={styles.desc}>{item.desc}</p>
                            <div className={styles.year}>{item.year}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

    );
}
