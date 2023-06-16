import React from 'react';

const images = [
  {
    original: '/art/veil.png',
    description: 'Rose',
  },
  {
    original: '/art/masjid.png',
    description: 'Masjid',
  },
  {
    original: '/art/audi.png',
    description: 'Image 1',
  },
  {
    original: '/art/rowing.png',
    description: 'Image 1',
  },
  {
    original: '/art/rose.png',
    description: 'Image 1',
  },
  {
    original: '/art/mountain.png',
    description: 'Image 1',
  },
  {
    original: '/art/travis.png',
    description: 'Image 1',
  },
];

export default function CustomImageGallery() {
  return (
    <div className="image-gallery-container">
      <style jsx>{`
        .image-gallery-container {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          align-items: center;
        }
        .image-gallery-item {
          flex-shrink: 0;
          scroll-snap-align: start;
          padding: 10px;
        }
        .image-gallery-item img {
          width: 300px; /* Set the desired width for each image */
          height: auto;
          object-fit: cover;
        }
      `}</style>
      {images.map((image, index) => (
        <div className="image-gallery-item" key={index}>
          <img className ="rounded-md shadow-xl" src={image.original} alt={image.description} />
        </div>
      ))}
    </div>
  );
}
