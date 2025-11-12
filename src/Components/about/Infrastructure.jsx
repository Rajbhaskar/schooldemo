import { Building2 } from 'lucide-react';

const facilities = [
  {
    title: 'Modern Classrooms',
    image: 'https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjbGFzc3Jvb20lMjBtb2Rlcm58ZW58MXx8fHwxNzYyOTUxNDYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Science Laboratories',
    image: 'https://images.unsplash.com/photo-1605781645799-c9c7d820b4ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsYWJvcmF0b3J5JTIwc2NpZW5jZXxlbnwxfHx8fDE3NjI5MjU3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Library & Resources',
    image: 'https://images.unsplash.com/photo-1632217142144-f96b15d867a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwYm9va3N8ZW58MXx8fHwxNzYyOTQzMjM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Sports Complex',
    image: 'https://images.unsplash.com/photo-1696319179104-d85903b82048?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHNwb3J0cyUyMGFjdGl2aXRpZXN8ZW58MXx8fHwxNzYyOTUxNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Auditorium',
    image: 'https://images.unsplash.com/photo-1663247455965-b63fa4048b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBhbm51YWwlMjBkYXklMjBldmVudHxlbnwxfHx8fDE3NjI5NTE0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Campus Grounds',
    image: 'https://images.unsplash.com/photo-1759834687385-fc3a66687fb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBjYW1wdXMlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjI5NTE0NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export default function Infrastructure() {
  return (
    <section className="py-20 bg-[#E5E9C5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#9ECFD4] rounded-2xl mb-4">
            <Building2 className="w-8 h-8 text-[#016B61]" />
          </div>
          <h2 className="text-3xl font-bold text-[#016B61] mb-4">
            World-Class Infrastructure
          </h2>
          <p className="text-[#0F172A]/70 max-w-2xl mx-auto">
            State-of-the-art facilities designed to enhance learning experiences
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-80"
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Teal Overlay */}
              <div className="absolute inset-0 bg-black/30"></div>
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-semibold text-white text-center">
                  {facility.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
