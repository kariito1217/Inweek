"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, MapPin, Sparkles } from "lucide-react"
import { useState } from "react"

const facultades = [
  {
    id: "DCB",
    nombre: "Departamento de Ciencias Básicas",
    descripcion: "",
    eventos: [
      { titulo: "4to Certamen de Física", fecha: "Viernes 24 de Octubre", hora: "--", lugar: "--", descripcion: "Descripción del evento." },
      { titulo: "Día mundial de la Estadística", fecha: "Lunes 20 de Octubre", hora: "--", lugar: "--", descripcion: "Descripción del evento" },
      { titulo: "3er Concurso de Cohetería", fecha: "Sábado 25 de Octubre", hora: "--", lugar: "--", descripcion: "Descripción del evento" },
    ],
  },
  {
    id: "DAI",
    nombre: "Decanato Asociado de Investigación",
    descripcion: "",
    eventos: [{ titulo: "ECE2I", fecha: "Jueves 23 de Octubre", hora: "--", lugar: "--", descripcion: "Descripción del evento" }],
  },
  {
    id: "FEDV",
    nombre: "Facultad de Educación a Distancia y Virtual",
    descripcion: "",
    eventos: [
      { titulo: "Encuentro de Semilleros", fecha: "Miércoles 22 de Octubre", hora: "--", lugar: "--", descripcion: "Descripción del evento" },
      { titulo: "Simposio de Biomecánica y ergonomía", fecha: "Miércoles 22 de Octubre", hora: "-", lugar: "-", descripcion: "Descripción del evento" },
    ],
  },
  {
    id: "FCE",
    nombre: "Facultad de Ciencias Empresariales",
    descripcion: "",
    eventos: [
      { titulo: "XVII Muestra empresarial", fecha: "Viernes-Sábado 24 y 25 de Octubre", hora: "--", lugar: "", descripcion: "Descripción del evento" },
    ],
  },
]

