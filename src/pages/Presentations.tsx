import React, { useState, useCallback, useEffect } from 'react';
import PDFViewer from '@/components/PDFViewer';

// Define the structure of presentation items
interface PresentationItem {
  title: string;
  url: string;
  thumbnail: string;
  type: 'pdf' | 'pptx'; // Add 'type' to indicate the file type
}

// Define an array of presentation items with titles, URLs, thumbnails, and types
const presentationItems: PresentationItem[] = [
  { title: 'Takeda Presentation', url: '/Takeda.pdf', thumbnail: '/takeda.svg', type: 'pdf' },
  { title: 'Sample PowerPoint', url: '/Drug.pptx', thumbnail: '/sample.svg', type: 'pptx' },
  // Add more items as needed
];

// Component for displaying each presentation thumbnail
const ThumbnailCard: React.FC<{ item: PresentationItem; onClick: () => void }> = ({ item, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer border rounded p-4 hover:shadow-lg transition-shadow"
    role="button"
    aria-label={`Open ${item.title}`}
  >
    <h2 className="text-xl font-semibold">{item.title}</h2>
    <div className="h-40 flex items-center justify-center bg-gray-200">
      <img src={item.thumbnail} alt={`${item.title} Thumbnail`} className="h-full object-contain" />
    </div>
  </div>
);

const Presentations: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PresentationItem | null>(null);

  // Close modal and reset selected item
  const closeModal = useCallback(() => {
    setSelectedItem(null);
  }, []);

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedItem) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, closeModal]);

  // Function to get full URL for the presentation
  const getFullUrl = (url: string) => {
    if (typeof window !== 'undefined') {
      return `${window.location.origin}${url}`;
    }
    return url; // Fallback
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Presentations</h1>

      {/* Grid layout */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {presentationItems.map((item, index) => (
          <ThumbnailCard key={index} item={item} onClick={() => setSelectedItem(item)} />
        ))}
      </div>

      {/* Modal for PDF or PPTX Presentation */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg p-6 pt-12 w-full max-w-5xl max-h-full overflow-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded z-50"
              aria-label="Close viewer"
            >
              Close
            </button>
            {selectedItem.type === 'pdf' ? (
              <PDFViewer pdfUrl={selectedItem.url} />
            ) : selectedItem.type === 'pptx' ? (
              <iframe
                src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
                  getFullUrl(selectedItem.url)
                )}`}
                width="100%"
                height="600px"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default Presentations;
