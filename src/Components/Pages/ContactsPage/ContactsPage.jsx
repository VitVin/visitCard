import { motion } from "framer-motion";
import styles from "./ContactsPage.module.css";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function ContactsPage() {
    return (
        <motion.section
            className={styles.wrapper}
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1, }}
            viewport={{ amount: 0.3, once: false }}
            transition={{ duration: 1 }}>

            <motion.h2
                className={styles.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                CONTACTS
            </motion.h2>

            <div className={styles.list}>
                <ContactItem
                    icon={<Mail size={18} />}
                    label="Email"
                    value="pochtavivo@gmail.com"
                    link="mailto:pochtavivo@gmail.com"
                />

                <ContactItem
                    icon={<Phone size={18} />}
                    label="Telegram"
                    value="t.me/vitaliy_v_i_n"
                    link="https://t.me/vitaliy_v_i_n"
                />

                <ContactItem
                    icon={<Github size={18} />}
                    label="GitHub"
                    value="github.com/VitVin"
                    link="https://github.com/VitVin"
                />

                <ContactItem
                    icon={<Linkedin size={18} />}
                    label="LinkedIn"
                    value="linkedin.com/in/vitaliy-v-0406a825a/"
                    link="https://www.linkedin.com/in/vitaliy-v-0406a825a/"
                />
            </div>
        </motion.section>
    );
}

function ContactItem({ icon, label, value, link }) {
    return (
        <motion.a
            href={link}
            target={link.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, x: 6 }}
            whileTap={{ scale: 0.97 }}
            className={styles.item}
        >
            <div className={styles.icon}>{icon}</div>

            <div className={styles.textBlock}>
                <span className={styles.label}>{label}</span>
                <span className={styles.value}>{value}</span>
            </div>

            <div className={styles.arrow}>➜</div>
        </motion.a>
    );
}
