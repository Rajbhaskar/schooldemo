import { Mail, Award } from 'lucide-react';

const faculty = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Head of Science Department',
    qualification: 'Ph.D. in Physics',
    image: 'https://images.unsplash.com/photo-1758685734511-4f49ce9a382b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVycyUyMGZhY3VsdHklMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyOTUxNDU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Prof. Amit Patel',
    role: 'Mathematics Faculty',
    qualification: 'M.Sc. Mathematics',
    image: 'https://images.unsplash.com/photo-1758685734511-4f49ce9a382b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVycyUyMGZhY3VsdHklMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyOTUxNDU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Ms. Anjali Verma',
    role: 'English & Literature',
    qualification: 'M.A. English Literature',
    image: 'https://images.unsplash.com/photo-1758685734511-4f49ce9a382b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVycyUyMGZhY3VsdHklMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyOTUxNDU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Mr. Rahul Desai',
    role: 'Physical Education',
    qualification: 'B.P.Ed, Sports Coach',
    image: 'https://images.unsplash.com/photo-1758685734511-4f49ce9a382b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVycyUyMGZhY3VsdHklMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyOTUxNDU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Dr. Meera Iyer',
    role: 'Social Studies Head',
    qualification: 'Ph.D. in History',
    image: 'https://images.unsplash.com/photo-1758685734511-4f49ce9a382b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVycyUyMGZhY3VsdHklMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyOTUxNDU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Mr. Vikram Singh',
    role: 'Computer Science',
    qualification: 'M.Tech, AI Specialist',
    image: 'https://images.unsplash.com/photo-1758685734511-4f49ce9a382b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVycyUyMGZhY3VsdHklMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyOTUxNDU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export default function FacultyGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#9ECFD4] rounded-2xl mb-4">
            <Award className="w-8 h-8 text-[#016B61]" />
          </div>
          <h2 className="text-3xl font-bold text-[#016B61] mb-4">
            Our Distinguished Faculty
          </h2>
          <p className="text-[#0F172A]/70 max-w-2xl mx-auto">
            Meet our team of dedicated educators committed to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="bg-[#E5E9C5] rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Circular Photo */}
                <div className="relative mb-6">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-[#9ECFD4] group-hover:border-[#016B61] transition-colors">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-[#016B61] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#0F172A] mb-1 font-medium">
                    {member.role}
                  </p>
                  <p className="text-[#0F172A]/60 text-sm mb-4">
                    {member.qualification}
                  </p>
                  <button className="inline-flex items-center gap-2 text-[#016B61] hover:gap-3 transition-all">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm font-medium">Contact</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