export default function CronogramaPage() {
  const [openId, setOpenId] = useState<string | undefined>(undefined)


const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const header = document.querySelector("header") as HTMLElement | null;
  const OFFSET = (header?.offsetHeight ?? 80) + 8;

  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  // 1) esperamos un poco para que Radix aplique open/close
  const delay = isDesktop ? 180 : 60;
  // 2) corrección extra por si el layout siguió cambiando (cierre del acordeón anterior, imágenes, etc.)
  const fixDelay = isDesktop ? 220 : 120;

  const align = () => {
    const trigger = el.querySelector("[data-radix-accordion-trigger]") as HTMLElement | null;
    const target = trigger ?? el;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const top = target.getBoundingClientRect().top + window.scrollY - OFFSET;
        window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
      });
    });
  };

  // Primer alineado
  window.setTimeout(align, delay);
  // Segundo alineado de “corrección”
  window.setTimeout(align, delay + fixDelay);
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-[#b5ff00]/20 to-[#00c8dc]/20 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "0s", animationDuration: "4s", animation: "pulse 4s infinite, float-slow 12s ease-in-out infinite" }}
        />
        <div
          className="absolute top-40 right-20 w-60 h-60 bg-gradient-to-r from-[#ff0074]/20 to-[#b5ff00]/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "6s", animation: "pulse 6s infinite, float-diagonal-large 15s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-50 h-50 bg-gradient-to-r from-[#00c8dc]/20 to-[#ff0074]/20 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s", animationDuration: "5s", animation: "pulse 5s infinite, float-circular-large 18s linear infinite" }}
        />
        <div
          className="absolute bottom-20 right-1/3 w-44 h-44 bg-gradient-to-r from-[#b5ff00]/20 to-[#00c8dc]/20 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "3s", animationDuration: "4.5s", animation: "pulse 4.5s infinite, float-wave 20s ease-in-out infinite" }}
        />
      </div>

      {/* Efectos pesados solo en desktop */}
      <div className="bg-gradient-to-r from-white/90 via-[#00c8dc]/10 to-[#b5ff00]/10 md:backdrop-blur-md md:shadow-2xl border-b-2 border-gradient-to-r from-[#00c8dc]/30 to-[#b5ff00]/30 relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-[#00c8dc] hover:to-[#b5ff00] transition-all duration-300 md:duration-500 md:hover:scale-110 hover:shadow-lg border-2 border-transparent hover:border-[#00c8dc]/50"
                >
                  <ArrowLeft className="w-4 h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline font-bold">Volver</span>
                </Button>
              </Link>
              <div>
                <div className="flex items-center space-x-3">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-[#00c8dc] via-[#ff0074] to-[#b5ff00] bg-clip-text text-transparent leading-[1.15] overflow-visible pb-0.5">
                    Cronograma INWEEK
                  </h1>
                  <Sparkles className="w-8 h-8 text-[#00c8dc] animate-spin drop-shadow-lg" style={{ animationDuration: "3s" }} />
                </div>
                <p className="text-sm sm:text-base text-gray-700 mt-2 font-semibold">🎯 Eventos por Facultad y Departamento</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 relative z-10">
        <div className="mb-10 sm:mb-12 text-center">
          <div className="bg-gradient-to-r from-white/80 via-[#00c8dc]/10 to-[#b5ff00]/10 md:backdrop-blur-md rounded-3xl p-8 md:shadow-2xl border-2 border-gradient-to-r from-[#00c8dc]/30 to-[#b5ff00]/30 hover:shadow-[#00c8dc]/20 transition-all duration-300 md:duration-500 md:hover:scale-[1.02]">
            <p className="text-base sm:text-lg lg:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-bold">
              ✨ Explora todos los eventos organizados durante la Semana de Innovación. Cada facultad ha preparado
              actividades únicas para enriquecer tu experiencia universitaria Unicamacho. ✨
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8">
          <Accordion
            type="single"
            collapsible
            className="space-y-8"
            value={openId}
            onValueChange={(v) => {
              setOpenId((prev) => {
                const next = v ?? undefined
                if (next && next !== prev) requestAnimationFrame(() => scrollToId(`acc-${next}`))
                return next
              })
            }}
          >
            {facultades.map((facultad, facultadIndex) => (
              <AccordionItem
                key={facultad.id}
                value={facultad.id}
                id={`acc-${facultad.id}`}
                className="bg-gradient-to-r from-white/80 to-white/60 md:backdrop-blur-md rounded-3xl md:shadow-2xl border-2 border-white/40 overflow-hidden hover:shadow-3xl transition-all duration-200 md:duration-700 md:hover:scale-[1.01] group"
              >
                <AccordionTrigger
                  className={`px-6 sm:px-8 py-8 text-left md:transition-all md:duration-500 hover:bg-gradient-to-r rounded-t-3xl ${
                    facultadIndex % 3 === 0
                      ? "hover:from-[#b5ff00]/40 hover:to-[#b5ff00]/20 hover:shadow-[#b5ff00]/60 border-l-8 border-[#b5ff00]"
                      : facultadIndex % 3 === 1
                        ? "hover:from-[#00c8dc]/40 hover:to-[#00c8dc]/20 hover:shadow-[#00c8dc]/60 border-l-8 border-[#00c8dc]"
                        : "hover:from-[#ff0074]/40 hover:to-[#ff0074]/20 hover:shadow-[#ff0074]/60 border-l-8 border-[#ff0074]"
                  } hover:shadow-2xl`}
                >
                  <div className="flex flex-col items-start space-y-3">
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 group-hover:text-gray-800 transition-colors duration-200 md:duration-300">
                      {facultad.nombre}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 font-bold">{facultad.descripcion}</p>
                  </div>
                </AccordionTrigger>

                {/* Sin animación de altura en móvil; en desktop sí (suave). */}
                <AccordionContent className="
                  px-6 sm:px-8 pb-10
                  data-[state=open]:animate-none data-[state=closed]:animate-none
                  md:data-[state=open]:animate-accordion-down md:data-[state=closed]:animate-accordion-up
                  md:transition-[height] md:duration-300 md:will-change-[height]
                ">
                  <div className="mt-8">
                    <div
                      className="flex flex-wrap justify-center items-stretch gap-6 lg:gap-8 mx-auto sm:max-w-[1008px] lg:max-w-[1100px]"
                      style={{ contentVisibility: "auto", containIntrinsicSize: "1px 900px" }}
                    >
                      {facultad.eventos.map((evento, index) => (
                        <Card
                          key={index}
                          className={`border-3 md:hover:shadow-3xl transition-all duration-300 md:duration-700 group/card
                                      w-full sm:w-[300px] lg:w-[320px]
                                      rounded-2xl overflow-hidden
                                      grid grid-rows-[auto,1fr,auto]
                                      md:backdrop-blur-md
                                      ${
                                        facultadIndex % 3 === 0
                                          ? "border-[#b5ff00]/60 md:hover:border-[#b5ff00] md:hover:shadow-[#b5ff00]/50 bg-gradient-to-br from-[#b5ff00]/20 to-[#b5ff00]/10"
                                          : facultadIndex % 3 === 1
                                            ? "border-[#00c8dc]/60 md:hover:border-[#00c8dc] md:hover:shadow-[#00c8dc]/50 bg-gradient-to-br from-[#00c8dc]/20 to-[#00c8dc]/10"
                                            : "border-[#ff0074]/60 md:hover:border-[#ff0074] md:hover:shadow-[#ff0074]/50 bg-gradient-to-br from-[#ff0074]/20 to-[#ff0074]/10"
                                      }`}
                        >
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg sm:text-xl text-gray-900 font-black leading-tight min-h-[2.6rem] sm:min-h-[3rem]">
                              {evento.titulo}
                            </CardTitle>
                            <CardDescription className="text-sm sm:text-base text-gray-700 font-semibold leading-relaxed">
                              {evento.descripcion}
                            </CardDescription>
                          </CardHeader>

                          <CardContent className="space-y-2 pt-2">
                            <div className="flex items-start text-sm sm:text-base text-gray-800 font-bold min-h-[1.5rem]">
                              <Calendar className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${facultadIndex % 3 === 0 ? "text-[#b5ff00]" : facultadIndex % 3 === 1 ? "text-[#00c8dc]" : "text-[#ff0074]"}`} />
                              <span className="break-words leading-tight">{evento.fecha}</span>
                            </div>
                            <div className="flex items-start text-sm sm:text-base text-gray-800 font-bold min-h-[1.5rem]">
                              <Clock className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${facultadIndex % 3 === 0 ? "text-[#b5ff00]" : facultadIndex % 3 === 1 ? "text-[#00c8dc]" : "text-[#ff0074]"}`} />
                              <span className="break-words leading-tight">{evento.hora}</span>
                            </div>
                            <div className="flex items-start text-sm sm:text-base text-gray-800 font-bold min-h-[1.5rem]">
                              <MapPin className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${facultadIndex % 3 === 0 ? "text-[#b5ff00]" : facultadIndex % 3 === 1 ? "text-[#00c8dc]" : "text-[#ff0074]"}`} />
                              <span className="break-words leading-tight">{evento.lugar}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

  {/* Footer Info */}
        <div className="mt-12 sm:mt-16 text-center">
          <Card className="bg-gradient-to-r from-[#00c8dc]/30 to-[#b5ff00]/30 border-[#00c8dc]/60 backdrop-blur-md shadow-3xl hover:shadow-[#00c8dc]/60 transition-all duration-500 border-2 rounded-3xl overflow-hidden">
            <CardContent className="py-8 sm:py-12">
              <div className="flex flex-col items-center space-y-6">
                {/* University Logo */}
                <div className="flex items-center justify-center">
                  <img
                    src="/images/antonioJoseCamacho.png"
                    alt="Universidad Antonio José Camacho"
                    className="h-20 sm:h-24 lg:h-32 w-auto object-contain drop-shadow-lg"
                  />
                </div>

                {/* University Information */}
                <div className="text-center space-y-3">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-[#00c8dc] via-[#0066cc] to-[#004499] bg-clip-text text-transparent">
                    Institución Universitaria Antonio José Camacho
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 font-semibold max-w-2xl mx-auto leading-relaxed">
                    Formando profesionales íntegros con excelencia académica y compromiso social
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="flex items-center justify-center space-x-4 pt-4">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#00c8dc] to-transparent"></div>
                  <Sparkles className="w-6 h-6 text-[#00c8dc] animate-pulse" />
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#00c8dc] to-transparent"></div>
                </div>

                {/* Additional Info */}
                <div className="text-sm sm:text-base text-gray-600 font-medium">
                  <p>INWEEK 2025 </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div> 


      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(20px) translateY(-30px); }
        }
        @keyframes float-diagonal-large {
          0%, 100% { transform: translateX(0px) translateY(0px) scale(1); }
          25% { transform: translateX(-60px) translateY(-40px) scale(1.1); }
          50% { transform: translateX(-120px) translateY(-80px) scale(1); }
          75% { transform: translateX(-60px) translateY(-40px) scale(0.9); }
        }
        @keyframes float-circular-large {
          0% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(40px) translateY(-40px); }
          50% { transform: translateX(0px) translateY(-80px); }
          75% { transform: translateX(-40px) translateY(-40px); }
          100% { transform: translateX(0px) translateY(0px); }
        }
        @keyframes float-wave {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          16% { transform: translateX(-30px) translateY(-20px); }
          33% { transform: translateX(30px) translateY(-40px); }
          50% { transform: translateX(-30px) translateY(-60px); }
          66% { transform: translateX(30px) translateY(-40px); }
          83% { transform: translateX(-30px) translateY(-20px); }
        }
      `}</style>
    </div>
  )
}
