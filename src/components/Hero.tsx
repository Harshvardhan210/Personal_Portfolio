import { motion } from "framer-motion";
import heroPortrait from "../assets/hero-portrait-removebg-preview.png";

const Hero = () => {
  const title = "Harshvardhan Tiwari.";
  const words = title.split(" ");

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
      <div className="flex flex-col gap-8 text-center md:text-left items-center md:items-start">
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

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md reveal-text relative z-10">
            Designing immersive digital experiences through game development
            and modern web engineering. Focused on performance and visual depth.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 w-full sm:w-auto relative z-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-14 px-10 rounded-full bg-primary text-primary-foreground font-black text-xs uppercase tracking-widest hover:shadow-[0_0_30px_-5px_hsl(var(--primary))] transition-shadow"
          >
            Start a project
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-14 px-10 rounded-full bg-white/5 backdrop-blur-md text-foreground font-black text-xs uppercase tracking-widest border border-white/10 hover:bg-white/10 transition-colors"
          >
            Full case studies
          </motion.button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
        className="relative aspect-square md:aspect-auto md:h-[500px] w-full rounded-[3rem] md:rounded-[4rem] overflow-hidden glass-card group/hero"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-3xl animate-mesh bg-[length:200%_auto]" />

        {/* Abstract SVG Pattern */}
        <div className="absolute inset-0 opacity-10 group-hover/hero:opacity-20 transition-opacity duration-1000">
          {/* <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100L100 0M-10 110L110 -10M10 90L90 10" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2 2" />
            <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="0.1" rotate="45" />
          </svg> */}
        </div>



        <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
          <div className="relative w-full h-full rounded-[2.5rem] md:rounded-[3rem] border border-white/10 bg-black/20 backdrop-blur-3xl p-8 md:p-10 flex flex-col justify-end group-hover/hero:scale-[0.98] transition-transform duration-700">
            <img src={heroPortrait} alt="" className="w-full h-full rounded-[2.5rem] md:rounded-[3rem] absolute inset-0 object-cover" />
            {/* <div className="text-[10px] uppercase tracking-[0.3em] font-black text-primary mb-4">Featured Research</div> */}
            {/* <div className="text-2xl md:text-4xl font-black text-white tracking-tighter leading-tight">
              The future of <br />
              <span className="text-white/40">spatial interfaces.</span>
            </div> */}
          </div>
        </div>{/* Floating Shapes - Reduced for mobile */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-20 h-20 md:w-32 md:h-32 rounded-full border border-primary/10 bg-primary/5 backdrop-blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-10 w-16 h-16 md:w-24 md:h-24 rounded-2xl border border-accent/10 bg-primary/5 backdrop-blur-3xl rotate-12"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
