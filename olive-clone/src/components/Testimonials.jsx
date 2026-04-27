import React from "react";
import { Star, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Megan L.",
      text: "Olive has completely changed the way I shop for my family. I feel confident knowing exactly what's in our food before it ever hits our pantry.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=44",
      
      className: "absolute top-[-60px] md:top-[-100px] right-[0%] md:right-[5%] w-[320px] md:w-[380px] z-20",
      avatarClass: "absolute -bottom-4 -right-4",
    },
    {
      name: "Tina B.",
      text: "Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating. It's that easy.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=68",
      
      className: "absolute top-[65%] right-[0%] md:right-[-5%] w-[320px] md:w-[380px] z-20",
      avatarClass: "absolute -bottom-4 -left-4",
    },
    {
      name: "Lila M.",
      text: "After just a week of using Olive, I feel more in control of my family's nutrition than ever before. It's empowering to make informed choices so quickly.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=90",
      
      className: "absolute -bottom-[60px] md:-bottom-[40px] left-[5%] md:left-[15%] w-[320px] md:w-[380px] z-30",
      avatarClass: "absolute -bottom-4 -right-4",
    }
  ];

  return (
    <section className="relative py-24 md:py-40 bg-white px-4 overflow-visible min-h-[800px] flex items-center justify-center font-sans">

      <div className="absolute left-[-200px] md:left-[-150px] top-1/2 -translate-y-1/2 opacity-60 pointer-events-none z-0">
        <svg width="812" height="813" viewBox="-329 0 812 813" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[600px] md:w-[800px] h-auto text-[#EAF2EC]">
          <path d="M77.3736 0.964844C21.3156 0.964844 -24.1293 46.4097 -24.1293 102.468V160.487L-64.5964 120.015C-104.235 80.3766 -168.503 80.3766 -208.142 120.015C-247.781 159.654 -247.781 223.926 -208.142 263.565L-166.233 305.473H-227.135C-283.193 305.473 -328.638 350.918 -328.638 406.976C-328.638 463.034 -283.193 508.479 -227.135 508.479H-170.293L-209.855 548.041C-249.494 587.68 -249.494 651.947 -209.855 691.586C-170.216 731.225 -105.945 731.225 -66.3057 691.586L-24.1293 649.409V711.484C-24.1293 767.542 21.3156 812.987 77.3736 812.987C133.432 812.987 178.876 767.542 178.876 711.484V650.583L222.498 694.205C262.137 733.844 326.405 733.844 366.043 694.205C405.682 654.566 405.682 590.294 366.043 550.655L323.867 508.479H381.882C437.94 508.479 483.385 463.034 483.385 406.976C483.385 350.918 437.94 305.473 381.882 305.473H319.807L364.334 260.946C403.973 221.307 403.973 157.04 364.334 117.401C324.695 77.7619 260.424 77.7619 220.785 117.401L178.876 159.309V102.468C178.876 46.4097 133.432 0.964844 77.3736 0.964844Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">

        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className={`hidden md:flex flex-col bg-white rounded-2xl p-6 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 ${t.className}`}
          >
            <p className="text-gray-700 text-[13px] leading-relaxed mb-4">
              {t.text}
            </p>
            <div className="flex flex-col gap-1 mt-auto">
              <span className="text-[13px] font-bold text-gray-900">{t.name}</span>
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={12} fill="#FFC107" color="#FFC107" />
                ))}
              </div>
            </div>
  
            <div className={`${t.avatarClass} w-10 h-10 rounded-full border-[3px] border-white shadow-md overflow-hidden bg-gray-200 z-30`}>
               <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 relative">

          <div className="w-full md:w-1/2 relative z-10">
            <div className="w-full aspect-[4/5] md:aspect-square rounded-[32px] overflow-hidden shadow-2xl relative">
              <img
                src="/image-copy.png"
                alt="Mother and children"
                className="w-full h-full object-cover grayscale brightness-95"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 relative z-10 flex flex-col justify-center pt-8 md:pt-0">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#1A3622] leading-[1.1] mb-6">
                Real Mothers<br />Real Results
              </h2>

              <a href="#" className="inline-flex items-center gap-2 text-[#386641] font-medium hover:underline transition-all">
                read all 3,147+ reviews
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

        </div>

        <div className="flex flex-col gap-6 mt-12 md:hidden">
          {testimonials.map((t, idx) => (
            <div key={`mobile-${idx}`} className="bg-white rounded-2xl p-6 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 relative">
              <p className="text-gray-700 text-sm leading-relaxed mb-4">{t.text}</p>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-gray-900">{t.name}</span>
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={12} fill="#FFC107" color="#FFC107" />
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 right-4 w-10 h-10 rounded-full border-[3px] border-white shadow-md overflow-hidden bg-gray-200">
                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}