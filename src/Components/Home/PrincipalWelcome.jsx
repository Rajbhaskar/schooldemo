import { Quote } from 'lucide-react';

export default function PrincipalWelcome() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Principal Photo */}
            <div className="relative flex-shrink-0">
              <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-[#9ECFD4] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1627161683077-e34782c24d81?q=80&w=703&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Principal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#016B61] text-white px-6 py-2 rounded-full shadow-lg">
                <span className="text-sm font-medium">Principal</span>
              </div>
            </div>

            {/* Welcome Message */}
            <div className="flex-1">
              <div className="mb-6">
                <Quote className="w-12 h-12 text-[#9ECFD4] mb-4" />
                <h2 className="text-3xl font-bold text-[#016B61] mb-4">
                  Welcome to Excel School
                </h2>
              </div>
              
              <div className="space-y-4 text-[#0F172A] leading-relaxed">
                <p className="text-lg italic">
                  "Education is not the filling of a pail, but the lighting of a fire."
                </p>
                <p>
                  At Excel School, we believe in nurturing young minds through a holistic approach to education. 
                  Our commitment to academic excellence, combined with character development and innovative 
                  teaching methods, prepares students not just for examinations, but for life itself.
                </p>
                <p>
                  With over three decades of educational excellence, we continue to set benchmarks in quality 
                  education, infrastructure, and student welfare. Join us in this journey of transformation.
                </p>
              </div>

              <div className="mt-6">
                <p className="text-lg font-semibold text-[#016B61]">
                  Dr. Sakshi Sharma
                </p>
                <p className="text-[#0F172A]/60 text-sm">
                  Principal, Excel School
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
