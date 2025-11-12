import { Download, FileText, Calendar } from 'lucide-react';

const downloads = [
  {
    title: 'Academic Syllabus 2025-26',
    type: 'PDF',
    size: '2.4 MB',
  },
  {
    title: 'Class Timetable',
    type: 'PDF',
    size: '1.8 MB',
  },
  {
    title: 'Examination Schedule',
    type: 'PDF',
    size: '1.2 MB',
  },
  {
    title: 'Academic Calendar',
    type: 'PDF',
    size: '0.9 MB',
  },
];

export default function AcademicDownloads() {
  return (
    <section className="py-20 bg-[#E5E9C5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#9ECFD4] rounded-2xl mb-4">
              <FileText className="w-8 h-8 text-[#016B61]" />
            </div>
            <h2 className="text-3xl font-bold text-[#016B61] mb-4">
              Academic Resources
            </h2>
            <p className="text-[#0F172A]/70">
              Download important academic documents and schedules
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {downloads.map((file, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#016B61]/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-[#016B61]" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#0F172A] mb-1">
                      {file.title}
                    </h4>
                    <p className="text-[#0F172A]/60 text-sm">
                      {file.type} • {file.size}
                    </p>
                  </div>
                </div>
                <button className="flex-shrink-0 bg-[#016B61] hover:bg-[#70B2B2] text-white p-2.5 rounded-lg group-hover:scale-110 transition-transform">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
