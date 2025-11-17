function Work() {
  const items = [
    {
      tag: 'Local Trades',
      title: 'SwiftBuild Contractors',
      desc: 'A bold, trustworthy site helping a Dorset builder book 32% more enquiries in 60 days.',
      image: 'https://images.unsplash.com/photo-1489514354504-1653aa90e34e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTd2lmdEJ1aWxkJTIwQ29udHJhY3RvcnN8ZW58MHwwfHx8MTc2MzMzODE3OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
    },
    {
      tag: 'Startup SaaS',
      title: 'Invoiceo',
      desc: 'Conversion-focused landing for a fintech MVP — launched to 800 waitlist signups.',
      image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop'
    },
    {
      tag: 'Hospitality',
      title: 'The Pier Cafe',
      desc: 'Elegant website with online bookings + menus for a seaside cafe in Bournemouth.',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop'
    }
  ]

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Selected work</h2>
          <p className="mt-3 text-gray-600">A few examples that show our range — from local businesses to tech startups.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-xl border border-gray-200 bg-white">
              <div className="aspect-video overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="inline-flex text-xs rounded-full bg-gray-100 text-gray-700 px-2 py-1">{item.tag}</span>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
