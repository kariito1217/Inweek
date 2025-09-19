"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, MapPin, Sparkles } from "lucide-react"

const facultades = [
  {
    id: "ingenieria",
    nombre: "Facultad de Ingeniería",
    descripcion: "Eventos de tecnología, innovación y desarrollo",
    eventos: [
      {
        titulo: "Hackathon de IA",
        fecha: "Lunes 15 de Abril",
        hora: "9:00 AM - 6:00 PM",
        lugar: "Laboratorio de Computación",
        descripcion: "Competencia de desarrollo de soluciones con inteligencia artificial",
      },
      {
        titulo: "Conferencia: Futuro de la Robótica",
        fecha: "Martes 16 de Abril",
        hora: "2:00 PM - 4:00 PM",
        lugar: "Auditorio Principal",
        descripcion: "Charla magistral sobre las tendencias en robótica moderna",
      },
      {
        titulo: "Taller de IoT",
        fecha: "Miércoles 17 de Abril",
        hora: "10:00 AM - 12:00 PM",
        lugar: "Lab. de Electrónica",
        descripcion: "Introducción práctica al Internet de las Cosas",
      },
      {
        titulo: "Taller de IoT",
        fecha: "Miércoles 17 de Abril",
        hora: "10:00 AM - 12:00 PM",
        lugar: "Lab. de Electrónica",
        descripcion: "Introducción práctica al Internet de las Cosas",
      },
        {
        titulo: "Conferencia: Futuro de la Robótica",
        fecha: "Martes 16 de Abril",
        hora: "2:00 PM - 4:00 PM",
        lugar: "Auditorio Principal",
        descripcion: "Charla magistral sobre las tendencias en robótica moderna",
      },
    ],
  },
  {
    id: "medicina",
    nombre: "Facultad de Medicina",
    descripcion: "Avances médicos y salud pública",
    eventos: [
      {
        titulo: "Simposio de Telemedicina",
        fecha: "Lunes 15 de Abril",
        hora: "8:00 AM - 12:00 PM",
        lugar: "Anfiteatro Médico",
        descripcion: "Innovaciones en atención médica remota",
      },
      {
        titulo: "Workshop: Cirugía Robótica",
        fecha: "Martes 16 de Abril",
        hora: "3:00 PM - 5:00 PM",
        lugar: "Centro de Simulación",
        descripcion: "Demostración de técnicas quirúrgicas avanzadas",
      },
      {
        titulo: "Mesa Redonda: Bioética",
        fecha: "Jueves 18 de Abril",
        hora: "11:00 AM - 1:00 PM",
        lugar: "Sala de Conferencias",
        descripcion: "Discusión sobre dilemas éticos en medicina moderna",
      },
    ],
  },
  {
    id: "economia",
    nombre: "Facultad de Economía",
    descripcion: "Finanzas, emprendimiento y economía digital",
    eventos: [
      {
        titulo: "Foro de Fintech",
        fecha: "Miércoles 17 de Abril",
        hora: "9:00 AM - 1:00 PM",
        lugar: "Aula Magna",
        descripcion: "Tecnologías financieras y el futuro del dinero",
      },
      {
        titulo: "Pitch de Startups",
        fecha: "Jueves 18 de Abril",
        hora: "2:00 PM - 6:00 PM",
        lugar: "Centro de Emprendimiento",
        descripcion: "Presentación de proyectos estudiantiles innovadores",
      },
      {
        titulo: "Conferencia: Criptomonedas",
        fecha: "Viernes 19 de Abril",
        hora: "10:00 AM - 12:00 PM",
        lugar: "Auditorio Económico",
        descripcion: "Análisis del impacto de las monedas digitales",
      },
    ],
  },
  {
    id: "artes",
    nombre: "Facultad de Artes",
    descripcion: "Creatividad, diseño y expresión artística",
    eventos: [
      {
        titulo: "Exposición de Arte Digital",
        fecha: "Lunes 15 de Abril",
        hora: "Todo el día",
        lugar: "Galería Universitaria",
        descripcion: "Muestra de obras creadas con tecnologías digitales",
      },
      {
        titulo: "Taller de Realidad Virtual",
        fecha: "Miércoles 17 de Abril",
        hora: "4:00 PM - 6:00 PM",
        lugar: "Estudio de Medios",
        descripcion: "Creación de experiencias inmersivas en VR",
      },
      {
        titulo: "Performance Interactivo",
        fecha: "Viernes 19 de Abril",
        hora: "7:00 PM - 9:00 PM",
        lugar: "Plaza Central",
        descripcion: "Espectáculo que combina arte y tecnología",
      },
    ],
  },
  {
    id: "ciencias",
    nombre: "Facultad de Ciencias",
    descripcion: "Investigación científica y descubrimientos",
    eventos: [
      {
        titulo: "Feria de Ciencias",
        fecha: "Martes 16 de Abril",
        hora: "9:00 AM - 5:00 PM",
        lugar: "Patio de Ciencias",
        descripcion: "Exhibición de proyectos de investigación estudiantil",
      },
      {
        titulo: "Conferencia: Cambio Climático",
        fecha: "Miércoles 17 de Abril",
        hora: "11:00 AM - 1:00 PM",
        lugar: "Auditorio de Ciencias",
        descripcion: "Últimos avances en investigación climática",
      },
      {
        titulo: "Observación Astronómica",
        fecha: "Viernes 19 de Abril",
        hora: "8:00 PM - 11:00 PM",
        lugar: "Observatorio Universitario",
        descripcion: "Noche de observación de estrellas y planetas",
      },
    ],
  },
]

