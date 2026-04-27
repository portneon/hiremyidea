import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HERO_ASSETS = [
    "https://images.unsplash.com/photo-1576867757603-05b134ebc379?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=2787&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=2832&auto=format&fit=crop"
];

export default function ShieldHeroSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const rotationTimer = setInterval(() => {
            setActiveIndex((prev) => (prev === HERO_ASSETS.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(rotationTimer);
    }, []);

    return (
        <section className="md:my-24 my-8 max-w-6xl mx-auto px-4 md:px-8">
            
            <div className="flex flex-col w-full bg-[#386641] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl">

                <div className="relative w-full bg-[#386641] rounded-b-[10rem] md:rounded-b-[40rem] overflow-hidden">
                    
                    <div className="h-[300px] md:h-[600px] w-full relative">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <img
                                    src={HERO_ASSETS[activeIndex]}
                                    alt="Healthy lifestyle background"
                                    className="w-full h-full object-cover"
                                />
                                
                                <div className="absolute inset-0 bg-[#386641]/20" />
                            </motion.div>
                        </AnimatePresence>

                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                            {HERO_ASSETS.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`transition-all duration-500 rounded-full h-1.5 ${activeIndex === idx ? 'bg-white w-8' : 'bg-white/30 w-1.5'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center text-white px-6 py-16 md:py-24 bg-[#386641]">
                    <div className="max-w-4xl mx-auto">
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-10 leading-tight tracking-tight"
                        >
                            Protect Your Family <br className="hidden md:block" /> From Hidden Toxins
                        </motion.h1>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <a
                                href="https://signup.oliveapp.com/olive-onboarding/"
                                className="inline-block rounded-full bg-white px-10 py-4 text-lg md:text-xl font-bold text-[#386641] shadow-xl hover:bg-gray-50 transition-all hover:-translate-y-1 active:translate-y-0"
                            >
                                Sign up for Olive today
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}