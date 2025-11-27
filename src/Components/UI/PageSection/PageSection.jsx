import classes from './PageSection.module.css'
import { motion } from "framer-motion";


export const PageSection = ({ children, isActive, setIsPageActive, containerStyle, setCurrentSection, sectionNumber, title, id }) => {




    return (
        <motion.div id={id} className={classes.coverContainer}
            onViewportEnter={() => setCurrentSection(sectionNumber)}
            viewport={{ amount: 0.5, once: true }}
        >
            <div className={isActive ? classes.border : classes.borderActive}>
                <h1 className={classes.title}>{title}</h1>
                <div className={classes.container} style={containerStyle} >
                    {children}
                </div>
            </div >
        </motion.div>
    )
}