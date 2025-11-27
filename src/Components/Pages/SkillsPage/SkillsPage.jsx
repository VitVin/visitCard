import { animate, motion } from "framer-motion";
import styles from "./SkillsPage.module.css";
import { useState } from "react";

export default function SkillsPage() {

    const [isVisible, setIsVisible] = useState(false);


    const groups = [
        {
            title: "Frontend",

            items: {
                JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                TypeScript: "https://www.typescriptlang.org/",
                HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                React: "https://react.dev/",
                "React Native": "https://reactnative.dev/",
                MobX: "https://mobx.js.org/",
                Redux: "https://redux.js.org/",
                "React Context": "https://react.dev/reference/react/Context",
                Vue: "https://vuejs.org/",
                "Composition API": "https://vuejs.org/guide/extras/composition-api-faq.html",
                "Options API": "https://vuejs.org/guide/introduction.html#api-styles",
                Pinia: "https://pinia.vuejs.org/",
                Electron: "https://www.electronjs.org/",

            },
        },
        {
            title: "Libraries & Tools",

            items: {
                Axios: "https://axios-http.com/",
                "React Router DOM": "https://reactrouter.com/",
                "React Navigation": "https://reactnavigation.org/",
                "React Transition Group": "https://reactcommunity.org/react-transition-group/",
                "Framer Motion": "https://www.framer.com/motion/",
                NativeBase: "https://nativebase.io/",
                "Three.js": "https://threejs.org/",
                Postman: "https://www.postman.com/",
                "Android Studio": "https://developer.android.com/studio",

                Vite: "https://vitejs.dev/",
                Git: "https://git-scm.com/",
                GitHub: "https://github.com/",
                "GitHub Pages": "https://pages.github.com/",
            },
        },
        {
            title: "Backend",

            items: {
                "Node.js": "https://nodejs.org/",
                "Express.js": "https://expressjs.com/",
                Sequelize: "https://sequelize.org/",
                PostgreSQL: "https://www.postgresql.org/",
                pgAdmin: "https://www.pgadmin.org/",
            },
        },
    ];


    const animationVariants = { 0: -50, 1: 0, 2: 50 };

    return (
        <section
            className={styles.page}
        >


            <div className={styles.grid}>
                {groups.map((group, i) => (
                    <motion.div
                        key={i}
                        className={styles.card}
                        initial={{ opacity: 0, x: animationVariants[i], y: i === 1 ? 50 : 0 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ amount: 0.3, once: false }}
                        transition={{ duration: 1 }}

                    >
                        <h2 className={styles.heading}>
                            {group.title}
                        </h2>

                        <motion.div
                            className={styles.list}
                            onViewportEnter={() => setIsVisible(true)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isVisible ? 1 : 0 }}
                            transition={{ duration: 1 }}
                        >
                            {Object.entries(group.items).map(([name, link], j) => (
                                <motion.a

                                    key={j}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.item}
                                >
                                    {name}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                ))
                }

            </div >
        </section >
    );
}
