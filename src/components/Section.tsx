import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
    delay?: number;
}

export default function Section({ children, id, className = "", delay = 0 }: SectionProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={`section-container ${className}`}
        >
            {children}
        </motion.section>
    );
}
