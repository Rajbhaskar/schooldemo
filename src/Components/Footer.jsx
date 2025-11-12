import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#016B61] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#9ECFD4] rounded-full flex items-center justify-center">
                <span className="text-[#016B61] text-xl font-bold">ES</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Excel School</h3>
                <p className="text-xs text-[#9ECFD4]">Since 1990</p>
              </div>
            </div>
            <p className="text-[#9ECFD4] leading-relaxed">
              Empowering minds and shaping futures through excellence in education, innovation, and character building.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#9ECFD4]">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-[#9ECFD4] transition-colors">About Us</a></li>
              <li><a href="#admissions" className="hover:text-[#9ECFD4] transition-colors">Admissions</a></li>
              <li><a href="#academics" className="hover:text-[#9ECFD4] transition-colors">Academics</a></li>
              <li><a href="#faculty" className="hover:text-[#9ECFD4] transition-colors">Faculty</a></li>
              <li><a href="#careers" className="hover:text-[#9ECFD4] transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#9ECFD4]">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#downloads" className="hover:text-[#9ECFD4] transition-colors">Downloads</a></li>
              <li><a href="#gallery" className="hover:text-[#9ECFD4] transition-colors">Gallery</a></li>
              <li><a href="#events" className="hover:text-[#9ECFD4] transition-colors">Events</a></li>
              <li><a href="#results" className="hover:text-[#9ECFD4] transition-colors">Results</a></li>
              <li><a href="#contact" className="hover:text-[#9ECFD4] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#9ECFD4]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#9ECFD4] flex-shrink-0 mt-1" />
                <span className="text-sm">123 Education Lane, Knowledge City, Mumbai - 400001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#9ECFD4]" />
                <a href="tel:+919876543210" className="text-sm hover:text-[#9ECFD4] transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#9ECFD4]" />
                <a href="mailto:info@excelschool.edu" className="text-sm hover:text-[#9ECFD4] transition-colors">
                  info@excelschool.edu
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#70B2B2] rounded-full flex items-center justify-center hover:bg-[#9ECFD4] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#70B2B2] rounded-full flex items-center justify-center hover:bg-[#9ECFD4] transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#70B2B2] rounded-full flex items-center justify-center hover:bg-[#9ECFD4] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#70B2B2] rounded-full flex items-center justify-center hover:bg-[#9ECFD4] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#70B2B2] mt-12 pt-8 text-center">
          <p className="text-[#9ECFD4] text-sm">
            © 2025 Excel School. All rights reserved. | 
            <a href="#privacy" className="hover:text-white transition-colors ml-1">Privacy Policy</a> | 
            <a href="#terms" className="hover:text-white transition-colors ml-1">Terms & Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
