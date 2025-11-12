import MediaGallery from '../gallery/MediaGallery';

export default function GalleryPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#016B61] to-[#70B2B2] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Media Gallery</h1>
          <p className="text-xl text-[#9ECFD4] max-w-3xl mx-auto">
            Capturing moments, celebrating achievements
          </p>
        </div>
      </section>

      <MediaGallery />
    </div>
  );
}
