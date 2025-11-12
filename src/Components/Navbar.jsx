import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Academics', path: '/academics' },
    { label: 'Downloads', path: '/downloads' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Events', path: '/events' },
  ];

  return (
    <nav className="bg-[#016B61] text-white sticky top-0 z-50 shadow-lg backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#9ECFD4] rounded-full flex items-center justify-center">
              <span className="text-[#016B61] text-xl font-bold">ES</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Excel School</h1>
              <p className="text-xs text-[#9ECFD4]">Empowering Future Minds</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors hover:text-[#9ECFD4] ${
                  location.pathname === item.path ? 'text-[#9ECFD4] font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side - Apply Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/apply"
              className="bg-[#9ECFD4] text-[#016B61] hover:bg-[#70B2B2] px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-[#70B2B2]/30 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#70B2B2]/50">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-left px-4 py-2 rounded-md transition-colors hover:bg-[#70B2B2]/30 ${
                    location.pathname === item.path ? 'bg-[#70B2B2]/20 font-semibold' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-end px-4 pt-4 border-t border-[#70B2B2]/50">
                <Link
                  to="/apply"
                  className="bg-[#9ECFD4] text-[#016B61] hover:bg-[#70B2B2] px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
