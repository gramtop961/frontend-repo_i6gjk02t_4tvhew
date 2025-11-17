function CTA() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Let’s get you live — fast</h2>
            <p className="mt-3 text-gray-600 max-w-xl">Tell us about your business and goals. We’ll come back with a clear plan, timelines, and a fixed price.</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li>• Typical turnaround: 10–21 days</li>
              <li>• Includes copy guidance and SEO basics</li>
              <li>• Friendly for small budgets and early-stage teams</li>
            </ul>
          </div>
          <div>
            <form onSubmit={(e) => e.preventDefault()} className="rounded-xl border border-gray-200 p-6 bg-gray-50">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900" placeholder="jane@company.com" />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900" placeholder="Company or project name" />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">What do you need?</label>
                <textarea rows={4} className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900" placeholder="A few lines on your goals and timeline" />
              </div>
              <button className="mt-6 w-full inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">Request a proposal</button>
              <p className="mt-3 text-xs text-gray-500 text-center">We’ll reply within 1 business day.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
