import { Atom, Calculator, Globe2, Languages, Palette, Music, Dumbbell, Cpu } from 'lucide-react';

const subjects = [
  {
    icon: Calculator,
    title: 'Mathematics',
    description: 'Advanced problem-solving, algebra, geometry, and calculus',
    color: 'from-[#016B61] to-[#70B2B2]',
  },
  {
    icon: Atom,
    title: 'Science',
    description: 'Physics, Chemistry, Biology with hands-on laboratory work',
    color: 'from-[#70B2B2] to-[#9ECFD4]',
  },
  {
    icon: Languages,
    title: 'Languages',
    description: 'English, Hindi, Sanskrit, and optional foreign languages',
    color: 'from-[#016B61] to-[#70B2B2]',
  },
  {
    icon: Globe2,
    title: 'Social Studies',
    description: 'History, Geography, Civics, and Economics',
    color: 'from-[#70B2B2] to-[#9ECFD4]',
  },
  {
    icon: Cpu,
    title: 'Computer Science',
    description: 'Programming, AI, Robotics, and Digital Literacy',
    color: 'from-[#016B61] to-[#70B2B2]',
  },
  {
    icon: Palette,
    title: 'Arts & Crafts',
    description: 'Visual arts, drawing, painting, and creative expression',
    color: 'from-[#70B2B2] to-[#9ECFD4]',
  },
  {
    icon: Music,
    title: 'Music & Dance',
    description: 'Vocal, instrumental, classical and contemporary dance',
    color: 'from-[#016B61] to-[#70B2B2]',
  },
  {
    icon: Dumbbell,
    title: 'Physical Education',
    description: 'Sports, fitness, yoga, and health awareness programs',
    color: 'from-[#70B2B2] to-[#9ECFD4]',
  },
];

export default function SubjectCards() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#016B61] mb-4">
            Subjects Offered
          </h2>
          <p className="text-[#0F172A]/70 max-w-2xl mx-auto">
            Comprehensive subject offerings designed to nurture well-rounded individuals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => {
            const Icon = subject.icon;
            return (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="bg-[#E5E9C5] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className={`w-14 h-14 bg-gradient-to-br ${subject.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#016B61] mb-3">
                    {subject.title}
                  </h3>
                  <p className="text-[#0F172A]/70 text-sm leading-relaxed">
                    {subject.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
