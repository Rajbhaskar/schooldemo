import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const upcomingEvents = [
  {
    date: '15',
    month: 'Nov',
    title: 'Annual Sports Day',
    time: '9:00 AM - 4:00 PM',
    location: 'Main Sports Ground',
  },
  {
    date: '22',
    month: 'Nov',
    title: 'Parent-Teacher Meeting',
    time: '10:00 AM - 2:00 PM',
    location: 'School Auditorium',
  },
  {
    date: '30',
    month: 'Nov',
    title: 'Science Exhibition',
    time: '11:00 AM - 5:00 PM',
    location: 'Science Block',
  },
  {
    date: '10',
    month: 'Dec',
    title: 'Winter Break Begins',
    time: 'After School',
    location: 'All Campus',
  },
];

export default function EventsCalendar() {
  return (
    <section className="py-20 bg-[#E5E9C5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#9ECFD4] rounded-2xl mb-4">
            <Calendar className="w-8 h-8 text-[#016B61]" />
          </div>
          <h2 className="text-3xl font-bold text-[#016B61] mb-4">
            Upcoming Events
          </h2>
          <p className="text-[#0F172A]/70 max-w-2xl mx-auto">
            Stay updated with our academic calendar, events, and important dates
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              >
                <div className="flex gap-6">
                  {/* Date Badge */}
                  <div className="shrink-0 w-20 h-20 bg-gradient-to-br from-[#016B61] to-[#70B2B2] rounded-xl flex flex-col items-center justify-center text-white">
                    <div className="text-3xl font-bold">{event.date}</div>
                    <div className="text-xs uppercase font-medium">{event.month}</div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#0F172A] mb-3 group-hover:text-[#016B61] transition-colors">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-sm text-[#0F172A]/60">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#9ECFD4]" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#9ECFD4]" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="inline-flex items-center justify-center border-2 border-[#016B61] text-[#016B61] hover:bg-[#016B61] hover:text-white rounded-full px-8 py-3 font-medium transition-all duration-300">
              View Full Calendar
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
