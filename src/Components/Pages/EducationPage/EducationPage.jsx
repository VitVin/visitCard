import { motion } from "framer-motion";
import styles from "./EducationPage.module.css";

export default function EducationPage() {
    const education = [
        {
            year: "2020",
            title: "Bachelor of Computer Science",
            place: "National Metallurgical Academy of Ukraine",

        },
        {
            year: "2018",
            title: "Technician Programmer with an Economic Focus",
            place: "College of Business and Law",

        },


    ];

    return (
        <section className={styles.page}>

            <div className={styles.timeline}>
                {education.map((item, idx) => (
                    <motion.div
                        key={idx}
                        className={styles.entry}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.7, once: false }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={styles.year}>{item.year}</div>

                        <div className={styles.card}>
                            <h2 className={styles.heading}>{item.title}</h2>
                            <p className={styles.place}>{item.place}</p>
                            <p className={styles.desc}>{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

    );
}
