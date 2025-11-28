import { Card } from "../../UI/Card/Card"
import classes from './ProjectsPage.module.css'
import { color, motion } from "framer-motion";
import { useState } from "react";
import mmotodayPicture from '../../../assets/MMOTodayPicture.png'
import { link } from "framer-motion/client";

export const ProjectsPage = ({ projectData }) => {
    const [mainCardDone, setMainCardDone] = useState(false);



    return (
        <section className={classes.container}>
            <div className={classes.content}>
                <motion.img src={projectData?.picture} className={classes.image}
                    initial={{ opacity: 0, x: 50, }}
                    whileInView={{ opacity: 1, x: 0, }}
                    viewport={{ amount: 0.7, once: false }}
                    transition={{ duration: 1 }}
                />
                <motion.div
                    initial={{ opacity: 0, x: -50, }}
                    whileInView={{ opacity: 1, x: 0, }}
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 1, ease: 'linear' }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '10px' }}
                    onAnimationComplete={() => setMainCardDone(true)}
                >
                    <Card styles={{ width: 'clamp(300px, 100%, 600px)', height: '70%', textAlign: 'justify' }}
                        title={projectData?.name}
                        description={projectData?.description} link={projectData?.link} />

                    <div style={{ display: 'flex', alignContent: 'center', flexDirection: 'row', gap: '5px', }}>

                        {projectData?.stack?.map((item, index) => {
                            return (
                                <motion.div key={index}
                                    initial={{ opacity: 0 }}
                                    whileInView={mainCardDone ? { opacity: 1 } : {}}
                                    transition={{ duration: 1, delay: 0.5 * index }}
                                >

                                    <Card styles={{

                                        width: 'clamp(10px, 100%, 200px)', height: 'auto', fontSize: '30px',
                                    }} description={item} />

                                </motion.div>
                            )
                        })}
                        {projectData?.link && <a style={{ marginLeft: '10px', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href={projectData.link}>
                            <Card styles={{ minWidth: '200px', width: '100%', height: 'auto', fontSize: '30px', border: '1px solid var(--text1)', color: 'var(--text1)', cursor: 'pointer', }} description={'Visit site'} /></a>

                        }
                    </div>

                </motion.div>

            </div >
        </section >

    )
}