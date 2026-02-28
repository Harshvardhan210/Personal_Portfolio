import { motion, useMotionValue, useTransform } from "framer-motion";
import type { ReactNode } from "react";

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function BentoCard({ children, className = "", delay = 0 }: BentoCardProps) {
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    const rotateX = useTransform(y, [0, 1], [10, -10]);
    const rotateY = useTransform(x, [0, 1], [-10, 10]);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left) / rect.width);
        y.set((event.clientY - rect.top) / rect.height);
    }

    function handleMouseLeave() {
        x.set(0.5);
        y.set(0.5);
    }

    return (
        <div
            className={`relative group/card ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: "1000px" }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ rotateX, rotateY }}
                transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="glass-card rounded-[2.5rem] p-8 h-full overflow-hidden relative"
            >
                {/* Animated Border Beam */}
                <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-[-2px] rounded-[2.5rem] border-2 border-primary/20 animate-border-beam [clip-path:inset(0_0_98%_0)]" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 blur-2xl" />

                <div className="relative z-10 h-full flex flex-col">
                    {children}
                </div>
            </motion.div>
        </div>
    );
}
