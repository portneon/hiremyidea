import React from "react";
import { motion } from "framer-motion";

export default function IndependenceSection() {
    return (
        <section className="bg-[#F5FAF6] py-20 md:py-32 overflow-hidden">
            <div className="flex flex-col max-w-7xl mx-auto xl:items-start xl:justify-start px-6 md:px-8">
                <div className="flex relative items-start justify-start" >
                    <h2 className="font-bold text-[#FF9DB4] text-4xl md:text-7xl lg:text-8xl xl:text-[9rem] leading-none tracking-tighter">
                        100% Independent.
                    </h2>
                </div>

                <div className="flex flex-col items-start gap-6 w-full md:flex-row md:items-baseline md:gap-12 lg:gap-16 mt-2 md:mt-0">

                    <p className="font-bold text-[#FF9DB4] text-4xl md:text-7xl lg:text-8xl xl:text-[9rem] leading-none tracking-tighter">
                        Always.
                    </p>

                    <p className="text-xl font-bold text-[#386641] md:text-base lg:text-xl xl:text-3xl xl:max-w-2xl leading-[1.4] md:mb-2 lg:mb-4">
                        We <span className="text-[#AEB93E] italic">never monetize</span> through
                        brand deals, affiliate links, or ads — so{" "}
                        <span className="text-[#AEB93E]">you can trust</span> our{" "}
                        <span className="text-[#AEB93E]">recommendations</span> are always
                        aligned with our users.
                    </p>

                </div>
            </div>
        </section>
    );
}