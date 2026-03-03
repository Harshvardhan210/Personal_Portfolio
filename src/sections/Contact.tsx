import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-[3rem] md:rounded-[4rem] p-8 md:p-24 flex flex-col items-center text-center gap-10 md:gap-12 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />

      <div className="flex flex-col gap-4 md:gap-6 relative z-10">
        <h2 className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-black text-primary animate-pulse">Get in touch</h2>
        <h3 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] max-w-2xl px-4 md:px-0">
          Let's build something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">truly exceptional.</span>
        </h3>
        <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto">
          Open for collaborations, interesting projects, or just a friendly chat about design and technology.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 relative z-10 w-full md:w-auto px-6 md:px-0">
        <motion.button
          onClick={() => {
            window.open(
              "https://mail.google.com/mail/?view=cm&to=harshvardhanti12@gmail.com",
              "_blank"
            );
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="h-16 px-12 rounded-full bg-primary text-primary-foreground font-black text-sm uppercase tracking-widest hover:shadow-[0_0_40px_-5px_hsl(var(--primary))] transition-all w-full md:w-auto flex items-center justify-center cursor-pointer"
        >
          Email Me
        </motion.button>
        <div className="flex items-center gap-6 md:gap-8">
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/harsh-vardhantiwari/" },
            { label: "GitHub", href: "https://github.com/Harshvardhan210" },
            { label: "Twitter", href: "https://x.com/harshvardhant42" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href !== "#" ? "_blank" : undefined}
              rel={href !== "#" ? "noopener noreferrer" : undefined}
              className="text-[10px] md:text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors hover:translate-y-[-2px] inline-block duration-300"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;


