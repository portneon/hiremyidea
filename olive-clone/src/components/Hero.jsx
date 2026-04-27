import React, { useState } from "react";
import { ChevronDown, Apple } from "lucide-react";
import logo from "../assets/logo.svg";

export default function Hero() {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  return (
    <div className="flex flex-col w-full pt-3">
      <main className="w-full max-w-4xl mx-auto flex flex-col items-center text-center px-4 md:px-6">
        <div className="flex items-center gap-2 rounded-full mb-8">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
            <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white"></div>
            <div className="w-6 h-6 rounded-full bg-gray-500 border-2 border-white"></div>
          </div>
          <span className="text-xs font-medium text-gray-600">
            Trusted by thousands of healthy families
          </span>
        </div>

        <h1 className="text-4xl md:text-[4rem] lg:text-[5.2rem] font-bold tracking-tight text-[#1A3622] mb-6 leading-[1.1]">
          The Safest Way to <br /> Shop for Groceries
        </h1>

        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-600 max-w-2xl mb-10 font-medium tracking-tight">
          Use the Olive Food Scanner App to Instantly Eliminate Harmful
          Ingredients From Your Family's Diet and Get Expert-Backed Food
          Insights
        </p>

        <button className="flex items-center gap-2 bg-[#1A3622] text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-[#2B5034] transition-all hover:scale-105">
          <img src="/image.png" alt="Apple" className="w-5 h-5" />
          Download for iOS
        </button>
      </main>
    </div>
  );
}

