import CurriculumOverview from '../academics/CurriculumOverview';
import SubjectCards from '../academics/SubjectCards';
import AcademicDownloads from '../academics/AcademicDownloads';

export default function AcademicsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#016B61] to-[#70B2B2] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Academics</h1>
          <p className="text-xl text-[#9ECFD4] max-w-3xl mx-auto">
            Comprehensive curriculum designed for excellence
          </p>
        </div>
      </section>

      <CurriculumOverview />
      <SubjectCards />
      <AcademicDownloads />
    </div>
  );
}
