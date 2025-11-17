import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/pZWHhXqbwV-KfY5J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-700 ring-1 ring-gray-200">
            <span className="inline-block h-2 w-2 rounded-full bg-blue-600"></span>
            Connect Dorset — Digital Design Agency
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
            Build a brand the internet can’t ignore
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-xl">
            Websites, visual identity, and product landing pages for startups and local businesses. Fast. Modern. Conversion-driven.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <a href="#contact" className="inline-flex items-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">
              Start a Project
            </a>
            <a href="#work" className="inline-flex items-center rounded-md bg-white/80 backdrop-blur px-5 py-3 text-sm font-medium ring-1 ring-gray-200 text-gray-900 hover:bg-white">
              See our work
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white" />
    </section>
  )
}

export default Hero
