import { useState, useEffect } from "react"
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"

interface SliderProps {
  slides: string[]
  autoPlay?: boolean
  interval?: number
}

const Slider = ({ slides, autoPlay = true, interval = 3000 }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Autoplay functionality
  useEffect(() => {
    let slideInterval: NodeJS.Timeout

    if (isAutoPlaying) {
      slideInterval = setInterval(nextSlide, interval)
    }

    return () => {
      if (slideInterval) {
        clearInterval(slideInterval)
      }
    }
  }, [isAutoPlaying, interval])

  return (
    <div
      className="overflow-hidden relative rounded-lg"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(autoPlay)}
    >
      {/* Slides container */}
      <div
        className="flex transition-transform duration-1000 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={slide || "/placeholder.svg"} alt={`Slide ${index + 1}`} className="w-full h-[480px] object-cover" />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="absolute top-0 h-full w-full flex justify-between items-center px-4">
        <button
          onClick={previousSlide}
          className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        >
          <FaArrowCircleLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        >
          <FaArrowCircleRight size={24} />
        </button>
      </div>

      {/* Indicators/dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-white" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider