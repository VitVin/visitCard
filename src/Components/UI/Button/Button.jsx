import classes from './Button.module.css'
import { motion, scale } from "framer-motion";

export const NavigationButton = ({ children, onClick, text, isActive }) => (
    <motion.button className={classes.container} style={isActive ? { backgroundColor: 'rgba(255, 255, 255, 0.5)' } : {}} onClick={onClick}

    >
        <h3>{text}</h3>
    </motion.button>
)
