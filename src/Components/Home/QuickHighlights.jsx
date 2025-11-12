import { GraduationCap, UserCheck, Trophy, Phone } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Academics',
    description: 'Comprehensive curriculum with CBSE/ICSE excellence',
    color: 'bg-[#016B61]',
  },
  {
    icon: UserCheck,
    title: 'Admissions',
    description: 'Open for 2025-26. Limited seats available',
    color: 'bg-[#70B2B2]',
  },
  {
    icon: Trophy,
    title: 'Activities',
    description: 'Sports, Arts, Music, and Co-curricular programs',
    color: 'bg-[#9ECFD4]',
  },
  {
    icon: Phone,
    title: 'Contact',
    description: '24/7 support for parents and students',
    color: 'bg-[#016B61]',
  },
];

export default function QuickHighlights() {
  return (
    <section className="py-20 bg-[#E5E9C5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-10">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              >
                <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#0F172A]/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