export default function CronogramaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-cyan-300/20 to-blue-300/20 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "0s", animationDuration: "4s", animation: "pulse 4s infinite, float-slow 12s ease-in-out infinite" }}
        />
        <div
          className="absolute top-40 right-20 w-60 h-60 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "6s", animation: "pulse 6s infinite, float-diagonal-large 15s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-50 h-50 bg-gradient-to-r from-yellow-300/20 to-orange-300/20 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s", animationDuration: "5s", animation: "pulse 5s infinite, float-circular-large 18s linear infinite" }}
        />
        <div
          className="absolute bottom-20 right-1/3 w-44 h-44 bg-gradient-to-r from-green-300/20 to-teal-300/20 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "3s", animationDuration: "4.5s", animation: "pulse 4.5s infinite, float-wave 20s ease-in-out infinite" }}
        />
      </div>

      <div className="bg-gradient-to-r from-white/90 via-cyan-50/80 to-blue-50/90 backdrop-blur-md shadow-2xl border-b-2 border-gradient-to-r from-cyan-200 to-blue-200 relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-500 hover:scale-110 hover:shadow-lg border-2 border-transparent hover:border-cyan-300"
                >
                  <ArrowLeft className="w-4 h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline font-bold">Volver</span>
                </Button>
              </Link>
              <div>
                <div className="flex items-center space-x-3">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Cronograma INWEEK
                  </h1>
                  <Sparkles className="w-8 h-8 text-cyan-500 animate-spin drop-shadow-lg" style={{ animationDuration: "3s" }} />
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
          <div className="bg-gradient-to-r from-white/80 via-cyan-50/70 to-blue-50/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-gradient-to-r from-cyan-200 to-blue-200 hover:shadow-cyan-200/50 transition-all duration-500 hover:scale-[1.02]">
            <p className="text-base sm:text-lg lg:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-bold">
              ✨ Explora todos los eventos organizados durante la Semana de Innovación. Cada facultad ha preparado
              actividades únicas para enriquecer tu experiencia universitaria. ✨
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8"> 
  <Accordion type="single" collapsible className="space-y-8">
    {facultades.map((facultad, facultadIndex) => (
      <AccordionItem
        key={facultad.id}
        value={facultad.id}
        className="bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-white/40 overflow-hidden hover:shadow-3xl transition-all duration-700 hover:scale-[1.03] group"
      >
        <AccordionTrigger
          className={`px-6 sm:px-8 py-8 text-left transition-all duration-700 hover:bg-gradient-to-r group-hover:scale-[1.01] rounded-t-3xl ${
            facultadIndex % 4 === 0
              ? "hover:from-yellow-300/40 hover:to-yellow-200/30 hover:shadow-yellow-300/60 border-l-8 border-yellow-400"
              : facultadIndex % 4 === 1
              ? "hover:from-purple-300/40 hover:to-purple-200/30 hover:shadow-purple-300/60 border-l-8 border-purple-400"
              : facultadIndex % 4 === 2
              ? "hover:from-green-300/40 hover:to-green-200/30 hover:shadow-green-300/60 border-l-8 border-green-400"
              : "hover:from-blue-300/40 hover:to-blue-200/30 hover:shadow-blue-300/60 border-l-8 border-blue-400"
          } hover:shadow-2xl`}
        >
          <div className="flex flex-col items-start space-y-3">
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
              {facultad.nombre}
            </h3>
            <p className="text-sm sm:text-base text-gray-700 font-bold">{facultad.descripcion}</p>
          </div>
        </AccordionTrigger>

        <AccordionContent className="px-6 sm:px-8 pb-10">
          <div className="mt-8">
            {/* 3 por fila; sobrantes centradas; alturas igualadas por fila */}
            <div className="flex flex-wrap justify-center items-stretch gap-6 lg:gap-8 mx-auto sm:max-w-[1008px] lg:max-w-[1100px]">
              {facultad.eventos.map((evento, index) => (
                <Card
                  key={index}
                  className={`border-3 hover:shadow-3xl transition-all duration-700 group/card backdrop-blur-md
                              w-full sm:w-[300px] lg:w-[320px]
                              rounded-2xl overflow-hidden
                              grid grid-rows-[auto,1fr,auto]
                              ${
                                facultadIndex % 4 === 0
                                  ? "border-yellow-300/60 hover:border-yellow-400 hover:shadow-yellow-300/50 bg-gradient-to-br from-yellow-100/40 to-yellow-50/30"
                                  : facultadIndex % 4 === 1
                                  ? "border-purple-300/60 hover:border-purple-400 hover:shadow-purple-300/50 bg-gradient-to-br from-purple-100/40 to-purple-50/30"
                                  : facultadIndex % 4 === 2
                                  ? "border-green-300/60 hover:border-green-400 hover:shadow-green-300/50 bg-gradient-to-br from-green-100/40 to-green-50/30"
                                  : "border-blue-300/60 hover:border-blue-400 hover:shadow-blue-300/50 bg-gradient-to-br from-blue-100/40 to-blue-50/30"
                              }`}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg sm:text-xl text-gray-900 font-black leading-tight min-h-[2.6rem] sm:min-h-[3rem]">
                      {evento.titulo}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base text-gray-700 font-semibold min-h-[2.8rem]">
                      {evento.descripcion}
                    </CardDescription>
                  </CardHeader>

                  {/* bloque inferior siempre alineado */}
                  <CardContent className="space-y-2 pt-2">
                    <div className="flex items-center text-sm sm:text-base text-gray-800 font-bold">
                      <Calendar
                        className={`w-5 h-5 mr-3 flex-shrink-0 ${
                          facultadIndex % 4 === 0
                            ? "text-yellow-600"
                            : facultadIndex % 4 === 1
                            ? "text-purple-600"
                            : facultadIndex % 4 === 2
                            ? "text-green-600"
                            : "text-blue-600"
                        }`}
                      />
                      <span className="truncate">{evento.fecha}</span>
                    </div>
                    <div className="flex items-center text-sm sm:text-base text-gray-800 font-bold">
                      <Clock
                        className={`w-5 h-5 mr-3 flex-shrink-0 ${
                          facultadIndex % 4 === 0
                            ? "text-yellow-600"
                            : facultadIndex % 4 === 1
                            ? "text-purple-600"
                            : facultadIndex % 4 === 2
                            ? "text-green-600"
                            : "text-blue-600"
                        }`}
                      />
                      <span className="truncate">{evento.hora}</span>
                    </div>
                    <div className="flex items-center text-sm sm:text-base text-gray-800 font-bold">
                      <MapPin
                        className={`w-5 h-5 mr-3 flex-shrink-0 ${
                          facultadIndex % 4 === 0
                            ? "text-yellow-600"
                            : facultadIndex % 4 === 1
                            ? "text-purple-600"
                            : facultadIndex % 4 === 2
                            ? "text-green-600"
                            : "text-blue-600"
                        }`}
                      />
                      <span className="truncate">{evento.lugar}</span>
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
          <Card className="bg-gradient-to-r from-cyan-200/80 to-blue-200/80 border-cyan-400/60 backdrop-blur-md shadow-3xl hover:shadow-cyan-300/60 transition-all duration-700 hover:scale-[1.03] border-3 rounded-3xl">
            <CardContent className="py-8 sm:py-10">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Sparkles className="w-6 h-6 text-cyan-700 animate-pulse" />
                <h3 className="text-lg sm:text-xl font-black text-gray-900">¿Necesitas más información?</h3>
                <Sparkles className="w-6 h-6 text-cyan-700 animate-pulse" style={{ animationDelay: "0.5s" }} />
              </div>
              <p className="text-sm sm:text-base text-gray-800 mb-8 font-bold">
                Contacta a los organizadores de cada facultad para detalles adicionales sobre los eventos.
              </p>
              <Button className="bg-gradient-to-r from-cyan-700 to-blue-700 hover:from-cyan-800 hover:to-blue-800 text-white text-base sm:text-lg font-black px-10 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 border-2 border-cyan-300">
                Contactar Organizadores
              </Button>
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
