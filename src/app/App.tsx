import { Menu, ArrowDown, Cpu, Eye, Brain, Zap, X } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { PillTag } from './components/PillTag';
import { Button } from './components/Button';
import { ParallaxSection } from './components/ParallaxSection';
import { ScrollReveal } from './components/ScrollReveal';
import { NetworkCodeBackground } from './components/NetworkCodeBackground';
import { MatrixRain } from './components/MatrixRain';
import { TechOrbit } from './components/TechOrbit';
import { SkillDossier } from './components/SkillDossier';
import { ProjectGrid } from './components/ProjectGrid';
import { useRef, useState } from 'react';
import { Toaster, toast } from 'sonner';
import { ContactFormModal } from './components/ContactFormModal';

const getAssetUrl = (path: string) => {
  if (path.startsWith('/')) {
    const base = import.meta.env.BASE_URL;
    return base.endsWith('/') ? `${base}${path.slice(1)}` : `${base}${path}`;
  }
  return path;
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const heroLetterSpacing = useTransform(scrollYProgress, [0, 0.2], ["0.02em", "-0.15em"]);
  const gundamY = useTransform(scrollYProgress, [0, 0.3], [0, -300]);

  return (
    <div ref={containerRef} className="bg-gray-50 overflow-x-hidden">
      {/* Fixed Header Navigation */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-8 py-4 flex items-center justify-between backdrop-blur-lg bg-white/60 border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* The HUD border image */}
            <img 
              src={getAssetUrl("/hud/pf.png")}
              alt=""
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            {/* The profile picture */}
            <img
              src="https://avatars.githubusercontent.com/u/178634342?v=4"
              alt="Sishir Gope"
              className="w-[72%] h-[72%] rounded-full object-cover z-10 border border-black/5"
            />
          </div>
          <span className="font-cyber font-bold text-lg sm:text-xl tracking-[0.2em] uppercase blush-text">
            SISHIR GOPE
          </span>
        </div>

        <nav className="flex items-center gap-16">
          <a href="#about" className="text-xl font-cyber tracking-[0.3em] uppercase text-black/70 hover:text-wintry hover:[text-shadow:0_0_8px_rgba(255,255,255,0.7)] transition-all duration-300">
            ABOUT
          </a>
          <a href="#experience" className="text-xl font-cyber tracking-[0.3em] uppercase text-black/70 hover:text-wintry hover:[text-shadow:0_0_8px_rgba(255,255,255,0.7)] transition-all duration-300">
            EXPERIENCE
          </a>
          <a href="#skills" className="text-xl font-cyber tracking-[0.3em] uppercase text-black/70 hover:text-wintry hover:[text-shadow:0_0_8px_rgba(255,255,255,0.7)] transition-all duration-300">
            SKILLS
          </a>
          <a href="#projects" className="text-xl font-cyber tracking-[0.3em] uppercase text-black/70 hover:text-wintry hover:[text-shadow:0_0_8px_rgba(255,255,255,0.7)] transition-all duration-300">
            PROJECTS
          </a>
          <a href="#contact" className="text-xl font-cyber tracking-[0.3em] uppercase text-black/70 hover:text-wintry hover:[text-shadow:0_0_8px_rgba(255,255,255,0.7)] transition-all duration-300">
            CONTACT
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors shadow-sm"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>
      </motion.header>

      {/* Glass Block Side Panel Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[450px] z-[60] glass-condensation flex flex-col justify-center px-12 border-l border-white/10"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-2xl z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <div className="relative group translate-y-12">
            <div className="absolute bottom-full left-0 w-full aspect-square translate-y-8 cursor-pointer z-0 group/leaves hud-thunder mix-blend-multiply opacity-15 brightness-50">
              {/* Top-Left Leaf */}
              <div className="absolute inset-0 leaf-tl">
                <div className="w-full h-full transition-transform duration-500 group-hover/leaves:-translate-x-2 group-hover/leaves:-translate-y-2">
                  <img 
                    src={getAssetUrl("/hud/rr.png")} 
                    alt="" 
                    className="w-full h-full object-cover"
                    style={{ clipPath: 'inset(0 50% 50% 0)' }}
                  />
                </div>
              </div>
              {/* Top-Right Leaf */}
              <div className="absolute inset-0 leaf-tr">
                <div className="w-full h-full transition-transform duration-500 group-hover/leaves:translate-x-2 group-hover/leaves:-translate-y-2">
                  <img 
                    src={getAssetUrl("/hud/rr.png")} 
                    alt="" 
                    className="w-full h-full object-cover"
                    style={{ clipPath: 'inset(0 0 50% 50%)' }}
                  />
                </div>
              </div>
              {/* Bottom-Left Leaf */}
              <div className="absolute inset-0 leaf-bl">
                <div className="w-full h-full transition-transform duration-500 group-hover/leaves:-translate-x-2 group-hover/leaves:translate-y-2">
                  <img 
                    src={getAssetUrl("/hud/rr.png")} 
                    alt="" 
                    className="w-full h-full object-cover"
                    style={{ clipPath: 'inset(50% 50% 0 0)' }}
                  />
                </div>
              </div>
              {/* Bottom-Right Leaf */}
              <div className="absolute inset-0 leaf-br">
                <div className="w-full h-full transition-transform duration-500 group-hover/leaves:translate-x-2 group-hover/leaves:translate-y-2">
                  <img 
                    src={getAssetUrl("/hud/rr.png")} 
                    alt="" 
                    className="w-full h-full object-cover"
                    style={{ clipPath: 'inset(50% 0 0 50%)' }}
                  />
                </div>
              </div>
            </div>
              <nav className="flex flex-col gap-8 items-center">
              {['ABOUT', 'EXPERIENCE', 'SKILLS', 'PROJECTS', 'CONTACT'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="font-cyber text-4xl sm:text-5xl font-bold tracking-widest uppercase text-slate-800 hover:text-wintry hover:[text-shadow:0_0_15px_rgba(255,255,255,0.9)] transition-all duration-300"
                >
                  {item}
                </motion.a>
              ))}
            </nav>
            </div>

            {/* Future Trends banner at bottom */}
            <img 
              src={getAssetUrl("/hud/ftt.png")} 
              alt="" 
              className="absolute -bottom-28 left-0 right-0 w-full scale-y-110 scale-x-125 origin-bottom opacity-25 invert mix-blend-multiply"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section with Parallax */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <NetworkCodeBackground />
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center overflow-hidden"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <motion.h1 
            style={{ letterSpacing: heroLetterSpacing }}
            className="text-[15vw] font-raxon italic leading-none text-black opacity-10 whitespace-nowrap select-none text-center w-full"
          >
            SISHIR GOPE
          </motion.h1>
        </motion.div>

        <div className="absolute inset-0 flex flex-row items-center justify-between pointer-events-none px-8 pb-32 pt-24 z-20">
          {/* Left tags container */}
          <div className="relative w-[30vw] h-full flex flex-col justify-center gap-12 pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
              transition={{ opacity: { delay: 0.5, duration: 0.8 }, x: { delay: 0.5, duration: 0.8 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
              className="self-end mr-12"
            >
              <PillTag>INDOOR NAVIGATION</PillTag>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
              transition={{ opacity: { delay: 0.7, duration: 0.8 }, x: { delay: 0.7, duration: 0.8 }, y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 } }}
              className="self-start ml-4"
            >
              <PillTag>COGNITIVE LOAD ESTIMATOR</PillTag>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, y: [0, -12, 0] }}
              transition={{ opacity: { delay: 0.9, duration: 0.8 }, x: { delay: 0.9, duration: 0.8 }, y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.9 } }}
              className="self-center"
            >
              <PillTag>TYPESCRIPT</PillTag>
            </motion.div>
             <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, y: [0, 15, 0] }}
              transition={{ opacity: { delay: 1.1, duration: 0.8 }, x: { delay: 1.1, duration: 0.8 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.1 } }}
              className="self-end mr-8"
            >
              <PillTag>WORKFLOW AUTOMATION</PillTag>
            </motion.div>
          </div>

          {/* Right tags container */}
          <div className="relative w-[30vw] h-full flex flex-col justify-center gap-12 pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, y: [0, 15, 0] }}
              transition={{ opacity: { delay: 0.6, duration: 0.8 }, x: { delay: 0.6, duration: 0.8 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 } }}
              className="self-start ml-12"
            >
              <PillTag>VOICE ASSISTANT</PillTag>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
              transition={{ opacity: { delay: 0.7, duration: 0.8 }, x: { delay: 0.7, duration: 0.8 }, y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 } }}
              className="self-start ml-24"
            >
              <PillTag>PYTHON</PillTag>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
              transition={{ opacity: { delay: 1.0, duration: 0.8 }, x: { delay: 1.0, duration: 0.8 }, y: { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.0 } }}
              className="self-center"
            >
              <PillTag>COMPETITOR ANALYSIS</PillTag>
            </motion.div>
             <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
              transition={{ opacity: { delay: 1.2, duration: 0.8 }, x: { delay: 1.2, duration: 0.8 }, y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 } }}
              className="self-start ml-8"
            >
              <PillTag>JARVIS</PillTag>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="relative z-10 w-[800px] h-[90vh] flex items-center justify-center pointer-events-none"
          style={{ y: gundamY }}
        >
          <img
            src={getAssetUrl("/gundam.png")}
            alt="Gundam RX-78 Robot"
            className="w-full h-full object-contain drop-shadow-2xl scale-125"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-12 z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <p className="text-xs tracking-widest uppercase mb-4 font-mono">
            ENGINEERING TOMORROW'S AUTONOMOUS SYSTEMS TODAY
          </p>
          <div className="flex gap-2">
            <PillTag>JARVIS</PillTag>
            <PillTag>INDOORNAVFRESH</PillTag>
            <PillTag>COGNITIVE LOAD ESTIMATOR</PillTag>
          </div>
        </motion.div>



        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-black opacity-30" />
        </motion.div>

        {/* Chevron element beside Gundam legs */}
        <img 
          src={getAssetUrl("/hud/chevrons.png")} 
          alt="" 
          className="absolute -bottom-32 -right-16 w-[32rem] opacity-20 mix-blend-multiply z-10"
        />
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 relative bg-gray-50 text-slate-900 overflow-hidden border-b border-slate-100">
        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-6 mb-16">
              <div className="w-12 h-1 bg-wintry" />
              <h2 className="font-cyber text-5xl md:text-6xl font-black tracking-widest uppercase text-slate-800 flex items-center gap-4">
                ABOUT ME
                <img 
                  src={getAssetUrl("/hud/hx.png")} 
                  alt="" 
                  className="object-contain hx-icon-theme"
                />
              </h2>
              <div className="w-12 h-[1px] bg-slate-200 flex-grow" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-12">
            {/* Narrative Column */}
            <div className="md:col-span-7 space-y-6 text-lg text-slate-600 leading-relaxed font-sans">
              <ScrollReveal direction="left" delay={0.2}>
                <p className="text-xl font-cyber text-slate-900 tracking-wide font-bold">
                  AI & ML Developer specializing in Autonomous Systems, IoT, and Embedded Projects.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={0.3}>
                <p>
                  I am Sishir Gope, a Computer Science & Engineering student at the Institute of Engineering & Management (IEM), Kolkata. I build intelligent systems that bridge the gap between software algorithms and physical hardware components.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={0.4}>
                <p>
                  My research work centers on Advanced Driver Assistance Systems (ADAS) and Human-Computer Interaction (HCI). Recently, I completed an internship at the IEM Center of Excellence for Data Science, designing behavior planners, sensor fusion frameworks (LiDAR, Radar, Cameras), and path-tracking controllers in high-fidelity environments.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={0.5}>
                <p>
                  From creating autonomous vehicle navigation stacks to building custom IoT devices and deep learning models, I approach engineering with a focus on efficiency, reliability, and cutting-edge performance.
                </p>
              </ScrollReveal>
            </div>

            {/* Dossier Column */}
            <div className="md:col-span-5 relative">
              <ScrollReveal direction="right" delay={0.3}>
                <div className="relative border border-slate-200 bg-white/80 backdrop-blur-md p-8 shadow-sm hover:shadow-md transition-shadow duration-500 rounded-lg">
                  {/* Cyber Corners */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-wintry/40" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-wintry/40" />
                  
                  <h3 className="font-cyber text-2xl font-black text-slate-900 tracking-wider mb-6 pb-2 border-b border-slate-100 uppercase">
                    CORE FOCUS // DOSSIER
                  </h3>

                  <ul className="space-y-4 text-sm text-slate-600 font-mono">
                    <li className="flex justify-between items-start gap-4">
                      <span className="font-bold text-slate-500 uppercase tracking-widest text-xs">01. EDUCATION</span>
                      <span className="text-right text-slate-800">CSE @ IEM Kolkata (2024 - 2028)</span>
                    </li>
                    <li className="flex justify-between items-start gap-4">
                      <span className="font-bold text-slate-500 uppercase tracking-widest text-xs">02. CORE FOCUS</span>
                      <span className="text-right text-slate-800">Autonomous Vehicles, Sensor Fusion & Path Planning</span>
                    </li>
                    <li className="flex justify-between items-start gap-4">
                      <span className="font-bold text-slate-500 uppercase tracking-widest text-xs">03. ENVIRONMENTS</span>
                      <span className="text-right text-slate-800">CARLA Simulator, ROS</span>
                    </li>
                    <li className="flex justify-between items-start gap-4">
                      <span className="font-bold text-slate-500 uppercase tracking-widest text-xs">04. LANGUAGES</span>
                      <span className="text-right text-slate-800">Python, TypeScript, C++, Java</span>
                    </li>
                    <li className="flex justify-between items-start gap-4">
                      <span className="font-bold text-slate-500 uppercase tracking-widest text-xs">05. CLOUD STACK</span>
                      <span className="text-right text-slate-800">Google Cloud (Arcade Contributor)</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>

        </div>

        {/* Decorative Hazard Stripe Accent */}
        <div className="absolute bottom-12 right-8 hidden md:block">
          <ScrollReveal direction="right" delay={0.4}>
            <img 
              src={getAssetUrl("/hud/poster_07.png")} 
              alt="" 
              className="w-40 h-40 lg:w-48 lg:h-48 object-contain mix-blend-multiply invert opacity-25"
            />
          </ScrollReveal>
        </div>
      </section>


      {/* Projects Section */}
      <section id="experience" className="min-h-screen py-32 px-8 relative bg-[#020202] text-white overflow-hidden">
        {/* Frosted Gundam Unicorn Background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-70 bg-center bg-cover bg-no-repeat bg-fixed mix-blend-screen"
          style={{ backgroundImage: `url(${getAssetUrl('/gundam-unicorn.jpg')})` }}
        />
        {/* Frost Blur Layer */}
        <div className="absolute inset-0 backdrop-blur-[24px] bg-black/20 pointer-events-none" />

        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

        <ParallaxSection speed={-30} className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 right-[5%] text-[15vw] font-cyber text-wintry opacity-[0.02] whitespace-nowrap">
            EXP//LOG
          </div>
        </ParallaxSection>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Giant Block Title (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-0 w-1/2 pr-16 pointer-events-none opacity-50">
            <h2 className="font-cyber text-[120px] xl:text-[160px] font-black uppercase text-right leading-[0.85] tracking-tighter">
              EXPE<br/>
              RIEN<br/>
              CE//
            </h2>
          </div>

          <div className="relative space-y-16 pl-4 md:pl-0 mt-16 md:mt-0">
            {/* Vertical Laser Line */}
            <div className="absolute left-[23px] md:left-[50%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-wintry/0 via-wintry/50 to-wintry/0" />

            {/* ADAS Intern Card (Right Side) */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative md:w-1/2 md:ml-auto md:pl-16 group">
                {/* HUD Connecting Line & Node */}
                <div className="absolute left-[-23px] md:left-0 top-8 w-6 md:w-16 h-[1px] bg-wintry/50 group-hover:bg-wintry transition-colors" />
                <div className="absolute left-[-27px] md:left-[-4px] top-[28px] w-2 h-2 md:w-3 md:h-3 rounded-full bg-black border-2 border-wintry shadow-[0_0_10px_var(--wintry)] group-hover:scale-150 transition-transform" />

                <div className="relative border border-wintry/20 bg-wintry/[0.02] backdrop-blur-md p-8 md:p-10 hover:bg-wintry/[0.05] transition-colors duration-500">
                  {/* Cyber Corners */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-wintry/50" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-wintry/50" />
                  
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-cyber text-wintry text-sm tracking-widest">01</span>
                    <div className="h-[1px] flex-1 bg-wintry/20" />
                    <span className="font-cyber text-wintry/70 text-sm tracking-widest">JAN 2026 - FEB 2026</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black mb-2 text-white">ADAS RESEARCH INTERN</h3>
                  <h4 className="text-lg font-cyber text-wintry/80 mb-6 uppercase tracking-wider">IEM Center of Excellence</h4>
                  
                  <p className="text-slate-400 leading-relaxed mb-8">
                    Developed a complete autonomous driving stack for Indian traffic conditions with a nine-state FSM behaviour planner, LiDAR-Radar-Camera sensor fusion, and PID/Pure Pursuit control. Implemented a greedy global router with route-anchored lane-change trajectory generation.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 border-t border-wintry/10 pt-6 mb-8">
                    <div>
                      <div className="text-wintry text-2xl font-black mb-1">95%</div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest">Route Completion</div>
                    </div>
                    <div>
                      <div className="text-wintry text-2xl font-black mb-1">85%</div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest">Overtaking Success</div>
                    </div>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    <PillTag className="border-wintry/30 text-wintry bg-wintry/5 text-xs">CARLA SIMULATOR</PillTag>
                    <PillTag className="border-wintry/30 text-wintry bg-wintry/5 text-xs">LIDAR FUSION</PillTag>
                    <PillTag className="border-wintry/30 text-wintry bg-wintry/5 text-xs">FSM PLANNER</PillTag>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Google Cloud Card (Left Side on Desktop) */}
            <ScrollReveal direction="right" delay={0.3}>
              <div className="relative md:w-1/2 md:pr-16 group text-left md:text-right">
                {/* HUD Connecting Line & Node (Left on mobile, Right on desktop) */}
                <div className="absolute left-[-23px] md:left-auto md:right-0 top-8 w-6 md:w-16 h-[1px] bg-wintry/50 group-hover:bg-wintry transition-colors" />
                <div className="absolute left-[-27px] md:left-auto md:right-[-4px] top-[28px] w-2 h-2 md:w-3 md:h-3 rounded-full bg-black border-2 border-wintry shadow-[0_0_10px_var(--wintry)] group-hover:scale-150 transition-transform" />

                <div className="relative border border-wintry/20 bg-wintry/[0.02] backdrop-blur-md p-8 md:p-10 hover:bg-wintry/[0.05] transition-colors duration-500">
                  {/* Cyber Corners */}
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-wintry/50 hidden md:block" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-wintry/50 hidden md:block" />
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-wintry/50 md:hidden" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-wintry/50 md:hidden" />
                  
                  <div className="flex items-center gap-4 mb-6 md:flex-row-reverse">
                    <span className="font-cyber text-wintry text-sm tracking-widest">02</span>
                    <div className="h-[1px] flex-1 bg-wintry/20" />
                    <span className="font-cyber text-wintry/70 text-sm tracking-widest">JAN 2025 - JUN 2025</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black mb-2 text-white">CONTRIBUTOR</h3>
                  <h4 className="text-lg font-cyber text-wintry/80 mb-6 uppercase tracking-wider">Google Cloud Arcade Program</h4>
                  
                  <p className="text-slate-400 leading-relaxed mb-8 md:ml-auto md:pl-12">
                    Facilitated the Google Cloud Arcade Program to gamify cloud learning. Driven engagement and provided technical support to a cohort of learners navigating Google Cloud Skills Boost labs.
                  </p>

                  <div className="flex gap-2 flex-wrap md:justify-end">
                    <PillTag className="border-wintry/30 text-wintry bg-wintry/5 text-xs">GOOGLE CLOUD</PillTag>
                    <PillTag className="border-wintry/30 text-wintry bg-wintry/5 text-xs">TECH SUPPORT</PillTag>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Education Card (Right Side) */}
            <ScrollReveal direction="left" delay={0.4}>
              <div className="relative md:w-1/2 md:ml-auto md:pl-16 group">
                {/* HUD Connecting Line & Node */}
                <div className="absolute left-[-23px] md:left-0 top-8 w-6 md:w-16 h-[1px] bg-wintry/50 group-hover:bg-wintry transition-colors" />
                <div className="absolute left-[-27px] md:left-[-4px] top-[28px] w-2 h-2 md:w-3 md:h-3 rounded-full bg-black border-2 border-wintry shadow-[0_0_10px_var(--wintry)] group-hover:scale-150 transition-transform" />

                <div className="relative border border-wintry/20 bg-wintry/[0.02] backdrop-blur-md p-8 md:p-10 hover:bg-wintry/[0.05] transition-colors duration-500">
                  {/* Cyber Corners */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-wintry/50" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-wintry/50" />
                  
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-cyber text-wintry text-sm tracking-widest">03</span>
                    <div className="h-[1px] flex-1 bg-wintry/20" />
                    <span className="font-cyber text-wintry/70 text-sm tracking-widest">2024 - 2028</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black mb-2 text-white">B.TECH COMPUTER SCIENCE</h3>
                  <h4 className="text-lg font-cyber text-wintry/80 mb-6 uppercase tracking-wider">Institute of Engineering & Management, Kolkata</h4>
                  
                  <p className="text-slate-400 leading-relaxed mb-8">
                    Current undergraduate student focusing on Artificial Intelligence, Machine Learning, and Autonomous Systems.
                  </p>

                  <div className="flex gap-2 flex-wrap">
                    <PillTag className="border-wintry/30 text-wintry bg-wintry/5 text-xs">AI & ML</PillTag>
                    <PillTag className="border-wintry/30 text-wintry bg-wintry/5 text-xs">EMBEDDED SYSTEMS</PillTag>
                    <PillTag className="border-wintry/30 text-wintry bg-wintry/5 text-xs">JAVA</PillTag>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skill Matrix Section */}
      <section id="skills" className="min-h-[900px] xl:min-h-[1000px] relative bg-black text-white overflow-hidden">
        {/* Layer 1: Dark Base */}
        <div className="absolute inset-0 bg-[#020202] pointer-events-none" />
        
        {/* Layer 2: Matrix Bitcode Rain (Wintry Blue) - Masked out of the center */}
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(circle_at_center,transparent_450px,black_650px)]">
          <MatrixRain />
        </div>
        
        {/* Layer 3: Reactor Image Rotating & Glowing */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-90 mix-blend-screen">
          {/* Intense Orange Power Glows */}
          <div className="absolute w-[400px] h-[400px] bg-orange-500 rounded-full blur-[80px] opacity-60 animate-[pulse_2s_ease-in-out_infinite]" />
          <div className="absolute w-[900px] h-[900px] bg-amber-600 rounded-full blur-[160px] opacity-40 animate-[pulse_4s_ease-in-out_infinite]" />
          
          <style>{`
            @keyframes rockGently {
              0%, 100% { transform: rotate(-3deg) scale(1); }
              50% { transform: rotate(3deg) scale(1.02); }
            }
          `}</style>
          <img 
            src={getAssetUrl("/reactor.png")} 
            alt="Reactor" 
            className="w-[1200px] h-[1200px] max-w-none object-cover relative z-10"
            style={{ animation: 'rockGently 20s ease-in-out infinite' }}
          />
        </div>

        {/* Layer 4: Frosted Glass Opaque Layer */}
        <div className="absolute inset-0 backdrop-blur-[12px] bg-black/50 pointer-events-none" />

        {/* Foreground Content Container */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Title Positioned at Top */}
          <div className="absolute top-12 md:top-16 left-0 w-full pointer-events-auto">
            <ScrollReveal direction="up">
              <div className="flex items-center justify-center gap-6 px-8">
                <div className="w-12 h-1 bg-wintry" />
                <h2 className="font-cyber text-5xl md:text-6xl font-black tracking-widest uppercase text-white text-center">
                  CORE TECHNOLOGIES
                </h2>
                <div className="w-12 h-1 bg-wintry" />
              </div>
            </ScrollReveal>
          </div>

          {/* Orbital Technology Rings (Perfectly Centered on Reactor) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="pointer-events-auto w-full">
              <TechOrbit />
            </div>
          </div>
        </div>
      </section>

      {/* Skill Details Text Section */}
      <SkillDossier />

      {/* Featured Projects Section */}
      <section id="projects" className="min-h-screen py-32 px-8 relative bg-black">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <ParallaxSection speed={-30}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-cyber text-wintry opacity-[0.02] whitespace-nowrap">
            DEPLOY//LOG
          </div>
        </ParallaxSection>

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-6 mb-16">
              <div className="w-12 h-1 bg-wintry" />
              <h2 className="font-cyber text-5xl md:text-6xl font-black tracking-widest uppercase text-white">
                SYSTEM DEPLOYMENTS
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
             <ProjectGrid />
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-8 py-32 bg-[#020202] text-white relative overflow-hidden border-t border-wintry/20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] z-10" />
          
          <motion.img
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 0.8, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            src={getAssetUrl("/contact-bg.jpg")}
            alt="Background Gundam"
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
          />
          
          {/* Top and Bottom Gradient Fades for blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-[#020202]/20 to-[#020202] z-10" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
          <ScrollReveal direction="up">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-8 md:w-12 h-[1px] bg-wintry/50" />
              <h2 className="font-cyber text-sm md:text-base font-black tracking-widest uppercase text-wintry">
                COMMUNICATIONS LINK
              </h2>
              <div className="w-8 md:w-12 h-[1px] bg-wintry/50" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h3 className="text-5xl md:text-8xl font-black mb-8 tracking-tight font-cyber uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              INITIALIZE<br />TRANSMISSION
            </h3>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-lg md:text-xl mb-16 text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Ready to engineer tomorrow's autonomous systems? Establish a secure connection and let's collaborate on the next breakthrough.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => setIsContactOpen(true)}
                className="group relative px-12 py-5 bg-wintry/10 border border-wintry/50 hover:bg-wintry hover:border-wintry transition-all duration-500 min-w-[240px] cursor-pointer"
              >
                {/* Cyber Corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-wintry group-hover:border-white transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-wintry group-hover:border-white transition-colors" />
                <span className="font-cyber text-wintry group-hover:text-white tracking-[0.2em] font-bold text-sm">SEND EMAIL</span>
              </button>
              
              <a 
                href="https://www.linkedin.com/in/sishir-gope-9082b931a" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative px-12 py-5 bg-white border border-white hover:bg-gray-200 transition-all duration-500 min-w-[240px] text-black"
              >
                {/* Cyber Corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-black" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black" />
                <span className="font-cyber tracking-[0.2em] font-bold text-sm">LINKEDIN</span>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.8}>
            <div className="mt-32 pt-8 border-t border-wintry/10 flex flex-col md:flex-row items-center justify-between gap-8">
               <div className="flex gap-8">
                 <a href="https://github.com/SishirxGope" target="_blank" rel="noopener noreferrer" className="font-cyber text-xs text-wintry/50 hover:text-wintry hover:[text-shadow:0_0_10px_var(--wintry)] tracking-[0.2em] transition-all">GITHUB</a>
                 <a href="https://www.linkedin.com/in/sishir-gope-9082b931a" target="_blank" rel="noopener noreferrer" className="font-cyber text-xs text-wintry/50 hover:text-wintry hover:[text-shadow:0_0_10px_var(--wintry)] tracking-[0.2em] transition-all">LINKEDIN</a>
               </div>
               <div className="font-cyber text-wintry/30 text-xs tracking-[0.2em] uppercase">
                 © {new Date().getFullYear()} SISHIR GOPE. ALL RIGHTS RESERVED.
               </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <Toaster position="bottom-right" theme="dark" />
      <ContactFormModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}