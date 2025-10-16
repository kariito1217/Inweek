"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Sparkles } from "lucide-react"
import { useMemo, useState } from "react"

/* ===================== DATOS ORIGINALES (SIN CAMBIOS) ===================== */
const facultades = [
  {
    id: "FCSH Norte",
    nombre: "Facultad de Ciencias Sociales y Humanas",
    descripcion: "Sede Norte",
    eventos: [
      { titulo: "Exposición fotográfica Encuentro Cultura Visual", descripcion: "", fecha: "Lunes 20 de Octubre", hora: "Permanente toda la semana", lugar: "sala de exposiciones biblioteca" },
      { titulo: "Encuentro Cultura Visual: Fotografía Creativa y Experimental", descripcion: "", fecha: "Martes 21 de Octubre", hora: "10:00 a.m", lugar: "Estación 1: Salón 301" },
      { titulo: "Encuentro Cultura Visual: Taller Ilustra, sin ilustrar", descripcion: "", fecha: "Martes 21 de Octubre", hora: "2:00 p.m", lugar: "Salón A108" },
      { titulo: "Entramado Social: Contar la experiencia - Práctica en Trabajo Social", descripcion: "", fecha: "Miércoles 22 de Octubre", hora: "8:00 a.m", lugar: "PARQUE DEL MONJE" },
      { titulo: "Caleidoscopio Social: Historias que sanan: la comunicación social como punete de resiliencia comunitaria", descripcion: "", fecha: "Miércoles 22 de Octubre", hora: "10:00 a.m", lugar: "Auditorio Amarillo" },
      { titulo: "Caleidoscopio Social: De la cámara al aula: miradas en práctica", descripcion: "", fecha: "Miércoles 22 de Octubre", hora: "10:00 a.m", lugar: "Salon C208" },
      { titulo: "Encuentro Cultura Visual: Taller Ilustra, sin ilustrar", descripcion: "", fecha: "Miércoles 22 de Octubre", hora: "2:00 p.m", lugar: "Salón A108" },
      { titulo: "Caleidoscopio Social: Narración y Deporte: Voces en Vivo", descripcion: "", fecha: "Miércoles 22 de Octubre", hora: "2:00 p.m", lugar: "Auditorio amarillo" },
      { titulo: "Caleidoscopio Social: Samaritanos de la Calle: Ecos y Relatos de Vida", descripcion: "", fecha: "Miércoles 22 de Octubre", hora: "2:00 p.m", lugar: "Auditorio Rojo" },
      { titulo: "Encuentro Cultura Visual: Convergencias Académicas: ACTITUD & SAPIENTIA Encuentro de saberes, perspectivas y disciplinas que representan la producción intelectual UniCamacho", descripcion: "", fecha: "Miércoles 22 de Octubre", hora: "2:00 p.m", lugar: "Biblioteca" },
      { titulo: "Biodiversidad (miniCOP)", descripcion: "", fecha: "Jueves 23 de Octubre", hora: "", lugar: "Stand (Eco Raíces)" },
      { titulo: "Encuentro Cultura Visual: Derivas Alrededor de la Memoria: Taller Audiovisual Experimental - Universidad San Mateo, Bogotá. Invitada-", descripcion: "", fecha: "Viernes 24 de Octubre", hora: "9:00 a.m. - 2:00 p.m.", lugar: "Av. Estación 1 - Sala MAC" },
    ],
  },
  {
    id: "FCSH Sur",
    nombre: "Facultad de Ciencias Sociales y Humanas",
    descripcion: "Sede Sur",
    eventos: [
      { titulo: "Inauguración Coloquio", descripcion: "", fecha: "Lunes 20 de Octubre", hora: "10:00 a.m. - 1:00 p.m", lugar: "Aula Máxima" },
      { titulo: "Exposición fotográfica BioDiversidad", descripcion: "", fecha: "Lunes 20 de Octubre", hora: "Permanente toda la semana", lugar: "Sala de exposiciones biblioteca" },
      { titulo: "Inauguración Caleidoscopio Social", descripcion: "", fecha: "Martes 21 de Octubre", hora: "2:00 p.m. - 5:00 p.m", lugar: "Aula Máxima" },
      { titulo: "Tejiendo voces y vínculos: El impacto de la comunicación en la vida comunitaria", descripcion: "", fecha: "Martes 21 de Octubre", hora: "6:30 p.m", lugar: "Salón AL 119" },
      { titulo: "Entramado Social", descripcion: "", fecha: "Miércoles 22 de Octubre", hora: "10:00 a.m. - 1:00 p.m", lugar: "Aula Máxima" },
      { titulo: "Camping", descripcion: "", fecha: "Miércoles 22 de Octubre", hora: "7:00 p.m", lugar: "cancha de fútbol" },
      { titulo: "Caleidoscopio Social:  La historia a traves del foco", descripcion: "", fecha: "Jueves 23 de Octubre", hora: "10:00 a.m", lugar: "Auditorio 1" },
      { titulo: "Caleidoscopio Social: Tejiendo Historia con Hilos de Creatividad", descripcion: "", fecha: "Jueves 23 de Octubre", hora: "2:00 p.m", lugar: "Biblioteca" },
      { titulo: "Caleidoscopio Social: Tejiendo la verdad (podcats)", descripcion: "", fecha: "Jueves 23 de Octubre", hora: "2:00 p.m", lugar: "Auditorio 4" },
      { titulo: "Caleidoscopio Social: ¿Y aquí como nos cuidamos?", descripcion: "", fecha: "Jueves 23 de Octubre", hora: "6:30 p.m", lugar: "Auditorio 5" },
      { titulo: "Caleidoscopio Social: Ecos que Transforman", descripcion: "", fecha: "Jueves 23 de Octubre", hora: "10:00 a.m", lugar: "Auditorio 4" },
      { titulo: "Encuentro Cultura Visual: Portafolios vivos, ideas en movimiento", descripcion: "", fecha: "Jueves 23 de Octubre", hora: "10:00 a.m", lugar: "Innova Lab" },
      { titulo: "Entramado Social", descripcion: "", fecha: "Jueves 23 de Octubre", hora: "6:30 p.m", lugar: "Aula Máxima" },
      { titulo: "Acto de cierre Coloquio", descripcion: "", fecha: "Viernes 24 de Octubre", hora: "10:00 a.m", lugar: "Aula Máxima" },
      { titulo: "Encuentro Cultura Visual: Derivas Alrededor de la Memoria: Taller Audiovisual Experimental - Universidad San Mateo, Bogotá. Invitada-", descripcion: "", fecha: "Viernes 24 de Octubre", hora: "9:00 a.m", lugar: "salida externa Comuna 20 y Museo Popular de Siloé" },
    ],
  },
  {
    id: "FCSH Virtual",
    nombre: "Facultad de Ciencias Sociales y Humanas",
    descripcion: "Virtual",
    eventos: [
      { titulo: "Trabajo Social y Construcción de Comunidad en los Territorios", descripcion: "", fecha: "Martes 21 de Octubre", hora: "10:00 a.m", lugar: "Zoom" },
      { titulo: "Comunica y transforma desde la Investigación: Retos de un Trabajo de Grado", descripcion: "", fecha: "Martes 21 de Octubre", hora: "6:30 p.m", lugar: "Zoom" },
      { titulo: "4to. Encuentro Interinstitucional de Trabajos de Grado en Diseño Visual", descripcion: "", fecha: "Miércoles 22 de Octubre", hora: "10:00 a.m", lugar: "Zoom" },
      { titulo: "Presentación de trabajos de grado con menciones en Comunicación Social", descripcion: "", fecha: "Miércoles 22 de Octubre", hora: "6:30 p.m", lugar: "Zoom" },
      { titulo: "Conectando con comunidades desde la investigación en Trabajo Social", descripcion: "", fecha: "Miércoles 22 de Octubre", hora: "6:30 p.m", lugar: "Zoom" },
      { titulo: "5to. Encuentro interinstitucional de trabajos de grado en Diseño Visual", descripcion: "", fecha: "Miércoles 22 de Octubre", hora: "10:00 a.m", lugar: "Zoom" },
      { titulo: "Comunicar para Crecer: Estrategias Corporativas en el Campo Profesional", descripcion: "", fecha: "Miércoles 22 de Octubre", hora: "6:30 p.m", lugar: "Zoom" },
    ],
  },
  {
    id: "FI Norte",
    nombre: "Facultad de Ingeniería",
    descripcion: "Sede Norte",
    eventos: [
      { titulo: "Carrera de Drones con simulador", descripcion: "", fecha: "Martes 21 de Octubre", hora: "10:00 a.m - 2:00 p.m", lugar: "Tarima del Agora" },
      { titulo: "Taller de prototipado - ITMedia-Grintic", descripcion: "", fecha: "Martes 21 de Octubre", hora: "6:30 p.m", lugar: "Sala de sistemas" },
      { titulo: "Muestra Modelos Lean Manufactúring Dispositivos exoesqueleticos Planta de procesamiento de Cacao Biocombustible apartir de la yuca", descripcion: "", fecha: "Jueves 23 de Octubre", hora: "10:00 a.m. - 7:00p.m", lugar: "Stand (SEGESTOP)" },
    ],
  },
  {
    id: "FI Sur",
    nombre: "Facultad de Ingeniería",
    descripcion: "Sede Sur",
    eventos: [
      { titulo: "Conversatorio: La universidad del futuro, la que todos queremos", descripcion: "", fecha: "Martes 21 de Octubre", hora: "8:00 a.m - 10:00 a.m", lugar: "Auditorio 4" },
      { titulo: "Taller Manufactura Digital", descripcion: "", fecha: "Martes 21 de Octubre", hora: "10:00 a.m - 11:00 a.m", lugar: "Auditorio 4" },
      { titulo: "Implementando una Arquitectura Multitenant Escalable y Eficiente con NestJS y Docker", descripcion: "", fecha: "Martes 21 de Octubre", hora: "11:00 a.m - 12:00 p.m", lugar: "Auditorio 5" },
      { titulo: "Sumobots", descripcion: "", fecha: "Martes 21 de Octubre", hora: "09:00 a.m - 12:00 p.m", lugar: "Carpa al lado del Aula Máxima" },
      { titulo: "El viaje de la IA: descubre, inspírate y juega", descripcion: "", fecha: "Martes 21 de Octubre", hora: "10:00 a.m - 11:00 a.m", lugar: "Sala de Sistemas" },
    ],
  },
  {
    id: "DAI",
    nombre: "Decanato Asociado de Investigaciones",
    descripcion: "Norte y Sur",
    eventos: [
      { titulo: "Conversatorio: La universidad del futuro, la que todos queremos", descripcion: "Sede Sur", fecha: "Martes 21 de Octubre", hora: "8:00 a.m - 10:00 a.m", lugar: "Auditorio 4" },
      { titulo: "Encuentro Cientifico y Educativo de Experiencias Investigativas - ECE2I", descripcion: "Sede Norte", fecha: "Jueves 23 de Octubre", hora: "8:00 a.m", lugar: "Salones" },
      { titulo: "Stand de grupos y Semilleros", descripcion: "Sede Norte", fecha: "Jueves 23 de Octubre", hora: "8:00 a.m - 8:00 p.m", lugar: "Stand (Ágora)" },
      { titulo: "Reconocimientos del DAI", descripcion: "Sede Sur", fecha: "Lunes 20 de Octubre", hora: "09:00 a.m", lugar: "Aula Máxima" },
    ],
  },
  {
    id: "CEFTEL",
    nombre: " Centro de Formación Técnica Laboral - CEFTEL",
    descripcion: "Sede Norte",
    eventos: [{ titulo: "Investiga, Conecta e Ilumina: La Magia de la Domótica al Alcance de tu Mano", descripcion: "", fecha: "Martes 21 de Octubre", hora: "6:30 p.m", lugar: "Salón D202" }],
  },
  {
    id: "FCE y PLE",
    nombre: "Facultad de Ciencias Empresariales & Programa de Liderazgo y Emprendimiento",
    descripcion: "Norte y Sur",
    eventos: [
      { titulo: "Cátedra Empresarial", descripcion: "FCE \nSede Sur", fecha: "Martes 21 de Octubre", hora: "6:00 p.m - 8:00 p.m", lugar: "Aula Máxima" },
      { titulo: "XVII Muestra Empresarial Inauguración muestra y muestra durante todo el día (participan todas las facultades)", descripcion: "FCE & PLE \nSede Norte", fecha: "Viernes 24 de Octubre", hora: "10:00 a.m - 8:00 p.m", lugar: "Stand (Ágora)" },
      { titulo: "XVII Muestra Empresarial Unicamacho (todas las Facultades)", descripcion: "FCE & PLE \nSede Norte", fecha: "Sábado 25 de Octubre", hora: "8:00 a.m - 4:00 p.m", lugar: "Stand (Ágora)" },
    ],
  },
  {
    id: "FEDV",
    nombre: "Facultad de Educación a Distancia y Virtual",
    descripcion: "Sede Sur",
    eventos: [
      { titulo: "Taller de sensibilización Narrar para Sanar", descripcion: "", fecha: "Lunes 20 de Octubre", hora: "8:00 a.m - 12:00 p.m", lugar: "Auditorio 4" },
      { titulo: "Primer Conversatorio sobre los objetos de estudio e investigación en el programa ASST", descripcion: "", fecha: "Martes 21 de Octubre", hora: "10:00 a.m - 12:00 p.m", lugar: "Auditorio 5" },
      { titulo: "Encuentro de semilleros de investigación vinculados con los programas de Licenciatura en Educación Infantil del Distrito de Santiago de Cali", descripcion: "", fecha: "Miércoles 22 de Octubre", hora: "9:00 a.m - 12:00 p.m", lugar: "Auditorio 4" },
      { titulo: "Simposio de Biomecánica y Ergonomía: Innovaciones para la Seguridad y Salud en el Trabajo", descripcion: "", fecha: "Miércoles 22 de Octubre", hora: "8:00 a.m - 12:00 p.m", lugar: "Auditorio 5" },
      { titulo: "Taller búsqueda en bases de datos y tesauros", descripcion: "", fecha: "Sábado 25 de Octubre", hora: "08:00 a.m - 12:00 p.m", lugar: "Auditorio 4" },
    ],
  },
  {
    id: "DCB Sur",
    nombre: "Departamento de Ciencias Básicas",
    descripcion: "Sede Sur",
    eventos: [
      { titulo: "IV Certamen de Física - Poster", descripcion: "", fecha: "Viernes 24 de Octubre", hora: "8:00 a.m - 8:00 p.m", lugar: "Biblioteca" },
      { titulo: "Día de la estadistica", descripcion: "", fecha: "Viernes 24 de Octubre", hora: "10:00 a.m - 5:00 p.m", lugar: "Auditorio y Antigua biblioteca" },
      { titulo: "IV Certamen de Física Conferencia", descripcion: "", fecha: "Viernes 24 de Octubre", hora: "2:00 p.m - 4:00 p.m", lugar: "Aula máxima " },
      { titulo: "IV Certamen de Física Conferencia", descripcion: "", fecha: "Viernes 24 de Octubre", hora: "6:30 p.m - 9:30 p.m", lugar: "Aula máxima " },
      { titulo: "IV Certamen de Física Ponencias", descripcion: "", fecha: "Viernes 24 de Octubre", hora: "11:00 a.m - 1:00 p.m", lugar: "Auditorio 4 " },
      { titulo: "IV Certamen de Física Presentación", descripcion: "", fecha: "Viernes 24 de Octubre", hora: "9:00 a.m - 10:00 a.m", lugar: "Auditorio 4 " },
      { titulo: "Conferencia conmemorativa al día mundial de la estadística", descripcion: "", fecha: "Viernes 24 de Octubre", hora: "10:00 a.m - 12:00 p.m", lugar: "Auditorio 5" },
      { titulo: "Simulación bolsa de valores", descripcion: "", fecha: "Viernes 24 de Octubre", hora: "2:00 p.m - 5:00 p.m", lugar: "Espacio Antigua biblioteca " },
      { titulo: "Concurso de coheteria 3ra edicion", descripcion: "", fecha: "Sábado 25 de Octubre", hora: "08:00 a.m - 12:00 p.m", lugar: "Cancha 2" },
    ],
  },
]

