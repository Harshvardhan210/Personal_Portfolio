import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, ExternalLink, ShieldCheck } from "lucide-react";
import heroPortrait from "../assets/hero-portrait-removebg-preview.png";
import resume from "../assets/Harshvardhan Tiwari Resume.pdf";

const ResumeModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsScanning(true);
      const timer = setTimeout(() => setIsScanning(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-2xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-5xl aspect-[1/1.4] md:aspect-auto md:h-[90vh] glass-card rounded-[2.5rem] overflow-hidden border-white/20 shadow-[0_0_50px_-12px_rgba(var(--primary-rgb),0.3)] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <FileText className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-white">Experience_Protocol.v2</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-tighter">Verified Identity Secure</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={resume}
                  download="Harshvardhan_Tiwari_Resume.pdf"
                  className="p-3 rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white group"
                  title="Download PDF"
                >
                  <Download size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <button
                  onClick={onClose}
                  className="p-3 rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Resume Body */}
            <div className="flex-1 relative bg-black/40 overflow-hidden">
              <iframe
                src={`${resume}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full border-none opacity-90 transition-opacity duration-1000"
                title="Harshvardhan Tiwari Resume"
              />

              {/* Unique Scanning Animation Overlay */}
              <AnimatePresence>
                {isScanning && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 pointer-events-none"
                  >
                    {/* Darker Overlay during scan */}
                    <div className="absolute inset-0 bg-primary/5 backdrop-brightness-75" />

                    {/* Scanning Laser */}
                    <motion.div
                      animate={{ top: ["0%", "100%", "0%"] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_20px_2px_hsl(var(--primary))] z-10"
                    />

                    {/* Scanning Feedback Text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-4">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="w-20 h-20 rounded-full border-2 border-primary/30 flex items-center justify-center bg-primary/5"
                        >
                          <ShieldCheck size={40} className="text-primary" />
                        </motion.div>
                        <div className="px-4 py-2 bg-black/60 backdrop-blur-xl border border-primary/30 rounded-full">
                          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Deciphering Profile...</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Decorative Tech Elements */}
              <div className="absolute top-4 left-4 p-2 pointer-events-none opacity-20">
                <div className="text-[8px] font-mono text-primary space-y-1">
                  <div>// ACCESSING_DB_SECURE</div>
                  <div>// ENCRYPTION_LEVEL: AES-256</div>
                  <div>// STATUS: OPTIMIZED</div>
                </div>
              </div>
            </div>

            {/* Footer with unique link */}
            <div className="p-6 border-t border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center gap-6">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <ExternalLink size={14} /> Open in Native Viewer
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const title = "Harshvardhan Tiwari.";
  const words = title.split(" ");

  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[60vh]">
      <div className="flex flex-col gap-8 items-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6 group cursor-default">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-muted-foreground group-hover:text-primary transition-colors">
              Computer Science Engineer
            </span>
          </div>

          <h1 className="text-5xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8 relative z-10">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
                className="inline-block mr-2 lg:mr-4 last:mr-0"
              >
                {word === "Tiwari." ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-mesh bg-[length:200%_auto]">
                    {word}
                  </span>
                ) : (
                  word
                )}

              </motion.span>
            ))}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md mx-auto reveal-text relative z-10">
            Java & Spring Boot Backend Developer.Turning ideas into powerful backend solutions.
            Driven by clean code and continuous growth.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 w-full sm:w-auto relative z-10 justify-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-14 px-10 rounded-full bg-primary text-primary-foreground font-black text-xs uppercase tracking-widest hover:shadow-[0_0_30px_-5px_hsl(var(--primary))] transition-shadow inline-flex items-center justify-center"
          >
            Contact Me
          </motion.a>
          <motion.button
            onClick={() => setIsResumeOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-14 px-10 rounded-full bg-white/5 backdrop-blur-md text-foreground font-black text-xs uppercase tracking-widest border border-white/10 hover:bg-white/10 transition-colors inline-flex items-center justify-center shadow-2xl"
          >
            View Resume
          </motion.button>
        </div>
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

export default Hero;

