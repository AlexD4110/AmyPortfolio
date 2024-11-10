import React from 'react';

// Define the structure of presentation items
interface PresentationItem {
  title: string;
  url: string;
  thumbnail: string;
}

const presentationItems: PresentationItem[] = [
  {
    title: 'Takeda Presentation',
    url: 'https://docs.google.com/presentation/d/e/2PACX-1vTTFyBuGkaTPsAbRBdP4Lodlh1Qm9H2xOY-l1Tv_Qer-sh3g3MqF9_tTRKWOUH47DS2tKpqyGlG8qIl/embed?start=false&loop=false&delayms=3000',
    thumbnail: '/image.webp',
  },
  {
    title: 'Drug Presentation',
    url: 'https://docs.google.com/presentation/d/e/2PACX-1vSkp0wyLcjWzTHJh4Sv-UaFxLDsoVfmi5cGnjiaAOH9fNKstfUN-p-3UNJP0TTUlUN-6YkJZf7I5JuQ/embed?start=false&loop=false&delayms=3000',
    thumbnail: '/cup.png',
  },
  {
    title: 'Journal Presentation',
    url: 'https://docs.google.com/presentation/d/e/2PACX-1vRsQuEVsgzXXIk8C4fGHDR8-f5Z0yDvLBbVpPQren9iu_AFlHg1mi0ZQH4DZ94d6-l8b7sRkR6hFUiq/embed?start=false&loop=false&delayms=3000',
    thumbnail: '/journal.webp',
  },
];

const ThumbnailCard: React.FC<{ item: PresentationItem }> = ({ item }) => (
  <div
    onClick={() => window.open(item.url, '_blank')}
    className="cursor-pointer border rounded-lg p-8 bg-white shadow-lg hover:shadow-xl transition-shadow hover:scale-105 transform"
    role="button"
    aria-label={`Open ${item.title}`}
    style={{ width: '500px' }}
  >
    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">{item.title}</h2>
    <div className="w-full h-72 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
      <img src={item.thumbnail} alt={`${item.title} Thumbnail`} className="w-full h-full object-contain" />
    </div>
  </div>
);

const Presentations: React.FC = () => (
  <div className="p-10 bg-gray-50 min-h-screen flex flex-col items-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-8">Presentations</h1>

    <div
      className="grid gap-10 max-w-6xl w-full"
      style={{
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'auto auto',
        gridTemplateAreas: `
          "card1 card2"
          "card3 card3"
        `,
      }}
    >
      {presentationItems.map((item, index) => (
        <div
          key={index}
          style={{
            gridArea: `card${index + 1}`,
          }}
        >
          <ThumbnailCard item={item} />
        </div>
      ))}
    </div>
  </div>
);

export default Presentations;
