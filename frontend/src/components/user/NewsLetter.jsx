function Newsletter() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center">
        <p className="text-sm font-medium text-slate-300 mb-4">Newsletter</p>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Let's get started today
        </h2>

        <p className="text-slate-300 max-w-2xl mx-auto mb-8">
          Join thousands of developers receiving the latest articles, tutorials,
          and tech updates directly in their inbox.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-4 rounded-xl outline-none"
          />

          <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
