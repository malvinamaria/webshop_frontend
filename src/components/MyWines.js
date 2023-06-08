/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

const products = [
  {
    id: 1,
    name: '"Il Grappolo',
    href: '#',
    price: '$13',
    description:
      'The nose is a bit shy but eventually reveals underbrush, red berry and a toasted note.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg',
    imageAlt: 'Red wine',
  },
  {
    id: 2,
    name: 'Focus Card HolderHestan',
    href: '#',
    price: '$64',
    description:
      'Brambly and herbal, this wine shows bright acidity underlying a full-bodied, incoherently ripe palate of tar, toffee and rich cola notes.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-02.jpg',
    imageAlt: 'White wine',
  },
  {
    id: 3,
    name: 'Ehret',
    href: '#',
    price: '$32',
    description:
      'Heather GrayThis Cabernet Sauvignon-dominant blend boasts leather, tobacco leaf and black pepper flavors.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg',
    imageAlt: 'Orange wine',
  },
];

export const MyWines = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
              <p className="mt-1 text-sm italic text-gray-500">
                {product.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
