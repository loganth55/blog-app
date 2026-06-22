import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-900"></div>

              <h1 className="text-xl font-bold text-slate-900">Tech Blog</h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <Link to="/">Home</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/categories">Categories</Link>
              <Link to="/contact">Contact</Link>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link to="/login">
                <button className="text-sm font-medium text-slate-700">
                  Log in
                </button>
              </Link>

              <Link to="/register">
                <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-800 transition">
                  Sign Up
                </button>
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-xl font-bold">Tech Blog</h2>

            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={28} />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col p-5 gap-5">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>

            <Link to="/blogs" onClick={() => setMobileMenuOpen(false)}>
              Blogs
            </Link>

            <Link to="/categories" onClick={() => setMobileMenuOpen(false)}>
              Categories
            </Link>

            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>

            <hr />

            <Link to="/login">
              <button className="text-left">Log in</button>
            </Link>

            <Link to="/register">
              <button className="bg-slate-900 text-white py-3 rounded-xl">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
