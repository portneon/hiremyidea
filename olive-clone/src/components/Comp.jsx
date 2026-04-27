import React from 'react';
import { OliveIcon, YukaIcon, BobbyIcon, StatusCheck, StatusCross } from './AppIcons';

const features = [
    { name: "Detailed Product Breakdown", olive: true, yuka: true, bobby: true },
    { name: "Comprehensive Water Data", olive: true, yuka: false, bobby: false },
    { name: "Monetize via Brand Deals", olive: false, yuka: true, bobby: true },
    { name: "Personalized Score Logic", olive: true, yuka: true, bobby: false },
    { name: "100% Independent Reviews", olive: true, yuka: false, bobby: true },
];

export default function ComparisonSection() {
    return (
        <section id="features" className="md:my-24 my-8 w-[75rem] h-[90rm] px-4 md:px-8 mx-auto">
            <div className="bg-[#386641] text-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-xl">

                <div className="text-center flex flex-col items-center gap-4 mb-12">
                    <h2 className="font-bold text-3xl md:text-[3.2rem] text-white leading-tight max-w-2xl">
                        Olive Food Scanner App vs. The Rest
                    </h2>
                    <a href="#" className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-white px-10 py-4 text-lg font-bold text-[#386641] transition-transform hover:scale-105 active:scale-95 shadow-lg">
                        <img src="/apple.svg" alt="Apple" className="w-5 h-5" />
                        Download for iOS
                    </a>
                </div>

                <div className="grid grid-cols-6 gap-4 py-8 border-b border-white/10 items-end">
                    <div className="col-span-3 text-white/50 text-sm font-bold uppercase tracking-widest">Feature</div>
                    <div className="col-span-1 flex flex-col items-center gap-2">
                        <OliveIcon />
                        <span className="text-[10px] md:text-xs font-bold uppercase">Olive</span>
                    </div>
                    <div className="col-span-1 flex flex-col items-center gap-2">
                        <YukaIcon />
                        <span className="text-[10px] md:text-xs font-bold uppercase">Yuka</span>
                    </div>
                    <div className="col-span-1 flex flex-col items-center gap-2">
                        <BobbyIcon />
                        <span className="text-[10px] md:text-xs font-bold uppercase">Bobby</span>
                    </div>
                </div>

                <div className="divide-y divide-white/10">
                    {features.map((feature, idx) => (
                        <div key={idx} className="grid grid-cols-6 gap-4 items-center py-6 md:py-8 hover:bg-white/5 transition-colors rounded-xl px-2 -mx-2">
                            <div className="col-span-3 text-base md:text-xl font-medium pr-4">
                                {feature.name}
                            </div>
                            <div className="col-span-1 flex justify-center">
                                {feature.olive ? <StatusCheck /> : <StatusCross />}
                            </div>
                            <div className="col-span-1 flex justify-center">
                                {feature.yuka ? <StatusCheck /> : <StatusCross />}
                            </div>
                            <div className="col-span-1 flex justify-center">
                                {feature.bobby ? <StatusCheck /> : <StatusCross />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}