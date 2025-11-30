import { Card } from "../../UI/Card/Card"
import classes from './ProjectsPage.module.css'
import { color, motion } from "framer-motion";
import { useState } from "react";
import pocketStorageImage from '../../../assets/PocketStorage.png';
import mmotodayImage from '../../../assets/MMOTodayPictureNew.png';


export const ProjectsPage = () => {
    const [mainCardDone, setMainCardDone] = useState(false);


    const projectData = [{
        name: 'POCKETSTORAGE', description: `This mobile application allows you to organize a complex storage structure, whether it's boxes in a closet or an entire warehouse, and carry out convenient search and navigation through the structure. 
 The application features search functionality by item name or storage location, automatically indicates the location of the item you are looking for, as well as its quantity, name, and description. 
 It also allows you to manage storage objects (move, delete, edit). The fast speed of the application and its portability enable you to quickly and conveniently organize your storage structure and find the necessary items.
 The application supports 9 languages and offers customization options to adjust the appearance according to user preferences.
 In addition, it provides the ability to save and transfer your storage data to another device.`,
        stack: ['React Native', 'MobX'], picture: pocketStorageImage
    },
    {
        name: 'MMOTODAY', description: `
This is my first pet project built with React, and it still feels pretty cool to me.
This web application provides a convenient way to track
             and search online games using filters (genre, graphics, category, etc.) and search by name.
              Users can also access descriptions of the games, system requirements, trailers (if available),
               and links to the official websites of the games. The application is integrated with the backend and
                provides access to more than 390 games. Its responsive design allows the application to be used on a 
                computer, mobile phone, or tablet.`, link: 'https://vitvin.github.io/MMOToday/',
        stack: ['React'], picture: mmotodayImage
    }
    ]



    return (
        <section className={classes.container}>

            {projectData?.map((projectData, index) =>
                <div key={index} className={classes.content}>
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

                                            width: 'clamp(10px, 100%, 200px)', height: '70px', fontSize: '30px',
                                        }} description={item} />

                                    </motion.div>
                                )
                            })}
                            {projectData?.link && <a style={{ marginLeft: '10px', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href={projectData.link}>
                                <Card styles={{ minWidth: '200px', width: '100%', height: '70px', fontSize: '30px', border: '1px solid var(--text1)', color: 'var(--text1)', cursor: 'pointer', }} description={'Visit site'} /></a>

                            }
                        </div>

                    </motion.div>

                </div >)}

        </section >)



}