/* ===================== HELPERS (agrupación + limpieza) ===================== */
type Evento = { titulo: string; descripcion: string; fecha: string; hora: string; lugar: string }
type SedeKey = "Sede Norte" | "Sede Sur" | "Virtual"
const SEDES: SedeKey[] = ["Sede Norte", "Sede Sur", "Virtual"]

const MONTHS: Record<string, string> = {
  enero: "ENE", febrero: "FEB", marzo: "MAR", abril: "ABR", mayo: "MAY", junio: "JUN",
  julio: "JUL", agosto: "AGO", septiembre: "SEP", setiembre: "SEP", octubre: "OCT", noviembre: "NOV", diciembre: "DIC",
}

function inferSede(facDesc?: string, evDesc?: string): SedeKey | null {
  const src = `${facDesc ?? ""} ${evDesc ?? ""}`.toLowerCase()
  if (src.includes("virtual")) return "Virtual"
  if (src.includes("sede norte") || src.includes(" norte")) return "Sede Norte"
  if (src.includes("sede sur") || src.includes(" sur")) return "Sede Sur"
  return null
}

function cleanDescripcion(desc: string | undefined): string {
  if (!desc) return ""
  return desc
    .replace(/sede\s*norte/gi, "")
    .replace(/sede\s*sur/gi, "")
    .replace(/\bvirtual\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .replace(/^[\s,\-–:]+|[\s,\-–:]+$/g, "")
    .trim()
}

/**
 * parseFechaHora:
 * - Toma SOLO la hora de inicio si viene un rango, heredando AM/PM de la parte final si falta.
 * - Devuelve timeMain (HH o HH:MM), meridiem y flags.
 */
function parseFechaHora(fecha: string, hora: string) {
  const day = (fecha.match(/(\d{1,2})/)?.[1] ?? "").padStart(2, "0")

  // Mes -> "OCT", etc.
  let month = ""
  for (const key of Object.keys(MONTHS)) {
    if (fecha.toLowerCase().includes(key)) { month = MONTHS[key]; break }
  }

  const raw = hora ?? ""
  const reGlobal = /(\d{1,2})(?::(\d{2}))?\s*([ap])?\.?m?/gi
  const matches = Array.from(raw.matchAll(reGlobal))

  let timeMain = ""
  let meridiem = ""
  let hasMinutes = false

  if (matches.length >= 1) {
    const m1 = matches[0]
    const m2 = matches.length >= 2 ? matches[1] : null

    const hh = parseInt(m1[1], 10)
    const mmCap = m1[2] ?? ""
    const mm = mmCap.padStart(2, "0")
    let ap = (m1[3] ?? "").toUpperCase()
    if (!ap && m2 && m2[3]) ap = m2[3].toUpperCase() // hereda AM/PM

    meridiem = ap === "A" ? "AM" : "PM"
    hasMinutes = mmCap !== "" && mm !== "00"
    timeMain = hasMinutes ? `${hh}:${mm}` : `${hh}`
  }

  // Construcción compacta de fallback de una sola línea (p.ej. 7PM)
  const timeLabel = timeMain ? `${timeMain}${hasMinutes ? "" : meridiem}` : ""

  return { day, month, timeLabel, timeMain, meridiem, hasMinutes, rawHora: raw }
}

function useFacultadesAgrupadas() {
  return useMemo(() => {
    const byNombre: Record<string, { nombre: string; colecciones: typeof facultades }> = {}
    for (const f of facultades) {
      if (!byNombre[f.nombre]) byNombre[f.nombre] = { nombre: f.nombre, colecciones: [] as any }
      byNombre[f.nombre].colecciones.push(f)
    }

    return Object.values(byNombre).map((grupo) => {
      const buckets: Record<SedeKey, Evento[]> = { "Sede Norte": [], "Sede Sur": [], Virtual: [] }

      for (const fac of grupo.colecciones) {
        for (const ev of fac.eventos) {
          const sede = inferSede(fac.descripcion, ev.descripcion)
          const limpio = { ...ev, descripcion: cleanDescripcion(ev.descripcion) }
          if (sede) buckets[sede].push(limpio)
          else {
            if (fac.descripcion?.toLowerCase().includes("norte")) buckets["Sede Norte"].push(limpio)
            else if (fac.descripcion?.toLowerCase().includes("sur")) buckets["Sede Sur"].push(limpio)
            else buckets["Sede Sur"].push(limpio)
          }
        }
      }

      const tabs = SEDES.filter((s) => buckets[s].length > 0)
      return { nombre: grupo.nombre, buckets, tabs }
    })
  }, [])
}

/* ===================== UI ===================== */
export default function CronogramaPage() {
  const grupos = useFacultadesAgrupadas()

  const [openId, setOpenId] = useState<string | undefined>(undefined)
  const [tabByFaculty, setTabByFaculty] = useState<Record<string, SedeKey | null>>({})

  const PINK = "#ff0074"
  const PINK_700 = "#e00068"
  const LIME = "#b5ff00"

  const scrollToId = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const header = document.querySelector("header") as HTMLElement | null
    const OFFSET = (header?.offsetHeight ?? 80) + 8
    const isDesktop = window.matchMedia("(min-width: 768px)").matches
    const delay = isDesktop ? 180 : 60
    const fixDelay = isDesktop ? 220 : 120
    const align = () => {
      const trigger = el.querySelector("[data-radix-accordion-trigger]") as HTMLElement | null
      const target = trigger ?? el
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const top = target.getBoundingClientRect().top + window.scrollY - OFFSET
          window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" })
        })
      })
    }
    window.setTimeout(align, delay)
    window.setTimeout(align, delay + fixDelay)
  }

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: PINK }}>
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-6 text-center">
        <div className="flex items-center justify-between mb-6">
          <Link href="/">
            <Button
              variant="ghost"
              size="lg"
              className="
                text-white/90 hover:text-white hover:bg-white/10
                border border-white/40 rounded-full
                px-5 md:px-6 py-3 md:py-3.5
                text-base md:text-lg
              "
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 mr-2" />
              Volver
            </Button>
          </Link>
          <Sparkles className="w-6 h-6 text-white/90" />
        </div>

        <h1 className="text-white font-black text-4xl sm:text-5xl">CRONOGRAMA</h1>
        <p className="mt-4 text-white/95 font-semibold text-xl md:text-2xl leading-snug">
          Explora todos los eventos organizados durante la Semana de Innovación del <b>20 al 25 de octubre</b>.
        </p>
      </div>

      {/* Acordeones */}
      <div className="max-w-6xl mx-auto px-4 pb-6">
        <Accordion
          type="single"
          collapsible
          className="space-y-1"
          value={openId}
          onValueChange={(v) => {
            setOpenId((prev) => {
              const next = v ?? undefined
              if (next && next !== prev) requestAnimationFrame(() => scrollToId(`acc-${next}`))
              return next
            })
          }}
        >
          {grupos.map((grupo) => {
            const accId = grupo.nombre
            const selectedTab = tabByFaculty[accId] ?? grupo.tabs[0] ?? null

            return (
              <AccordionItem key={accId} value={accId} id={`acc-${accId}`} className="border-0">
                <AccordionTrigger
                  className="px-0 text-left rounded-[28px] focus:outline-none hover:no-underline transition-all duration-200 [&>svg]:hidden"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="w-full border border-white rounded-[28px] px-7 lg:px-9 min-h-[96px] sm:min-h-[104px] lg:min-h-[112px]
                               flex items-center justify-between bg-[rgba(255,255,255,0.04)]
                               hover:-translate-y-[4px] hover:shadow-[0_14px_28px_rgba(0,0,0,0.28)] transition-all duration-200"
                  >
                    <span className="text-white font-extrabold text-2xl md:text-3xl leading-none select-none">
                      {grupo.nombre}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="mt-0 pt-0">
                  <div className="rounded-[28px] bg-white p-0 overflow-hidden border border-white shadow-[0_10px_28px_rgba(255,0,116,0.18)]">
                    {/* Tabs */}
                    {grupo.tabs.length > 0 && (
                      <div className="px-6 pt-5 pb-3">
                        <div className="flex flex-wrap gap-3 sm:gap-4">
                          {grupo.tabs.map((tab) => {
                            const active = selectedTab === tab
                            return (
                              <button
                                key={tab}
                                onClick={() => setTabByFaculty((s) => ({ ...s, [accId]: tab }))}
                                className="rounded-full text-sm md:text-base font-extrabold px-5 py-2 border transition-all duration-150 cursor-pointer hover:-translate-y-[1px]"
                                style={{
                                  borderColor: selectedTab === tab ? LIME : PINK_700,
                                  backgroundColor: selectedTab === tab ? "rgba(181,255,0,0.9)" : PINK,
                                  color: selectedTab === tab ? "#102400" : "#fff",
                                  boxShadow: selectedTab === tab ? "0 10px 20px rgba(181,255,0,0.35)" : "0 8px 18px rgba(255,0,116,0.35)",
                                }}
                                aria-pressed={active}
                              >
                                {tab}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    {/* Grid tarjetas */}
                    <div className="px-6 pb-7">
                      <div className="flex flex-wrap justify-center items-stretch gap-5 lg:gap-6 pb-2 mx-auto sm:max-w-[1008px] lg:max-w-[1100px]">
                        {(selectedTab ? grupo.buckets[selectedTab] : []).map((evento, i) => {
                          const { day, month, timeLabel, timeMain, meridiem, hasMinutes, rawHora } =
                            parseFechaHora(evento.fecha ?? "", evento.hora ?? "")

                          const hasSemana = rawHora && rawHora.toLowerCase().includes("semana")
                          const showHoraTexto = !timeLabel && hasSemana
                          const timeIsWide = timeLabel?.includes(":") || timeLabel?.includes("–")

                          return (
                            <Card
                              key={`${accId}-${selectedTab}-${i}`}
                              className="rounded-[32px] border-2 overflow-hidden w-full sm:w-[300px] lg:w-[320px]"
                              style={{
                                background: "linear-gradient(135deg, #FFC0E3 0%, #FFB3D9 100%)",
                                boxShadow: "0 8px 24px rgba(255,0,116,0.25)",
                                borderColor: "#ff0074",
                              }}
                            >
                              <div className="p-6 md:p-7 h-full flex flex-col justify-between">
                                {/* Title */}
                                <div className="flex-1 flex items-center">
                                  <h3
                                    className="text-black font-black text-xl leading-tight w-full"
                                    style={{ textAlign: evento.titulo.length < 40 ? "center" : "left" }}
                                  >
                                    {evento.titulo}
                                  </h3>
                                </div>

                                {/* Date/time/location */}
                                <div>
                                  <div className="mb-5 flex items-center gap-2 sm:gap-3 pr-2 sm:pr-3">
                                    <div
                                      className="text-[88px] md:text-[100px] font-black leading-none flex-shrink-0"
                                      style={{ color: "#ff0074", WebkitTextStroke: "0px", textShadow: "0 4px 12px rgba(0,0,0,0.12)" }}
                                    >
                                      {day || "—"}
                                    </div>

                                    <div className="flex flex-col gap-0 flex-1 min-w-0 pr-4 md:pr-6">
                                      {month && (
                                        <span
                                          className="text-[36px] md:text-[40px] font-black leading-none uppercase"
                                          style={{ color: "transparent", WebkitTextStroke: "2.5px #ff0074" }}
                                        >
                                          {month}
                                        </span>
                                      )}

                                      {/* Hora */}
                                      {hasMinutes ? (
                                        // Minutos: HH:MM (outline) + "PM/AM" pequeño al ladito
                                        <div
                                          className="mt-1 select-none inline-flex items-end gap-1.5"
                                          style={{ whiteSpace: "nowrap", paddingRight: "0.80em", lineHeight: 1 }}
                                        >
                                          <span
                                            className="font-black uppercase block text-[36px] md:text-[40px] leading-none"
                                            style={{
                                              color: "transparent",
                                              WebkitTextStroke: "2.5px #ff0074",
                                              letterSpacing: "0",
                                            }}
                                          >
                                            {timeMain}
                                          </span>
                                          <span
                                            className="font-black uppercase"
                                            style={{
                                              color: "#ff0074",
                                              fontSize: "16px",
                                              lineHeight: "1",
                                              transform: "translateY(-1px)", // sutil ajuste vertical
                                            }}
                                          >
                                            {meridiem}
                                          </span>
                                        </div>
                                      ) : timeLabel ? (
                                        // Sin minutos: una sola línea como antes (ej. 7PM)
                                        <span
                                          className={`font-black leading-none uppercase block ${
                                            timeIsWide ? "text-[30px] md:text-[36px]" : "text-[36px] md:text-[40px]"
                                          }`}
                                          style={{
                                            color: "transparent",
                                            WebkitTextStroke: timeIsWide ? "2px #ff0074" : "2.5px #ff0074",
                                            whiteSpace: "nowrap",
                                            lineHeight: "1",
                                            paddingRight: "0.40em",
                                            letterSpacing: "0",
                                          }}
                                        >
                                          {timeLabel}
                                        </span>
                                      ) : showHoraTexto ? (
                                        <span
                                          className="text-[14px] md:text-[15px] font-black leading-tight uppercase break-normal whitespace-normal"
                                          style={{ color: "#ff0074" }}
                                        >
                                          {rawHora}
                                        </span>
                                      ) : null}
                                    </div>
                                  </div>

                                  {/* Lugar 18px */}
                                  <div className="text-[18px]">
                                    <p className="font-black uppercase mb-1" style={{ color: "#ff0074" }}>
                                      LUGAR
                                    </p>
                                    <p className="text-black font-semibold leading-snug whitespace-pre-line">
                                      {evento.lugar}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>

        {/* Footer (solo imagen) */}
        <div className="mt-6 mb-4 flex justify-center leading-none">
          <img
            src="/images/id-inweek.png"
            alt="INWEEK 2025"
            className="block h-32 md:h-36 lg:h-44 w-auto select-none pointer-events-none m-0"
            draggable={false}
          />
        </div>
      </div>

      {/* Overrides */}
      <style jsx global>{`
        [data-radix-accordion-trigger] { text-decoration: none !important; }
        [data-radix-accordion-trigger]:hover { text-decoration: none !important; }
        [data-radix-accordion-trigger] svg { display: none !important; }
      `}</style>
    </div>
  )
}
