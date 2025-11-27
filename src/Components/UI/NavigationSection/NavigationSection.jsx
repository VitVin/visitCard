import classes from './NavigationSection.module.css'
import { motion } from "framer-motion";
import { NavigationButton } from "../Button/Button";
import { useMediaQuery } from 'react-responsive';
import FloatingNav from '../FloatingNav/FloatingNav';




export const NavigationSection = ({ isPageActive, scrollToSection, pages, currentPage, setIsPageActive }) => {
    const isMobile = useMediaQuery({ maxWidth: 1000 });


    return (<>
        {isMobile ?
            <FloatingNav pages={pages} scrollToSection={scrollToSection} /> :
            <motion.div className={classes.navigationSection}
                onPointerOver={() => setIsPageActive(false)}
                onPointerOut={() => setIsPageActive(true)}
                initial={{ y: 100 }}
                animate={{ y: isPageActive ? 50 : 0 }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >


                {
                    pages.map((item, index) => (
                        <NavigationButton key={index} isActive={currentPage === index && isPageActive} text={item} onClick={() => {
                            if (index === 6) {
                                index = 7
                            } scrollToSection(index)
                        }} />
                    ))
                }

            </motion.div>
        } </>)


}