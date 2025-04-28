"use client"

import type React from "react"

import { useState, useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Technology {
  title: string
  image: string
  isTall?: boolean
}

const technologies: Technology[] = [
  {
    title: "IT-Infrastruktur, as a Service Modelle, Cloudsysteme",
    image: "/images/cloud.png",
    isTall: true,
  },
  {
    title: "IT-Sicherheitstechnik, Netzwerktechnik",
    image: "/images/eye.png",
    isTall: false,
  },
  {
    title: "Professionelle Beratung, Prozess- und Projektunterstützung, Maschinen-/ KI-Modelle",
    image: "/images/construction.png",
    isTall: true,
  },
  {
    title: "ERP, eCommerce, Warenwirtschaft, digital unterstützte Geschäftsprozesse",
    image: "/images/brain.png",
    isTall: false,
  },
  {
    title: "RFID, Lagerprozesse, Internet of Things",
    image: "/images/city.png",
    isTall: true,
  },
]

export default function Technologies() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? technologies.length - 1 : prev - 1))
  }, [])

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === technologies.length - 1 ? 0 : prev + 1))
  }, [])

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.touches[0].clientX)
  }

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStart) return
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd

    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext()
      else handlePrevious()
    }
    setTouchStart(null)
  }

  return (
      <section id="technologien" className="bg-white overflow-hidden py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Durchgängige Unterstützung – aus einer Hand
            </h2>
            <div className="w-20 h-1 bg-[#C25B3F] mx-auto"></div>
          </div>

          {/* Desktop View */}
          {!isMobile && (
              <div className="flex flex-wrap justify-center gap-8 items-end">
                {technologies.map((tech, index) => (
                    <div
                        key={index}
                        className="w-[200px] flex flex-col items-center"
                        style={{ display: "flex", flexDirection: "column" }}
                    >
                      <div className="w-full" style={{ flexGrow: 0 }}>
                        <img
                            src={tech.image || "/placeholder.svg"}
                            alt={tech.title}
                            className={`w-full ${tech.isTall ? "h-64" : "h-48"} object-cover`}
                        />
                      </div>
                      <div
                          className="p-2 text-center mt-2"
                          style={{ height: "120px", display: "flex", flexDirection: "column", justifyContent: "center" }}
                      >
                        <p className="text-sm font-medium text-[#333]">
                          {tech.title.split(",").map((part, i) => (
                              <span key={i}>
                        {part}
                                {i < tech.title.split(",").length - 1 ? "," : ""}
                                <br />
                      </span>
                          ))}
                        </p>
                      </div>
                      <div className="h-1 bg-[#C25B3F] w-full mt-1" style={{ flexGrow: 0 }}></div>
                    </div>
                ))}
              </div>
          )}

          {/* Mobile View */}
          {isMobile && (
              <div className="relative" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                <div className="absolute z-10 inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none px-2">
                  <button
                      onClick={handlePrevious}
                      className="pointer-events-auto p-2 rounded-full bg-white/90 shadow-lg
                   transition-all duration-300 hover:bg-white active:scale-95
                   focus:outline-none focus:ring-2 focus:ring-orange-500"
                      aria-label="Vorherige"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                      onClick={handleNext}
                      className="pointer-events-auto p-2 rounded-full bg-[#C25B3F] shadow-lg
                   transition-all duration-300 hover:bg-[#A34832] active:scale-95
                   focus:outline-none focus:ring-2 focus:ring-orange-500"
                      aria-label="Nächste"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-full max-w-[280px]">
                    <img
                        src={technologies[currentIndex].image || "/placeholder.svg"}
                        alt={technologies[currentIndex].title}
                        className={`w-full ${technologies[currentIndex].isTall ? "h-64" : "h-48"} object-cover`}
                    />
                  </div>
                  <div
                      className="p-2 text-center mt-2"
                      style={{ height: "120px", display: "flex", flexDirection: "column", justifyContent: "center" }}
                  >
                    <p className="text-sm font-medium text-[#333]">
                      {technologies[currentIndex].title.split(",").map((part, i) => (
                          <span key={i}>
                      {part}
                            {i < technologies[currentIndex].title.split(",").length - 1 ? "," : ""}
                            <br />
                    </span>
                      ))}
                    </p>
                  </div>
                  <div className="h-1 bg-[#C25B3F] w-full max-w-[280px] mt-1"></div>
                </div>

                <div className="flex justify-center gap-2 mt-6">
                  {technologies.map((_, idx) => (
                      <button
                          key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          className={`h-1 rounded-full transition-all duration-300 
            ${currentIndex === idx ? "w-8 bg-[#C25B3F]" : "w-4 bg-gray-300"}`}
                          aria-label={`Gehe zu Slide ${idx + 1}`}
                      />
                  ))}
                </div>
              </div>
          )}
        </div>
      </section>
  )
}
