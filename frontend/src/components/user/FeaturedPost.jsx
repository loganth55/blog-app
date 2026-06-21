function FeaturedPost() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white">
        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Featured Post"
          className="w-full h-64 md:h-96 object-cover"
        />

        {/* Content */}
        <div className="p-6 md:p-8">
          <p className="text-sm font-medium text-purple-600 mb-3">
            Design • 20 Jan 2026
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            UX review presentations
          </h2>

          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            How do you create compelling presentations that wow your colleagues
            and impress your managers? Learn practical techniques and design
            principles used by top teams.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>

            <div>
              <p className="font-semibold text-gray-900">Olivia Rhye</p>

              <p className="text-sm text-gray-500">Product Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedPost;
