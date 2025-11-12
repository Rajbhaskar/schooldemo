import { Target, Eye, BookOpen } from 'lucide-react';

const sections = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To provide world-class education that nurtures intellectual curiosity, critical thinking, and ethical values. We strive to create an inclusive learning environment where every student can discover their potential and excel in their chosen path.',
    color: 'bg-[#016B61]',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To be a leading educational institution recognized globally for academic excellence, innovative pedagogy, and holistic student development. We envision creating future leaders who are confident, compassionate, and committed to positive social change.',
    color: 'bg-[#70B2B2]',
  },
  {
    icon: BookOpen,
    title: 'Our History',
    description: 'Established in 1990, Excel School has been at the forefront of quality education for over three decades. From humble beginnings with 100 students, we have grown into a premier institution serving 2500+ students with state-of-the-art facilities and award-winning faculty.',
    color: 'bg-[#9ECFD4]',
  },
];

export default function MissionVision() {
  return (
    <section className="py-20 bg-[#E5E9C5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`${section.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#016B61] mb-4">
                  {section.title}
                </h3>
                <p className="text-[#0F172A]/70 leading-relaxed">
                  {section.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
