import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
          alt="School Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-[#9ECFD4]/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-white text-sm">CBSE Affiliated · ICSE Curriculum</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl text-white mb-6 leading-tight font-bold">
            Empowering<br />
            <span className="text-[#9ECFD4]">Future Minds</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            Excellence in education through innovation, character building, and a commitment to nurturing tomorrow's leaders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center justify-center bg-[#016B61] hover:bg-[#70B2B2] text-white px-8 py-6 text-lg font-medium rounded-full shadow-xl transition-all hover:shadow-2xl hover:scale-105">
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 px-8 py-6 text-lg font-medium rounded-full transition-all">
              <Play className="mr-2 w-5 h-5" />
              Explore Campus
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
