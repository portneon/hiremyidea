import React from 'react';

// The "Circle Check" Icon
export const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
    </svg>
);

// The "Circle X" Icon with matching stroke logic
export const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-red-500 opacity-60">
        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm3.293 6.707a1 1 0 0 0-1.414 0L12 10.586 10.121 8.707a1 1 0 0 0-1.414 1.414L10.586 12l-1.879 1.879a1 1 0 0 0 1.414 1.414L12 13.414l1.879 1.879a1 1 0 0 0 1.414-1.414L13.414 12l1.879-1.879a1 1 0 0 0 0-1.414z" />
    </svg>
);

// Minimalist Text-Based Logos for the headers
export const OliveLogo = () => (
    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl shadow-inner">🫒</div>
);

export const YukaLogo = () => (
    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">🥕</div>
);

export const BobbyLogo = () => (
    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold">B</div>
);