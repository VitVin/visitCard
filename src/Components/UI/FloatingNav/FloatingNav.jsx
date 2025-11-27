import { useState, useEffect, useRef } from "react";
import classes from "./FloatingNav.module.css";

export default function FloatingNav({ pages, currentPage, scrollToSection }) {
    const [open, setOpen] = useState(false);
    const drawerRef = useRef(null);

    // Закрытие по клику вне меню
    useEffect(() => {
        function handleClickOutside(e) {
            if (drawerRef.current && !drawerRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        if (open) document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    return (
        <>
            {/* Кнопка */}
            <button
                className={classes.menuButton}
                onClick={() => setOpen(!open)}
            >
                ☰
            </button>

            {/* Меню */}
            <div
                ref={drawerRef}
                className={`${classes.drawer} ${open ? classes.open : ""}`}
            >
                {pages.map((p, i) => (
                    <button
                        key={i}
                        className={`
                            ${classes.item} 
                            ${currentPage === i ? classes.active : ""}
                        `}
                        onClick={() => {
                            scrollToSection(i);
                            setOpen(false);
                        }}
                    >
                        {p}
                    </button>
                ))}
            </div>
        </>
    );
}
