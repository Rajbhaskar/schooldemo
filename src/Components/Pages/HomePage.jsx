import HeroSection from '../Home/HeroSection';
import QuickHighlights from '../Home/QuickHighlights';
import PrincipalWelcome from '../Home/PrincipalWelcome';
import StatsRow from '../Home/StatsRow';
import EventsCalendar from '../Home/EventsCalendar';
import Newsletter from '../Home/Newsletter';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <QuickHighlights />
      <PrincipalWelcome />
      <StatsRow />
      <EventsCalendar />
      <Newsletter />
    </div>
  );
}
