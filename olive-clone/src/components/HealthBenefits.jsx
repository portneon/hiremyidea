import React, { useState, useEffect, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";
import apple from "../../public/apple.svg";

// --- ANIMATION HELPERS ---

// 1. Slot Counter Logic - Triggers when in view
const SlotCounter = ({ targetNumber, duration = 2.5 }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(1, targetNumber, {
        duration: duration,
        ease: [0.33, 1, 0.68, 1],
        onUpdate: (value) => setCount(Math.floor(value)),
      });
      return () => controls.stop();
    }
  }, [isInView, targetNumber, duration]);

  return <span ref={nodeRef}>{count}</span>;
};

// 2. Marquee Row Logic
const MarqueeRow = ({ tags, direction = 1, speed = 25 }) => {
  const duplicatedTags = [...tags, ...tags, ...tags];
  return (
    <div className="flex w-full overflow-hidden py-3">
      <motion.div
        className="flex gap-6 items-center whitespace-nowrap"
        animate={{ x: direction > 0 ? [0, -1000] : [-1000, 0] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {duplicatedTags.map((tag, i) => (
          <div key={i} className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-gray-100 shadow-sm">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white ${tag.safe ? 'bg-[#386641]' : 'bg-black'}`}>
              {tag.safe ? "✓" : "✕"}
            </div>
            <span className="text-base font-bold text-[#273522]">{tag.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function HealthBenefits() {
  const row1 = [{ label: "Non-GMO", safe: true }, { label: "Saccharin", safe: false }, { label: "Cholesterol-Free", safe: true }, { label: "High Fibre", safe: true }];
  const row2 = [{ label: "Artificial Colors", safe: false }, { label: "Gluten-Free", safe: true }, { label: "Palm Oil", safe: false }, { label: "Rich in Antioxidants", safe: true }];

  return (
    <section className="relative bg-[#F5FAF6] py-20">

      <div className="pb-32 md:py-48 bg-[#386641] px-4">
        <div className="flex flex-col md:flex-row p-8 md:p-0 justify-between max-w-7xl mx-auto items-start gap-10">
          <h2 className="font-semibold max-w-2xl text-3xl md:text-[3.8rem] text-white leading-tight">
            Health Benefits of Using Olive
          </h2>
          <div className="flex gap-8 flex-col">
            <div className="max-w-md md:text-2xl text-lg text-[#F5FAF6] font-light leading-relaxed">
              Olive proactively flags harmful ingredients and offers personalized recommendations for your family's health.
            </div>
            <a href="#" className="w-fit inline-flex items-center gap-2 rounded-full bg-white text-[#386641] px-8 py-4 text-base font-bold shadow-lg transition-transform hover:scale-105">
              <img src={apple} alt="apple" /> Download for iOS
            </a>
          </div>
        </div>
      </div>

      <div className="-mt-32 flex flex-col px-4 md:px-8 pb-24 gap-12">

        <div className="p-6 bg-white max-w-7xl w-full mx-auto rounded-[40px] grid grid-cols-1 lg:grid-cols-2 shadow-xl border border-gray-100 overflow-hidden min-h-[600px]">
          <div className="p-12 flex flex-col justify-center">
            <h3 className="text-4xl font-bold mb-6 text-gray-900">Achieve Nutritional Clarity</h3>
            <ul className="space-y-6">
              {[
                "Olive breaks down every ingredient into clear information.",
                "Scores products out of 100 based on health experts.",
                "Informed decisions for improved health outcomes."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#386641] flex items-center justify-center shrink-0 mt-1 shadow-md">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#E8F3EA] rounded-[32px] relative flex flex-col items-center justify-center overflow-hidden p-10">

            <div className="relative w-full h-64 flex items-center justify-center mb-16">
              <img
                src="https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-1.png&w=3840&q=75"
                className="absolute w-40 h-56 object-cover rounded-2xl shadow-xl border-4 border-white"
                style={{ transform: "translateX(-90px) rotate(-18deg)" }}
              />
              <img
                src="https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-2.png&w=3840&q=75"
                className="absolute w-40 h-56 object-cover rounded-2xl shadow-xl border-4 border-white"
                style={{ transform: "translateX(90px) rotate(18deg)" }}
              />
              <img
                src="https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-3.png&w=3840&q=75"
                className="relative z-10 w-48 h-64 object-cover rounded-2xl shadow-2xl border-4 border-white"
              />
            </div>
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, type: "spring", damping: 12 }}
              className="bg-white p-7 rounded-[28px] shadow-2xl border border-gray-100 flex items-center gap-6 w-full max-w-[340px] z-20"
            >
              <img src="https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fstratus-ice-cream.png&w=96&q=75" className="w-16 h-16 object-contain" alt="product" />
              <div>
                <h4 className="font-bold text-[#1F3824] text-lg">Straus Ice Cream</h4>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-[#386641]">
                    <SlotCounter targetNumber={96} />
                  </span>
                  <span className="text-gray-400 text-base font-bold">/100</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="p-6 bg-white max-w-7xl w-full mx-auto rounded-[40px] grid grid-cols-1 lg:grid-cols-2 shadow-xl border border-gray-100 overflow-hidden min-h-[600px]">
          <div className="p-12 flex flex-col justify-center order-2 lg:order-1">
            <h3 className="text-4xl font-bold mb-6 text-gray-900">Proactive Filtering</h3>
            <p className="text-gray-600 text-xl leading-relaxed">Instantly identify hidden sugars and dyes before they reach your cart.</p>
          </div>
          <div className="bg-[#FFF1F2] rounded-[32px] min-h-[500px] relative overflow-hidden flex items-center justify-center order-1 lg:order-2">
            <div className="absolute flex flex-col gap-5 w-[180%]" style={{ transform: "rotate(-15deg) skewX(-15deg)" }}>
              <MarqueeRow tags={row1} direction={1} speed={22} />
              <MarqueeRow tags={row2} direction={-1} speed={30} />
              <MarqueeRow tags={row1} direction={1} speed={25} />
              <MarqueeRow tags={row2} direction={-1} speed={35} />
            </div>
          </div>
        </div>

        <div className="p-6 bg-white max-w-7xl w-full mx-auto rounded-[40px] grid grid-cols-1 lg:grid-cols-2 shadow-xl border border-gray-100 overflow-hidden min-h-[600px]">
          <div className="p-12 flex flex-col justify-center">
            <h3 className="text-4xl font-bold mb-6 text-gray-900">Real Outcomes</h3>
            <p className="text-gray-600 text-xl leading-relaxed">Empowering parents to feel more in control of their family's health through informed decisions.</p>
          </div>
          <div className="bg-[#F0F4FF] rounded-[32px] min-h-[500px] flex items-center justify-center overflow-hidden">
            <img src="https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Ftitle.png&w=256&q=75" alt="Family" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
}