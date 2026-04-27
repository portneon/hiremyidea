import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Share2, ChevronDown, Leaf } from "lucide-react";

const products = [
  {
    id: "olipop",
    name: "Strawberry Vanilla Sparkling Tonic, Strawbe...",
    brand: "Olipop",
    score: 100,
    verdict: "Excellent",
    image: "https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-5.png&w=3840&q=75",
    detail: "This drink's high score is thanks to its simple and wholesome ingredients like strawberry juice and natural fibers, making it a great choice for your kids.",
  },
  {
    id: "milk",
    name: "Gradea Raw Pure Jersey Milk",
    brand: "Claravale Farm",
    score: 100,
    verdict: "Excellent",
    image: "https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-1.png&w=3840&q=75",
    detail: "This product scored perfectly because it contains no processed sugars, seed oils, or harmful additives.",
  },
  {
    id: "chips",
    name: "Late July Sea Salt Tortilla Chips",
    brand: "Late July Snacks",
    score: 58,
    verdict: "Fair",
    image: "https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-2.png&w=3840&q=75",
    detail: "This snack's score is affected by the presence of organic sunflower oil.",
  },
  {
    id: "bagels",
    name: "Organic Plain Bagels",
    brand: "Killer Bread",
    score: 42,
    verdict: "Avoid",
    image: "https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-3.png&w=3840&q=75",
    detail: "These bagels contain added sugars and highly processed wheat flour.",
  },
  {
    id: "honey",
    name: "Honey Mamas Oregon Mint",
    brand: "Honey Mamas",
    score: 85,
    verdict: "Great",
    image: "https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-4.png&w=3840&q=75",
    detail: "A high-quality treat with minimal processed ingredients.",
  }
];

export default function OliveHeroPremium() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const activeProduct = products[activeIndex];

  return (
    <section className="relative flex flex-col items-center justify-center bg-[#F5FAF6] py-12 overflow-hidden min-h-screen">

      <div className="relative z-20 h-[800px] w-[340px] md:h-[740px] md:w-[360px]">

        <div className="absolute top-[85px] flex w-full justify-center pointer-events-none z-60 pt-8">
          <div className="relative flex items-center justify-center w-full">
            {products.map((product, index) => {
              let offset = index - activeIndex;
              
              if (offset < -2) offset += products.length;
              if (offset > 2) offset -= products.length;

              const distance = Math.abs(offset);
              const isCenter = distance === 0;

              return (
                <motion.div
                  key={product.id}
                  animate={{
                    x: offset * 135, 
                    scale: isCenter ? 1.15 : distance === 1 ? 0.9 : 0.75,
                    opacity: isCenter ? 1 : distance === 1 ? 0.3 : 0.1, 
                    filter: isCenter ? "blur(0px)" : `blur(${distance * 1.5}px)`,
                  }}
                  transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute"
                >
                  <div className="h-24 w-24 md:h-28  md:w-28 rounded-[2.2rem] bg-white p-3 shadow-md flex items-center justify-center  overflow-hidden">
                    <img src={product.image} alt="" className="h-full w-full object-cover rounded-xl" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="absolute -inset-2 rounded-[4rem] bg-[#D9DDDA] border-[1px] border-black/5 shadow-xl" />
        <div className="absolute inset-0 rounded-[3.8rem] bg-white border-[10px] border-white shadow-2xl shadow-black/10 overflow-hidden">

          <div className="relative h-full w-full bg-white">

            <div className="absolute left-1/2 top-2 z-50 h-8 w-32 -translate-x-1/2 rounded-full bg-black flex items-center justify-end px-3">
              <div className="h-2 w-2 rounded-full bg-[#1A1A1A] border border-white/5" />
            </div>

            <div className="h-[210px] w-full" />

            <div className="flex justify-center mb-6">
              <span className="h-1 w-12 rounded-full bg-gray-100" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="px-6"
              >

                <div className="flex gap-4 items-start">
                  <img src={activeProduct.image} className="w-16 h-20 object-contain rounded-lg shadow-sm" />
                  <div className="flex-1">
                    <h2 className="text-[1.2rem] font-bold text-gray-900 leading-[1.2]">
                      {activeProduct.name}
                    </h2>
                    <p className="text-gray-400 text-sm font-medium ">{activeProduct.brand}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#2E9D57]" />
                        <div>
                          <p className="font-bold text-gray-900 text-[1.1rem] leading-none">{activeProduct.score}/100</p>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">{activeProduct.verdict}</p>
                        </div>
                      </div>
                      <div className="flex gap-4 text-gray-400">
                        <Heart size={22} strokeWidth={2} />
                        <Share2 size={20} strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-5 rounded-[1.8rem] bg-white border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-[#E9F5ED] p-1.5 rounded-xl">
                      <span className="text-sm">🥑</span>
                    </div>
                    <span className="text-[14px] font-extrabold text-gray-800 tracking-tight">Oliver Says:</span>
                  </div>
                  <p className="text-[12.5px] leading-[1.6] text-gray-500 font-medium italic">
                    "{activeProduct.detail}"
                  </p>
                </div>

                <div className="mt-10">
                  <h3 className="font-bold text-[15px] text-gray-800 mb-5">Breakdown</h3>

                  <div className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 bg-white shadow-[0_2px_6px_rgba(0,0,0,0.02)]">
                    <div className="flex items-center gap-3">
                      <Leaf size={18} className="text-gray-300" />
                      <span className="text-[14px] font-bold text-gray-700">Seed Oils</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="bg-[#E9F5ED] text-[#2E9D57] px-3 py-1 rounded-lg text-[11px] font-extrabold">None</span>
                      <span className="h-2.5 w-2.5 rounded-full bg-[#2E9D57]" />
                      <ChevronDown size={18} className="text-gray-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}