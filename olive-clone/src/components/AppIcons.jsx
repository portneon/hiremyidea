import React from 'react';

// Olive App Icon
export const OliveIcon = () => (
    <svg width="48" height="48" viewBox="0 0 52 52" fill="none">
        <rect width="52" height="52" rx="26" fill="#253612" />
        <path d="M36.0838 65.4775C9.79666 71.5984 0.367742 24.6086 25.2201 18.8218C50.0726 13.035 62.3709 59.3567 36.0838 65.4775Z" fill="#AEB93E" />
    </svg>
);

// Yuka-style Icon (Carrot)
export const YukaIcon = () => (
    <svg width="48" height="48" viewBox="0 0 53 55" fill="none">
        <path fill="#FF8C38" d="M44.434 27.64 28.888 12.914a5.019 5.019 0 0 0-7.676.998l-1.907 3.2 9.8 9.283a1.128 1.128 0 0 1 0 1.659 1.288 1.288 0 0 1-1.753 0l-9.309-8.819L6.934 37.918l5.25 4.973a1.128 1.128 0 0 1 0 1.659 1.288 1.288 0 0 1-1.751 0l-4.761-4.51-4.518 7.593c-2.416 4.061 2.33 8.565 6.617 6.276l19.298-10.297-7.244-6.861a1.128 1.128 0 0 1 0-1.659 1.288 1.288 0 0 1 1.752 0l7.732 7.325 14.064-7.506a4.474 4.474 0 0 0 1.051-7.27" />
    </svg>
);

// Bobby Approved-style Icon (Checkmark Badge)
export const BobbyIcon = () => (
    <svg width="48" height="48" viewBox="0 0 52 52" fill="none">
        <circle cx="26" cy="26" r="26" fill="#F5FAF6" />
        <path fill="#386641" d="M35 18l-12 12-5-5-2 2 7 7 14-14-2-2z" />
    </svg>
);

// Status Icons (Green Check and Red X)
export const StatusCheck = () => (
    <svg className="text-[#AEB93E] w-10 h-10 md:w-11 md:h-11" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
);

export const StatusCross = () => (
    <svg className="w-10 h-10 md:w-11 md:h-11" viewBox="0 0 45 45" fill="none">
        <circle cx="22.5" cy="22.5" r="20" fill="#DE1919" fillOpacity="0.2" />
        <path stroke="#DE1919" strokeWidth="4" strokeLinecap="round" d="M15 15l15 15m0-15L15 30" />
    </svg>
);