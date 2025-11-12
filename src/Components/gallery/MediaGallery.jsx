import { useState } from 'react';
import { X, Play, Image as ImageIcon } from 'lucide-react';

const categories = ['All', 'Annual Day', 'Sports', 'Events', 'Classrooms'];

const galleryItems = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1663247455965-b63fa4048b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBhbm51YWwlMjBkYXklMjBldmVudHxlbnwxfHx8fDE3NjI5NTE0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Annual Day',
    title: 'Annual Day 2024',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1696319179104-d85903b82048?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHNwb3J0cyUyMGFjdGl2aXRpZXN8ZW58MXx8fHwxNzYyOTUxNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sports',
    title: 'Sports Day',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjbGFzc3Jvb20lMjBtb2Rlcm58ZW58MXx8fHwxNzYyOTUxNDYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Classrooms',
    title: 'Modern Classrooms',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1605781645799-c9c7d820b4ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsYWJvcmF0b3J5JTIwc2NpZW5jZXxlbnwxfHx8fDE3NjI5MjU3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Events',
    title: 'Science Exhibition',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1632217142144-f96b15d867a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwYm9va3N8ZW58MXx8fHwxNzYyOTQzMjM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Classrooms',
    title: 'Library',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1759834687385-fc3a66687fb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBjYW1wdXMlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjI5NTE0NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Events',
    title: 'Campus View',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1663247455965-b63fa4048b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBhbm51YWwlMjBkYXklMjBldmVudHxlbnwxfHx8fDE3NjI5NTE0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Annual Day',
    title: 'Cultural Program',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1696319179104-d85903b82048?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHNwb3J0cyUyMGFjdGl2aXRpZXN8ZW58MXx8fHwxNzYyOTUxNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sports',
    title: 'Athletic Meet',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1605781645799-c9c7d820b4ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsYWJvcmF0b3J5JTIwc2NpZW5jZXxlbnwxfHx8fDE3NjI5MjU3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Classrooms',
    title: 'Science Lab',
  },
];

export default function MediaGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-[#E5E9C5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#016B61] text-white shadow-lg scale-105'
                  : 'bg-white text-[#0F172A] hover:bg-[#70B2B2] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer aspect-square"
              onClick={() => setLightboxImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Mint Overlay on Hover */}
              <div className="absolute inset-0 bg-[#9ECFD4]/0 group-hover:bg-[#9ECFD4]/60 transition-all duration-300"></div>
              
              {/* Icon and Title */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.type === 'video' ? (
                  <Play className="w-16 h-16 text-white mb-4" />
                ) : (
                  <ImageIcon className="w-16 h-16 text-white mb-4" />
                )}
                <h3 className="text-white text-xl font-semibold px-4 text-center">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <img
              src={lightboxImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-xl"
            />
          </div>
        )}
      </div>
    </section>
  );
}
