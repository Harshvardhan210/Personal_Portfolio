import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Work from "./sections/Work";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Certification from "./sections/Certification";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // @ts-ignore
    window.lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }


    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-black selection:text-white">
      <Navbar />

      <main className="pt-24 pb-32">
        <Section delay={0.1}>
          <Hero />
        </Section>

        <Section id="work" delay={0.2}>
          <Work />
        </Section>

        <Section id="education" delay={0.3}>
          <Education />
        </Section>

        <Section id="certification" delay={0.35}>
          <Certification />
        </Section>

        <Section id="projects" delay={0.4}>
          <Projects />
        </Section>

        <Section id="contact" delay={0.7}>
          <Contact />
        </Section>
      </main>

      <footer className="py-20 px-6 border-t border-white/5 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h4 className="text-lg font-black tracking-tighter">HT.</h4>
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Crafted with precision & passion.</p>
          </div>

          <div className="flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            <a href="https://github.com/Harshvardhan210" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          </div>

          <p className="text-[10px] text-muted-foreground/40 font-mono">
            © 2026 HARSHVARDHAN TIWARI. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;

