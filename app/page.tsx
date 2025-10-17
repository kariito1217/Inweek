"use client"

import Link from "next/link"
import { MousePointer2 } from "lucide-react"

export default function HomePage() {


  return (
    // 🔧 Altura segura en móvil + sin overscroll
    <div className="relative overflow-hidden min-h-svh min-h-[100vh] overscroll-none">
      {/* Background */}
      <div
        className="
          absolute inset-0 w-full h-full bg-no-repeat 
          bg-contain bg-center             
          sm:bg-contain sm:bg-center    
          md:bg-contain md:bg-center
          lg:bg-contain lg:bg-center
          xl:bg-cover xl:bg-center
        "
        style={{
          backgroundImage: "url('/images/Recurso 3 (1).png')",
          backgroundColor: "#FF0074",
        }}
      />

   {/* Partículas decorativas (clipeadas por overflow-hidden del root) */}
<div className="absolute inset-0 pointer-events-none">
  <div
    className="absolute top-10 left-5 w-8 h-8 rounded-full"
    style={{
      backgroundColor: "rgba(255, 0, 116, 0.55)",
      boxShadow:
        "0 0 0 1px rgba(255,255,255,0.18), 0 6px 14px rgba(0,0,0,0.18), 0 0 18px rgba(255,0,116,0.35)",
      animation: "bounce 2s infinite, float-horizontal 8s ease-in-out infinite",
      mixBlendMode: "normal",
    }}
  />
  <div
    className="absolute top-32 right-10 w-12 h-12 rounded-full"
    style={{
      backgroundColor: "rgba(255, 0, 116, 0.5)",
      boxShadow:
        "0 0 0 1px rgba(255,255,255,0.18), 0 6px 14px rgba(0,0,0,0.18), 0 0 18px rgba(255,0,116,0.35)",
      animation: "bounce 2.5s infinite, float-diagonal 10s ease-in-out infinite",
      mixBlendMode: "normal",
    }}
  />
  <div
    className="absolute bottom-40 left-8 w-6 h-6 rounded-full"
    style={{
      backgroundColor: "rgba(255, 0, 116, 0.6)",
      boxShadow:
        "0 0 0 1px rgba(255,255,255,0.18), 0 6px 14px rgba(0,0,0,0.18), 0 0 18px rgba(255,0,116,0.35)",
      animation: "bounce 1.8s infinite, float-vertical 6s ease-in-out infinite",
      mixBlendMode: "normal",
    }}
  />
  <div
    className="absolute top-60 left-1/4 w-10 h-10 rotate-45"
    style={{
      backgroundColor: "rgba(255, 0, 116, 0.4)",
      boxShadow:
        "0 0 0 1px rgba(255,255,255,0.18), 0 6px 14px rgba(0,0,0,0.18), 0 0 18px rgba(255,0,116,0.35)",
      animation:
        "pulse 2s infinite, rotate-float 12s linear infinite, float-up-down 4s ease-in-out infinite",
      mixBlendMode: "normal",
    }}
  />
  <div
    className="absolute bottom-60 right-1/4 w-8 h-8 rotate-12"
    style={{
      backgroundColor: "rgba(255, 0, 116, 0.38)",
      boxShadow:
        "0 0 0 1px rgba(255,255,255,0.18), 0 6px 14px rgba(0,0,0,0.18), 0 0 18px rgba(255,0,116,0.35)",
      animation:
        "pulse 2.5s infinite, rotate-reverse 8s linear infinite, float-side-to-side 5s ease-in-out infinite",
      mixBlendMode: "normal",
    }}
  />
  <div
    className="absolute top-20 right-20 w-4 h-4 rounded-full"
   style={{
  backgroundColor: "rgba(255, 0, 116, 0.75)",
  boxShadow: "0 0 0 1px rgba(255,255,255,0.18), 0 6px 14px rgba(0,0,0,0.18), 0 0 18px rgba(255,0,116,0.35)",
  animation: "float-circular 16s linear infinite, glow-pulse 2.4s ease-in-out infinite",
  mixBlendMode: "normal",
}}
  />
  <div
    className="absolute bottom-20 left-20 w-5 h-5 rounded-full"
   style={{
  backgroundColor: "rgba(255, 0, 116, 0.68)",
  boxShadow: "0 0 0 1px rgba(255,255,255,0.18), 0 6px 14px rgba(0,0,0,0.18), 0 0 18px rgba(255,0,116,0.35)",
  animation: "float-vertical 7s ease-in-out infinite, glow-pulse 3s ease-in-out infinite",
  mixBlendMode: "normal",
}}
  />
  <div
    className="absolute top-1/2 left-2 w-3 h-3 rounded-full"
    style={{
      backgroundColor: "rgba(255, 0, 116, 0.78)",
      boxShadow:
        "0 0 0 1px rgba(255,255,255,0.25), 0 4px 10px rgba(0,0,0,0.2), 0 0 16px rgba(255,0,116,0.45)",
      animation: "bounce 1.5s infinite, float-circular 15s linear infinite",
      mixBlendMode: "normal",
    }}
  />
  <div
    className="absolute top-1/3 right-5 w-7 h-7 rounded-full"
    style={{
      backgroundColor: "rgba(255, 0, 116, 0.52)",
      boxShadow:
        "0 0 0 1px rgba(255,255,255,0.18), 0 6px 14px rgba(0,0,0,0.18), 0 0 18px rgba(255,0,116,0.35)",
      animation: "pulse 3s infinite, float-zigzag 20s ease-in-out infinite",
      mixBlendMode: "normal",
    }}
  />
  <div
    className="hidden sm:block absolute top-1/4 left-1/3 w-5 h-5 rounded-full"
    style={{
      backgroundColor: "rgba(255, 0, 116, 0.5)",
      boxShadow:
        "0 0 0 1px rgba(255,255,255,0.18), 0 6px 14px rgba(0,0,0,0.18), 0 0 18px rgba(255,0,116,0.35)",
      animation: "pulse 2.8s infinite, float-spiral 18s linear infinite",
      mixBlendMode: "normal",
    }}
  />
  <div
    className="hidden sm:block absolute bottom-1/3 right-1/3 w-6 h-6 rounded-full"
    style={{
      backgroundColor: "rgba(255, 0, 116, 0.54)",
      boxShadow:
        "0 0 0 1px rgba(255,255,255,0.18), 0 6px 14px rgba(0,0,0,0.18), 0 0 18px rgba(255,0,116,0.35)",
      animation: "pulse 3.2s infinite, float-wave 14s ease-in-out infinite",
      mixBlendMode: "normal",
    }}
  />
  <div
    className="hidden sm:block absolute top-3/4 left-1/5 w-4 h-4 rounded-full"
    style={{
      backgroundColor: "rgba(255, 0, 116, 0.58)",
      boxShadow:
        "0 0 0 1px rgba(255,255,255,0.18), 0 6px 14px rgba(0,0,0,0.18), 0 0 18px rgba(255,0,116,0.35)",
      animation: "bounce 2.2s infinite, float-orbit 16s linear infinite",
      mixBlendMode: "normal",
    }}
  />
</div>



      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-svh min-h-[100vh] px-4 sm:px-8">
        <div className="max-w-6xl mx-auto w-full">
          {/* 🔧 Subir botón en móvil: menos padding y un pequeño translate */}
          <div className="
              flex justify-center items-end 
              min-h-svh min-h-[100vh]
              pb-8 sm:pb-14 md:pb-20 lg:pb-20 
              translate-y-[-2vh] sm:translate-y-0
              sm:justify-end sm:pr-4 md:pr-8 lg:pr-12
            ">
            <Link href="/cronograma">
              <button
                className="liquid-btn neon-pulse relative px-2 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-12 lg:py-6 text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white bg-black border-2 border-[#b5ff00] rounded-lg cursor-pointer overflow-visible transition-all duration-300 min-w-[180px] xs:min-w-[190px] sm:min-w-[200px] md:min-w-[260px] lg:min-w-[320px] z-10 flex items-center justify-center gap-2 sm:gap-3 transform-gpu group shadow-2xl"
                style={{          
                  background: `
                    linear-gradient(#b5ff00 0 0) no-repeat calc(200% - var(--p, 0%)) 100% / 200% var(--p, 0.2em),
                    linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)
                  `,
                  transition:
                    "0.3s var(--t, 0s), background-position 0.3s calc(0.3s - var(--t, 0s)), transform 0.3s ease",
                  boxShadow: `
                  0 0 20px rgba(181, 255, 0, 0.35),
                  0 0 40px rgba(181, 255, 0, 0.2),
                  0 10px 30px rgba(0, 0, 0, 0.5),
                  inset 0 1px 0 rgba(255, 255, 255, 0.08)
                `,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.setProperty("--p", "100%")
                  e.currentTarget.style.setProperty("--t", "0.3s")
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.setProperty("--p", "0%")
                  e.currentTarget.style.setProperty("--t", "0s")
                }}
              >
               {/* <MousePointer2 className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 animate-bounce group-hover:animate-spin" />*/} 
                <span className=" text-xl relative z-10 group-hover:animate-pulse text-white">Agéndate aquí</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-horizontal {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(30px) translateY(-10px); }
          50% { transform: translateX(60px) translateY(0px); }
          75% { transform: translateX(30px) translateY(10px); }
        }
        @keyframes float-diagonal {
          0%, 100% { transform: translateX(0px) translateY(0px) scale(1); }
          25% { transform: translateX(-40px) translateY(-30px) scale(1.1); }
          50% { transform: translateX(-80px) translateY(-60px) scale(1); }
          75% { transform: translateX(-40px) translateY(-30px) scale(0.9); }
        }
        @keyframes float-vertical {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-50px); }
        }
        @keyframes float-up-down {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes float-side-to-side {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(40px); }
        }
        @keyframes rotate-float {
          0% { transform: rotate(45deg) translateX(0px); }
          100% { transform: rotate(405deg) translateX(20px); }
        }
        @keyframes rotate-reverse {
          0% { transform: rotate(12deg); }
          100% { transform: rotate(-348deg); }
        }
      @keyframes glow-pulse {
          0%, 100% {
            box-shadow:
              0 8px 18px rgba(0, 0, 0, 0.25),
              0 0 22px rgba(255, 0, 116, 0.35);
          }
          50% {
            box-shadow:
              0 10px 24px rgba(0, 0, 0, 0.3),
              0 0 32px rgba(255, 0, 116, 0.45);
          }
        }
        @keyframes float-circular {
          0% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(20px) translateY(-20px); }
          50% { transform: translateX(0px) translateY(-40px); }
          75% { transform: translateX(-20px) translateY(-20px); }
          100% { transform: translateX(0px) translateY(0px); }
        }
        @keyframes float-zigzag {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          16% { transform: translateX(-25px) translateY(-15px); }
          33% { transform: translateX(25px) translateY(-30px); }
          50% { transform: translateX(-25px) translateY(-45px); }
          66% { transform: translateX(25px) translateY(-30px); }
          83% { transform: translateX(-25px) translateY(-15px); }
        }
        @keyframes float-spiral {
          0% { transform: translateX(0px) translateY(0px) rotate(0deg); }
          25% { transform: translateX(30px) translateY(-20px) rotate(90deg); }
          50% { transform: translateX(0px) translateY(-40px) rotate(180deg); }
          75% { transform: translateX(-30px) translateY(-20px) rotate(270deg); }
          100% { transform: translateX(0px) translateY(0px) rotate(360deg); }
        }
        @keyframes float-wave {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(40px) translateY(-15px); }
          50% { transform: translateX(0px) translateY(-30px); }
          75% { transform: translateX(-40px) translateY(-15px); }
        }
        @keyframes float-orbit {
          0% { transform: translateX(0px) translateY(0px) scale(1); }
          25% { transform: translateX(50px) translateY(-25px) scale(1.2); }
          50% { transform: translateX(0px) translateY(-50px) scale(1); }
          75% { transform: translateX(-50px) translateY(-25px) scale(0.8); }
          100% { transform: translateX(0px) translateY(0px) scale(1); }
        }

        .liquid-btn { 
        animation: gentle-float 3s ease-in-out infinite; 
         font-family: 'Montserrat', Arial, sans-serif !important;
        }
        .liquid-btn:hover {
          color: #000 !important; border-color: #b5ff00;
          transform: translateY(-2px) scale(1.05);
        }
       .liquid-btn span {
          transition: color 0.3s ease 0.25s; /* espera 0.25s antes de cambiar el color */
          font-family: 'Montserrat', Arial, sans-serif !important;
        }

        .liquid-btn:hover span {
          color: #000 !important;
          opacity: 1 !important;
        }

        .neon-pulse::before, .neon-pulse::after {
          content: ""; position: absolute; inset: -4px; border: 2px solid #b5ff00;
          border-radius: inherit; animation: pulseOut 2s ease-out infinite; opacity: 0; pointer-events: none;
        }
        .neon-pulse::after { animation-delay: 1s; }

        @keyframes pulseOut { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(1.5); opacity: 0; } }
        @keyframes gentle-float { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-8px) scale(1.02)} }
      `}</style>
    </div>
  )
}
