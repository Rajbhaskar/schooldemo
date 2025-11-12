import DownloadGrid from '../downloads/DownloadGrid';

export default function DownloadsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#016B61] to-[#70B2B2] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Download Center</h1>
          <p className="text-xl text-[#9ECFD4] max-w-3xl mx-auto">
            Access important documents, circulars, forms, and resources
          </p>
        </div>
      </section>

      <DownloadGrid />
    </div>
  );
}
