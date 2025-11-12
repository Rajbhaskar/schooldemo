import { Calendar as CalendarIcon, MapPin, Clock, Plus, Bell } from 'lucide-react';

const months = [
  'November 2025', 'December 2025', 'January 2026', 'February 2026',
];

const events = [
  {
    date: '15 Nov 2025',
    day: 'Friday',
    title: 'Annual Sports Day',
    time: '9:00 AM - 4:00 PM',
    location: 'Main Sports Ground',
    type: 'Sports',
    color: 'bg-[#016B61]',
  },
  {
    date: '22 Nov 2025',
    day: 'Friday',
    title: 'Parent-Teacher Meeting',
    time: '10:00 AM - 2:00 PM',
    location: 'School Auditorium',
    type: 'Academic',
    color: 'bg-[#70B2B2]',
  },
  {
    date: '30 Nov 2025',
    day: 'Saturday',
    title: 'Science Exhibition',
    time: '11:00 AM - 5:00 PM',
    location: 'Science Block',
    type: 'Academic',
    color: 'bg-[#9ECFD4]',
  },
  {
    date: '10 Dec 2025',
    day: 'Wednesday',
    title: 'Winter Break Begins',
    time: 'After School',
    location: 'All Campus',
    type: 'Holiday',
    color: 'bg-[#016B61]',
  },
  {
    date: '25 Dec 2025',
    day: 'Thursday',
    title: 'Christmas Celebration',
    time: '10:00 AM - 1:00 PM',
    location: 'Main Auditorium',
    type: 'Cultural',
    color: 'bg-[#70B2B2]',
  },
  {
    date: '02 Jan 2026',
    day: 'Friday',
    title: 'School Reopens',
    time: '8:00 AM',
    location: 'All Campus',
    type: 'Academic',
    color: 'bg-[#9ECFD4]',
  },
  {
    date: '26 Jan 2026',
    day: 'Monday',
    title: 'Republic Day Celebration',
    time: '8:00 AM - 11:00 AM',
    location: 'School Ground',
    type: 'Cultural',
    color: 'bg-[#016B61]',
  },
  {
    date: '15 Feb 2026',
    day: 'Sunday',
    title: 'Annual Day Function',
    time: '5:00 PM - 8:00 PM',
    location: 'Main Auditorium',
    type: 'Cultural',
    color: 'bg-[#70B2B2]',
  },
];

export default function FullEventsCalendar() {
  return (
    <section className="py-20 bg-[#E5E9C5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Month Selector */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {months.map((month, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    index === 0
                      ? 'bg-[#016B61] text-white shadow-lg'
                      : 'bg-[#E5E9C5] text-[#0F172A] hover:bg-[#70B2B2] hover:text-white'
                  }`}
                >
                  {month}
                </button>
              ))}
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Date Section */}
                  <div className={`${event.color} p-8 lg:w-48 flex flex-col items-center justify-center text-white`}>
                    <CalendarIcon className="w-8 h-8 mb-3" />
                    <div className="text-3xl font-bold mb-1">{event.date.split(' ')[0]}</div>
                    <div className="text-sm uppercase tracking-wide">{event.date.split(' ')[1]}</div>
                    <div className="text-sm mt-2 opacity-90">{event.day}</div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1 p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <div className="inline-block px-3 py-1 bg-[#9ECFD4]/20 rounded-full text-[#016B61] text-sm font-medium mb-3">
                          {event.type}
                        </div>
                        <h3 className="text-2xl font-bold text-[#016B61] mb-3">
                          {event.title}
                        </h3>
                      </div>
                      <div className="flex gap-2">
                        <button className="inline-flex items-center px-4 py-2 bg-[#016B61] hover:bg-[#70B2B2] text-white text-sm font-medium rounded-lg transition-colors">
                          <Plus className="w-4 h-4 mr-2" />
                          Add to Calendar
                        </button>
                        <button className="inline-flex items-center px-4 py-2 border-2 border-[#016B61] text-[#016B61] hover:bg-[#016B61] hover:text-white text-sm font-medium rounded-lg transition-colors">
                          <Bell className="w-4 h-4 mr-2" />
                          Remind
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 text-[#0F172A]/70">
                        <Clock className="w-5 h-5 text-[#9ECFD4]" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-[#0F172A]/70">
                        <MapPin className="w-5 h-5 text-[#9ECFD4]" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Subscribe to Calendar */}
          <div className="mt-12 bg-gradient-to-br from-[#016B61] to-[#70B2B2] rounded-2xl p-8 text-center">
            <CalendarIcon className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Subscribe to School Calendar
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Get all school events directly in your calendar app. Never miss an important date!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-[#016B61] hover:bg-[#E5E9C5] font-medium rounded-full transition-colors">
                Google Calendar
              </button>
              <button className="px-8 py-3 bg-white text-[#016B61] hover:bg-[#E5E9C5] font-medium rounded-full transition-colors">
                Apple Calendar
              </button>
              <button className="px-8 py-3 bg-white text-[#016B61] hover:bg-[#E5E9C5] font-medium rounded-full transition-colors">
                Outlook
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
