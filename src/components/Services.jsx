import { Code, Palette, Rocket, Smartphone } from 'lucide-react'

const services = [
  {
    icon: Rocket,
    title: 'Launch-ready websites',
    desc: 'High-performance, SEO-friendly websites designed to convert from day one.'
  },
  {
    icon: Palette,
    title: 'Brand & visual identity',
    desc: 'Logo systems, color palettes, and typography that make you unmistakable.'
  },
  {
    icon: Code,
    title: 'Product landing pages',
    desc: 'Crisp, modern pages tailored for demos, waitlists, and product launches.'
  },
  {
    icon: Smartphone,
    title: 'Ongoing support',
    desc: 'Fast iterations, content updates, and analytics so you can focus on growth.'
  }
]

function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">What we do</h2>
          <p className="mt-3 text-gray-600">A focused set of services to help you look professional and launch quickly.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 p-6 hover:shadow-sm transition-shadow bg-white">
              <div className="h-10 w-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
