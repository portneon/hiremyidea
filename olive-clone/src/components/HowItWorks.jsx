import React from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { LeafIcon, GlowingGradientSVG, VerifiedBadgeSVG } from "./OliveIcons";

const LeafParticle = ({ index, scannerProgress }) => {
  const positions = [
    { left: '45%', top: '75%' }, { left: '20%', top: '59%' }, { left: '10%', top: '67%' },
    { left: '74%', top: '60%' }, { left: '71%', top: '34%' }, { left: '6%', top: '17%' },
    { left: '38%', top: '10%' }, { left: '28%', top: '30%' }, { left: '8%', top: '49%' },
    { left: '30%', top: '56%' }, { left: '37%', top: '71%' }, { left: '76%', top: '5%' }
  ];
  const pos = positions[index % positions.length];
  const particleTop = parseFloat(pos.top);

  const opacity = useTransform(scannerProgress, (v) => {
    const distance = Math.abs(v - particleTop);
    return Math.max(0.1, 1 - distance / 20);
  });

  const scale = useTransform(scannerProgress, (v) => {
    const distance = Math.abs(v - particleTop);
    return Math.max(0.3, 1 - distance / 40);
  });

  return <LeafIcon style={{ left: pos.left, top: pos.top, opacity, scale, rotate: `${index * 45}deg` }} />;
};

export default function HowItWorks() {
  const scannerProgress = useMotionValue(50);

  useAnimationFrame((time) => {
    const val = 50 + 40 * Math.sin(time / 600);
    scannerProgress.set(val);
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section className="py-16 flex flex-col max-w-6xl mx-auto items-center overflow-hidden">
      <div className="flex relative text-[#253612] items-center justify-center mb-12 px-4">
        <h2 className="font-sans text-[#253612] max-w-xl font-medium text-3xl md:text-[3.2rem] text-center leading-tight">
          How the Olive Food Scanner App Works
        </h2>
        <img src="https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Ftitle.png&w=256&q=75" alt="avatar" className="ml-4 w-12 h-12 md:w-20 md:h-20" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4 md:px-0"
      >
        
        <motion.div variants={itemVariants} className="w-full p-8 rounded-[14px] bg-[#F5FAF6] border border-white/20 shadow-sm">
          <div className="h-[250px] rounded-2xl relative overflow-hidden bg-white/40 mb-6 flex items-center justify-center border border-white/40">
            {[...Array(12)].map((_, i) => (
              <LeafParticle key={i} index={i} scannerProgress={scannerProgress} />
            ))}
            <motion.div
              className="absolute w-[85%] h-[2px] bg-[#1F3824] z-30 shadow-[0_0_10px_rgba(31,56,36,0.6)]"
              style={{ top: useTransform(scannerProgress, v => `${v}%`) }}
            />
            <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-gray-300 rounded-tl-lg opacity-50" />
            <div className="absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 border-gray-300 rounded-tr-lg opacity-50" />
            <div className="absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2 border-gray-300 rounded-bl-lg opacity-50" />
            <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-gray-300 rounded-br-lg opacity-50" />
            <img src="https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fbarcode-image.png&w=640&q=75" className="w-32 z-10" alt="barcode" />
          </div>
          <h3 className="text-base font-semibold text-[#1F3824] mb-2">Scan & Detect</h3>
          <p className="text-sm text-neutral-600 leading-relaxed">Simply scan the barcode to instantly detect product ingredients. Peace of mind with every scan.</p>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full p-8 rounded-[14px] bg-[#F5FAF6] border border-white/20 shadow-sm">
          <div className="h-[250px] rounded-2xl relative overflow-hidden bg-white/40 mb-6 flex items-center justify-center border border-white/40">
            <motion.div
              className="flex gap-4 absolute"
              animate={{ x: [0, -380] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((item, i) => (
                <img
                  key={i}
                  src={`https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-1.png&w=3840&q=75`}
                  className="w-16 h-16 rounded-xl grayscale opacity-20 object-cover shadow-sm"
                  alt="analysis item"
                />
              ))}
            </motion.div>
            <GlowingGradientSVG />
            <div className="absolute bottom-4 z-20 bg-[#D4E8D8] text-[#1F3824] px-4 py-1.5 rounded-full flex items-center gap-2 border border-[#1F3824]/10 shadow-sm">
              <VerifiedBadgeSVG />
              <span className="text-[11px] font-bold uppercase tracking-wider">Safe to Consume</span>
            </div>
          </div>
          <h3 className="text-base font-semibold text-[#1F3824] mb-2">Data Analysis & Validation</h3>
          <p className="text-sm text-neutral-600 leading-relaxed">After scanning, our app compares data with an extensive food database using expert nutritional guidelines.</p>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full p-8 rounded-[14px] bg-[#F5FAF6] border border-white/20 shadow-sm">
          <div className="h-[250px] rounded-2xl relative overflow-hidden bg-[#eef5ef] mb-6 border border-white/40 flex items-center justify-center">

            <div
              className="absolute inset-0 z-0 overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
              }}
            >
              <motion.div
                className="flex flex-col gap-3 py-6 items-center"
                animate={{ y: [0, -164] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                {[...Array(2)].map((_, loop) => (
                  <React.Fragment key={loop}>
                    {[
                      "Veggie Spaghetti Squash",
                      "Chhole Chickpea Curry",
                      "Lentil Spinach Soup"
                    ].map((text, idx) => (
                      <div key={`${loop}-${idx}`} className="w-[85%] bg-white/40 backdrop-blur-[2px] px-4 py-3 rounded-xl border border-white/40 flex items-center gap-3 shadow-sm">
                        <div className="w-6 h-6 rounded-full bg-white/50 flex-shrink-0 flex items-center justify-center overflow-hidden">
                          <img
                            src={`https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-1.png&w=64&q=75`}
                            className="w-full h-full object-cover opacity-50"
                            alt="icon"
                          />
                        </div>
                        <span className="text-[10px] font-bold text-[#1F3824]/50 truncate">{text}</span>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>

            <div className="relative z-20 w-full h-full flex items-center justify-center pointer-events-none scale-90 md:scale-100">
              <img
                src="https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-1.png&w=3840&q=75"
                className="absolute w-24 h-36 object-cover rounded-xl shadow-xl border-2 border-white -rotate-[15deg] -translate-x-12"
                alt="Product Left"
              />
              <img
                src="https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-2.png&w=3840&q=75"
                className="absolute w-24 h-36 object-cover rounded-xl shadow-xl border-2 border-white rotate-[15deg] translate-x-12"
                alt="Product Right"
              />
              <img
                src="https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-3.png&w=3840&q=75"
                className="relative w-28 h-40 object-cover rounded-xl shadow-2xl border-2 border-white z-30"
                alt="Product Center"
              />
            </div>
          </div>

          <h3 className="text-base font-semibold text-[#1F3824] mb-2">Actionable Insights</h3>
          <p className="text-sm text-neutral-600 leading-relaxed">Olive provides tailored insights and healthier product suggestions for your family's health.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}