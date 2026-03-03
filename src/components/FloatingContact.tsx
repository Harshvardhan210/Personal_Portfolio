import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingContact = () => {
    const [visible, setVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSend = () => {
        if (!message.trim()) return;
        const text = encodeURIComponent(message.trim());
        window.open(`https://wa.me/919111018491?text=${text}`, "_blank");
        setMessage("");
        setOpen(false);
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-8 right-6 z-50 flex flex-col items-end gap-3"
                >
                    {/* Message Box */}
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="w-96 rounded-2xl overflow-hidden"
                                style={{
                                    background: "hsl(var(--background))",
                                    border: "1px solid hsl(var(--primary)/0.2)",
                                    boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
                                }}
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between px-4 py-3" style={{ background: "hsl(var(--primary))" }}>
                                    <span className="text-xs font-black uppercase tracking-widest" style={{ color: "hsl(var(--primary-foreground))" }}>
                                        💬 Send a Message
                                    </span>
                                    <button onClick={() => setOpen(false)} style={{ color: "hsl(var(--primary-foreground)/0.7)" }} className="hover:opacity-100 transition-opacity">
                                        ✕
                                    </button>
                                </div>

                                {/* Body */}
                                <div className="p-4 flex flex-col gap-3">
                                    <textarea
                                        rows={5}
                                        placeholder="Type your message…"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                                        className="w-full text-sm px-3 py-2.5 rounded-xl outline-none resize-none"
                                        style={{
                                            background: "hsl(var(--primary)/0.07)",
                                            border: "1px solid hsl(var(--primary)/0.15)",
                                            color: "hsl(var(--foreground))",
                                        }}
                                    />
                                    <button
                                        onClick={handleSend}
                                        disabled={!message.trim()}
                                        className="w-full py-2.5 rounded-xl text-xs font-black uppercase tracking-widest disabled:opacity-40 transition-opacity"
                                        style={{
                                            background: "#25D366",
                                            color: "#fff",
                                        }}
                                    >
                                        Send on WhatsApp →
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* FAB Button */}
                    <motion.button
                        onClick={() => setOpen((p) => !p)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Message me"
                        className="w-14 h-14 rounded-full flex items-center justify-center relative"
                        style={{
                            background: "hsl(var(--primary))",
                            boxShadow: "0 0 24px -4px hsl(var(--primary)/0.6)",
                        }}
                    >
                        {!open && <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "hsl(var(--primary)/0.3)" }} />}
                        <AnimatePresence mode="wait">
                            {open ? (
                                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }} className="text-lg font-black" style={{ color: "hsl(var(--primary-foreground))" }}>✕</motion.span>
                            ) : (
                                <motion.span key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }} className="text-xl">💬</motion.span>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingContact;
