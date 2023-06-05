import ch from '../images/Adidas-Gazelle-femme.webp';
import mac from '../images/mac-pro.jpeg';
import nanox3 from '../images/nanox3.webp';
import cortez from '../images/nike-cortez.webp';
import gazelle from '../images/Adidas-Gazelle-3.avif';
import nb550 from '../images/NB-550-2.jpeg';
import nb2002 from '../images/NB-2002-Mule4.png';
import NLD from '../images/nike-dunk-low2.jpeg';
import NikeX from '../images/Nike-x-2.png';
import hp from '../images/hp.avif';

export const data = [
  {
    type: 'Baskets',
    id: 1,
    mark: 'Adidas',
    imageUrl: ch,
    title: 'Pink Adidas Gazelle',
    price: '90',
    description: 'Brand new pink Adidas Gazelle size 37',
  },
  {
    type: 'Baskets',
    id: 2,
    imageUrl: nanox3,
    mark: 'Reebok',
    title: 'Reebok Nano X3',
    price: '60',
    description: 'Barely worn black Reebok Nano X3 size 46',
  },

  {
    type: 'MacBook',
    id: 3,
    imageUrl: mac,
    mark: 'Appel',
    title: 'Mac Pro',
    price: '1200',
    description:
      'Apple Mac Pro intel Xeon 3,2 GHz - 64 Go RAM - 4 To SSD (2019) (A1991) Pro 580X',
  },
  {
    type: 'Baskets',
    id: 4,
    mark: 'Nike',
    imageUrl: cortez,
    title: 'Nike Cortez',
    price: '80',
    description: 'Brand new white and green Nike Cortez size 44',
  },
  {
    type: 'Baskets',
    id: 5,
    mark: 'Adidas',
    imageUrl: gazelle,
    title: 'Adidas Gazelle',
    price: '100',
    description: 'Barely worn blue suede Adidas Gazelle size 41',
  },
  {
    type: 'Baskets',
    id: 6,
    mark: 'NB',
    imageUrl: nb550,
    title: 'NB 550',
    price: '190',
    description: 'Brand new white and black New Balance 550, size 38',
  },
  {
    type: 'Baskets',
    id: 7,
    mark: 'NB',
    imageUrl: nb2002,
    title: 'NB 2002 mule',
    price: '160',
    description: 'Vintage dark blue New Balance 2002 size 43',
  },
  {
    type: 'Baskets',
    id: 8,
    mark: 'Nike',
    imageUrl: NLD,
    title: 'Jordan Low Dunk',
    price: '130',
    description:
      'White, grey and black low dunk Jordans in perfect condition, size 44 ',
  },
  {
    type: 'Baskets',
    id: 9,
    mark: 'Nike',
    imageUrl: NikeX,
    title: 'Nike x Off White',
    price: '650',
    description: 'New Nike Off White collab / never worn / size 43',
  },

  {
    type: 'PC',
    id: 10,
    mark: 'HP',
    imageUrl: hp,
    title: 'HP Pavilion 15',
    price: '990',
    description:
      'Le HP Pavilion 15 offre plus de performances dans un format plus compact, pour vous permettre d’en faire plus où que vous soyez.',
  },
];
