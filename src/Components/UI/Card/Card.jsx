
import { motion } from 'framer-motion'
import classes from './Card.module.css'

export const Card = ({ styles, title, description }) => {
    return (
        <div className={classes.container} style={styles}

        >

            <div className={classes.title}>
                <h3>{title}</h3>
            </div>

            <div className={classes.description}>
                <p className={classes.text}>
                    {description}
                </p>

            </div>

        </div>

    )
}