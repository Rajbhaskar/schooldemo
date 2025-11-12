import { Users, GraduationCap, Award, Calendar } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '2500+',
    label: 'Students',
    color: 'text-[#016B61]',
  },
  {
    icon: GraduationCap,
    value: '150+',
    label: 'Teachers',
    color: 'text-[#70B2B2]',
  },
  {
    icon: Award,
    value: '48+',
    label: 'Awards',
    color: 'text-[#9ECFD4]',
  },
  {
    icon: Calendar,
    value: '35',
    label: 'Years of Excellence',
    color: 'text-[#016B61]',
  },
];

export default function StatsRow() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#016B61] to-[#70B2B2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-[#9ECFD4] text-lg">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
