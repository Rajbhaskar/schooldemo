import { FileText, Download, File, Award } from 'lucide-react';

const categories = [
  {
    title: 'Circulars & Notices',
    icon: FileText,
    files: [
      { name: 'Fee Structure 2025-26', type: 'PDF', size: '1.2 MB' },
      { name: 'Uniform Guidelines', type: 'PDF', size: '0.8 MB' },
      { name: 'Holiday List 2025', type: 'PDF', size: '0.5 MB' },
      { name: 'Transport Routes', type: 'PDF', size: '1.5 MB' },
    ],
  },
  {
    title: 'Examination Results',
    icon: Award,
    files: [
      { name: 'Class 10 Results 2024', type: 'PDF', size: '2.1 MB' },
      { name: 'Class 12 Results 2024', type: 'PDF', size: '2.3 MB' },
      { name: 'Mid-Term Results', type: 'PDF', size: '1.8 MB' },
      { name: 'Annual Results', type: 'PDF', size: '2.5 MB' },
    ],
  },
  {
    title: 'Application Forms',
    icon: File,
    files: [
      { name: 'Admission Form', type: 'DOC', size: '0.3 MB' },
      { name: 'TC Request Form', type: 'DOC', size: '0.2 MB' },
      { name: 'Leave Application', type: 'DOC', size: '0.2 MB' },
      { name: 'Fee Concession Form', type: 'DOC', size: '0.3 MB' },
    ],
  },
  {
    title: 'School Brochures',
    icon: FileText,
    files: [
      { name: 'School Prospectus 2025', type: 'PDF', size: '5.2 MB' },
      { name: 'Admission Brochure', type: 'PDF', size: '3.8 MB' },
      { name: 'Facilities Overview', type: 'PDF', size: '4.1 MB' },
      { name: 'Annual Magazine 2024', type: 'PDF', size: '6.5 MB' },
    ],
  },
];

export default function DownloadGrid() {
  return (
    <section className="py-20 bg-[#E5E9C5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {categories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <div key={catIndex}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#016B61] to-[#70B2B2] rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#016B61]">
                    {category.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.files.map((file, fileIndex) => (
                    <div
                      key={fileIndex}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1 min-w-0">
                          <div className="w-12 h-12 bg-[#016B61]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            {file.type === 'PDF' ? (
                              <FileText className="w-6 h-6 text-[#016B61]" />
                            ) : (
                              <File className="w-6 h-6 text-[#016B61]" />
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="text-base font-semibold text-[#0F172A] mb-1 truncate">
                              {file.name}
                            </h4>
                            <p className="text-[#0F172A]/60 text-sm">
                              {file.type} • {file.size}
                            </p>
                          </div>
                        </div>
                        <button className="bg-[#016B61] hover:bg-[#70B2B2] text-white p-2.5 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0 ml-4">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
