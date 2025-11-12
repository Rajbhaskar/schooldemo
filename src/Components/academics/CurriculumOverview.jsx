import { BookOpen, Users, Globe, Trophy } from 'lucide-react';

const curriculumFeatures = [
  {
    icon: BookOpen,
    title: 'CBSE/ICSE Curriculum',
    description: 'Comprehensive board-aligned curriculum with a focus on conceptual understanding and practical application.',
  },
  {
    icon: Users,
    title: 'Small Class Sizes',
    description: 'Optimal teacher-student ratio ensuring personalized attention and interactive learning experiences.',
  },
  {
    icon: Globe,
    title: 'Global Exposure',
    description: 'International exchange programs, virtual collaborations, and exposure to global best practices.',
  },
  {
    icon: Trophy,
    title: 'Excellence Focus',
    description: 'Consistent track record of 100% pass rates and outstanding board exam results year after year.',
  },
];

export default function CurriculumOverview() {
  return (
    <section className="py-20 bg-[#E5E9C5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#016B61] mb-6">
            Our Curriculum
          </h2>
          <p className="text-[#0F172A]/70 text-lg leading-relaxed">
            At Excel School, we follow a progressive, student-centered approach that balances academic rigor 
            with creative expression, critical thinking, and character development. Our curriculum is designed 
            to prepare students not just for exams, but for life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {curriculumFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#016B61] to-[#70B2B2] rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#016B61] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-[#0F172A]/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
