import gsap from "gsap";
import { Card } from "../../UI/Card/Card"
import classes from './WelcomePage.module.css'
import { motion } from "framer-motion";
import { useState } from "react";

export const WelcomePage = () => {

    const techStack = ['WEB', 'MOBILE', 'DESKTOP']
    const [mainCardDone, setMainCardDone] = useState(false);


    return (

        <section className={classes.container}>




            <div className={classes.content}>

                <motion.div
                    className={classes.welcomeCard}
                    initial={{ opacity: 0, x: -50, }}
                    whileInView={{ opacity: 1, x: 0, }}
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 1, ease: 'linear' }}

                    onAnimationComplete={() => setMainCardDone(true)}
                >

                    <div

                        className={classes.techSection}>

                        {techStack.map((item, index) => {
                            return (
                                <motion.div key={index}
                                    initial={{ opacity: 0 }}
                                    whileInView={mainCardDone ? { opacity: 1 } : {}}
                                    transition={{ duration: 1, delay: 0.5 * index }}
                                    style={{ display: 'flex', gap: '5px', alignItems: 'flex-end', }}>
                                    <Card styles={{ width: '200px', minWidth: '150px', maxWidth: '200px', height: '70px', fontSize: '30px', }} description={item} />

                                    <div style={{
                                        width: '15px', height: '15px', marginBottom: '10px', background: 'var(--text1)',
                                        borderRadius: '50%',
                                        boxShadow: '0 0 5px 1px var(--text1)'
                                    }} />
                                </motion.div>
                            )
                        })}
                    </div>
                    <Card styles={{ width: '100%', maxWidth: '600px', height: 'auto', textAlign: 'justify' }} title={`Hi! I'm Vitaliy`} description={'a developer with a bachelor’s degree in computer science. Over the years working in IT, I’ve gained experience in a wide range of areas: Web (front-end, back-end), mobile development, desktop applications, and even game development. This helps me think outside the box and find creative solutions to unconventional problems. On this website, you can learn more about my skills.'} />


                </motion.div>

            </div >
        </section >
    )
}