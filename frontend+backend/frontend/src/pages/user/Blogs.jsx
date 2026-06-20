function Blogs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="text-blue-600 font-medium mb-3">All Articles</p>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
          Blogs & Insights
        </h1>

        <p className="text-lg text-slate-500 max-w-2xl">
          Discover articles about web development, AI, software engineering and
          technology.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div className="h-60 bg-gray-200"></div>

            <div className="p-6">
              <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                <span>Technology</span>
                <span>•</span>
                <span>20 Jun 2026</span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Blog Title
              </h2>

              <p className="text-slate-600 mb-5">
                Blog description comes here...
              </p>

              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-700">Admin</span>

                <button className="text-blue-600 font-medium">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
