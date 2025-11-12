import MissionVision from '../about/MissionVision';
import FacultyGrid from '../about/FacultyGrid';
import Infrastructure from '../about/Infrastructure';

export default function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#016B61] to-[#70B2B2] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">About Excel School</h1>
          <p className="text-xl text-[#9ECFD4] max-w-3xl mx-auto">
            Building excellence in education since 1990
          </p>
        </div>
      </section>

      <MissionVision />
      <FacultyGrid />
      <Infrastructure />
    </div>
  );
}
