import { Mail, Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#9ECFD4] via-[#70B2B2] to-[#016B61]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-full mb-6">
            <Mail className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-4">
            Stay Connected
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Subscribe to our newsletter for updates on events, admissions, results, and important announcements
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full h-14 bg-white border-0 text-[#0F172A] placeholder:text-[#0F172A]/50 rounded-xl px-6 text-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <button 
                type="submit"
                className="inline-flex items-center justify-center h-14 bg-[#016B61] hover:bg-[#70B2B2] text-white px-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 font-medium"
              >
                <Send className="mr-2 w-5 h-5" />
                Subscribe
              </button>
            </form>
            <p className="text-white/70 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
