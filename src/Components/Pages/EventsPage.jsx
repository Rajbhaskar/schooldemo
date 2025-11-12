import FullEventsCalendar from '../events/FullEventsCalendar';

export default function EventsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#016B61] to-[#70B2B2] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Events Calendar</h1>
          <p className="text-xl text-[#9ECFD4] max-w-3xl mx-auto">
            Stay updated with all school activities and important dates
          </p>
        </div>
      </section>

      <FullEventsCalendar />
    </div>
  );
}
